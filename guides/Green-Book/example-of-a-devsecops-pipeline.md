# A working CI/CD-pipeline
This is a tutorial to make a working CI/CD-pipeline, that uses gitlab for version control. The pipeline works as followed:
1. You commit a change to your product and the pipeline is triggered
2. Gitlab runner will build an image from your repository and push the image into your project's container register in Gitlab
3. Gitlab runner will also push the image to your project's container register in Google Cloud's
4. Runner will build a container and deploy the product to Google Cloud into a Kubernetes cluster, so you can access your product

NOTE: In this example our product is just a simple html file that prints out "Hello World".

## First you need a google account and credits on your google cloud
Go to [google cloud](https://console.cloud.google.com). Log in from top right corner and make sure you have enough credits by clicking navigation menu on the top left corner and select "billing". Once you have confirmed you have the credits, we'll start setting up the project.

## Creating a new project
We'll be using the google cloud shell tool, so open it from top right corner. We'll use the command

    gcloud init

to start initializing our project. When asked to pick a configuration to use, you can select 1 to use the already existing (default) configuration. Next you have to choose your account, select the one you are logged in as by choosing 1. Next you have to create a new project and you must enter a unique ID for your project. NOTE: ID's have to be unique across all projects ever made. If the ID is already used, you can restart the project creating process with the command gcloud init. Once the project is set up, you should see on the command prompt something similar to this:

    username@cloudshell:~ (project_name)$

## Creating a new Kubernetes cluster

Now we are ready to create our kubernetes cluster for our project. Use the command

    gcloud container clusters create cluster_name --zone=europe-west1-b

If you get an error saying you need to enable Kubernetes Engine API, please do so (you also need to set up billing for this and wait for few minutes for the API to get activated).

Now you should have your cluster up and running. Next we need to get credentials for the cluster, this way all the commands take effect on the chosen cluster. Use the command

    gcloud container clusters get-credentials cluster_name --zone=europe-west1-b

Now we have a project up and Kubernetes cluster of virtual machines running.

Next we will reserve an IP address for our cluster, so we can access our services with that IP. We use the following command:

    gcloud compute addresses create demo-dev-ip --region europe-west1

where demo-dev-ip is just a name for the IP(s) you create. Now the cluster should have an IP address and we can check it with the following command:

    gcloud compute addresses describe demo-dev-ip --region europe-west1

## Get credentials for Google Cloud

We still need to connect the project in Google Cloud to our Gitlab project by using service account key. You can create the service account key for your project in Google Cloud in APIs & Services --> Credentials. Choose Create credentials and select Service accout key, then select Computer Engine default service account as your service account and JSON as key type. Open the JSON file created with any text editor and copy the contents to your Gitlab project. Do this by selecting Settings --> CI / CD --> Variables. Input SERVICE_ACCOUNT_KEY as Key and the copied contents to value and save variables.

Now you should be ready to start configuring your CI/CD-pipeline.




## Required files for the pipeline

In order to work, we need to have at least three files where we configure the CI/CD-pipeline. First one is already familiar, the .gitlab-ci.yml. Here is an example for it

```
stages:
  - build_product
  - deploy_product

variables:
  CLOUD_IMAGE_NAME: gcr.io/wimmalab/test-project # replace with your google cloud image name, so that gcr.io is your register, wimmalab your project an test-project your image
  CLOUD_REGISTRY: gcr.io # google cloud register, this is the default 
  CLOUD_PROJECT: wimmalab # replace with google cloud project name 
  CLUSTER_NAME: eka # replace with your cluster name
  
build_product:
  stage: build_product
  image: docker:git
  variables:
    DOCKER_DRIVER: overlay2
  services:
    - docker:dind
  before_script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY # logs in to gitlab container registry
  script:
    - docker build --cache-from $CI_REGISTRY_IMAGE --tag $CI_REGISTRY_IMAGE . # builds an image from current folder (.) and tags it with the correct name
    - docker push $CI_REGISTRY_IMAGE # pushes the image to gitlab's registry
    - docker tag $CI_REGISTRY_IMAGE:latest $CLOUD_IMAGE_NAME # renames the image for google cloud
    - echo "$SERVICE_ACCOUNT_KEY" > key.json # gets credentials
    - cat key.json | docker login -u _json_key --password-stdin $CLOUD_REGISTRY # logs in to google cloud registry, gcr.io is the default
    - docker push $CLOUD_IMAGE_NAME # pushes the image to google cloud registry
  only: 
    - dev

deploy_product:
  stage: deploy_product
  image: gitlab.labranet.jamk.fi:4567/fullstack-examples/google-cloud-sdk
  script:
    - echo "$SERVICE_ACCOUNT_KEY" > key.json
    - gcloud auth activate-service-account --key-file=key.json
    - gcloud config set project $CLOUD_PROJECT # sets project to your project
    - gcloud config set container/cluster $CLUSTER_NAME # sets cluster to your cluster
    - gcloud config set compute/zone europe-west1-b
    - gcloud container clusters get-credentials $CLUSTER_NAME --zone europe-west1-b # gets credentials to use kubernetes cluster

    # New deployment
    - kubectl delete deployments demo
    - kubectl delete services demo
    - kubectl apply -f Deployment.yaml
  only:
    - dev

```

The second file you need is Dockerfile which we use to build an image of our repository. In this case, when the product is just a simple HTML-page, we use nginx web server running on alpine linux, so our Dockerfile will look like this:

```
FROM nginx:alpine
COPY . /usr/share/nginx/html
```

The third file we need is used to deploy the product to Google Cloud, here it is called deployment.yaml. Here is an example of the file:
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: demo
  labels: 
    app: demo
spec:
  selector:
    matchLabels:
      app: demo
  template:
    metadata:
      labels:
        app: demo
    spec:
      containers:
        - name: demo
          image: REGISTRY/PROJECT/IMAGE:latest # replace these with the correct ones
          ports:
            - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: demo
  name: demo
  namespace: default
spec:
  type: LoadBalancer
  loadBalancerIP: 35.205.246.172 # replace with the IP your cluster has
  ports:
    - port: 8080 # target port where your product is accessed from
      targetPort: 80
  selector:
    app: demo

```

Now, if all we as it should, your website should be accessed in the IP and port mentined in the deployment.yaml. It might take a few minutes for the service to get the IP, you can check this in the Google Cloud shell by typing

    kubectl get services

If you can't access your page, you can try to debug by typing

    kubectl get pods

and

    kubectl get deployments

You can remove your pods/deployments/services by typing

    kubectl delete pods/deployments/services name

where pods/deployments/services is the type and name is the name.

<!--
## Pushing demo app's containers into the project

*** Make tutorial how to pull those repos to your project, how to build containers from them ***

First we will pull the containers to our Cloud Shell from https://hub.docker.com/r/bendahl/todo-backend and https://hub.docker.com/r/bendahl/todo-frontend with the commands

    docker pull bendahl/todo-backend
    
and

    docker pull bendahl/todo-frontend

You can check that the containers were downloaded to your Cloud Shell:

    docker images

Now we will tag those images:
    
    docker tag [SOURCE_IMAGE] [HOSTNAME]/[PROJECT-ID]/[IMAGE]

SOURCE_IMAGE is the image we just pulled, bendahl/todo-backend and bendahl/todo-frontend, HOSTNAME is gcr.io by default, PROJECT-ID is your project-id and IMAGE is the name we will give to this image:
    
    docker tag bendahl/todo-backend gcr.io/wimmalab1/todobackend

And we will do the same for the frontend:

    docker tag bendahl/todo-frontend gcr.io/wimmalab1/todofrontend

Now we can push those tagged images to our project's container register:

    docker push [HOSTNAME]/[PROJECT-ID]/[IMAGE]
    
for us:

    docker push gcr.io/wimmalab1/todobackend

and

    docker push gcr.io/wimmalab1/todofrontend

We can check the images are in the registery:

    gcloud container images list

## Deploying demo app to the Google Cloud

Now we will deploy the demo app to our Kubernetes cluster by using yaml-files. You can find the files [here](back.yaml) for the backend container and [here](front.yaml) for the frontend container. Create two new files using the Cloud Shell, the names are not important but here we use front.yaml and back.yaml for clarity.

    nano front.yaml

and

    nano back.yaml

Copy-paste the contents of the files linked above to the files on the server and edit image locations to match yours. After that you can run the containers with the commands

    kubectl apply -f back.yaml

and

    kubectl apply -f front.yaml

If everything went as is should have gone, you should see todoback and todofront services running and todofront with an external IP (might take a few minutes) with the command

    kubectl get services

Now your demo application should be running at the address http://[external-ip]:8080
-->