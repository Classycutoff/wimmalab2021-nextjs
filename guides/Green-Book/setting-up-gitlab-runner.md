# How to set up Gitlab runner

## What is an Gitlab runner

Basically, it is just a (virtual) machine that is used to run the commands in your .gitlab-ci.yaml. In this tutorial we show how you can set up your own runner by creating a virtual machine on Google Cloud.

## Why would you need a separate Gitlab runner

If you are trying to use Labranet's Gitlab runner, you might run into some errors. For the runner to work properly with some images, for example docker-in-docker version 19.03.1 or newer, the runner needs to have root-level access, and that is not possible in Labranet. That's why you need to use your own Gitlab runner.

## Setting up Gitlab runner

### Create a virtual machine where to install the Gitlab runner

First we log in to Google Cloud in https://cloud.google.com. You can use the same account and the same project as you used for creating the Kubernetes-cluster. Select console from top right, then open the menu from top left corner and select Computer Engine --> VM instances. Here you can manage and create virtual machines and you should see the virtual machines in your Kubernetes Cluster. Select Create instance to create a new VM. You can use the default settings for most parts, but I'd recommend you change the same into something more descibing, such as gitlab-runner and the region to europe-north1. Also I'd change the OS on the VM to Ubuntu LTS and from Identity and API access you must change Access scopes to allow full access to all Cloud APIs. Then create the VM. After a few seconds, you should see your new VM in the list.

### Install and run the Gitlab runner

Connect to your VM with SSH, you can do it in browser by selecting SSH on the VM in the VM instances list. Now we follow instructions from https://docs.gitlab.com/runner/install/linux-manually.html.

First we download the binaries with the command

    sudo curl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64

Then we give it permissions to execute:

    sudo chmod +x /usr/local/bin/gitlab-runner

Next, we istall Docker and Kubectl with:

    curl -sSL https://get.docker.com/ | sh

and

    sudo snap install kubectl --classic

Now we must create a Gitlab CI user:

    sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash

We also need to add the Gitlab CI user to docker group so we can use it as a non-root user:

    sudo usermod -aG docker gitlab-runner

Now we are ready to install and run the Gitlab runner as service:

    sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
    sudo gitlab-runner start

We still need to register the runner so our Gitlab project can use it

### Registering the Gitlab runner

To register the runner, run the following command:

    sudo gitlab-runner register

Enter your Gitlab instance URL:

    Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com )
    https://gitlab.labranet.jamk.fi

Get the token from your project. Go to the project in Gitlab where you want to use this runner, select settings --> CI/CD --> Runners. From specific runners you can find the token needed to register your runner.

Enter the token:

    Please enter the gitlab-ci token for this runner
    xxx

Enter description for your runner:

    Please enter the gitlab-ci description for this runner
    [hostname] my-runner

Enter tags for the runner (you can tell Gitlab to use this runner by using these tags in your .gitlab-ci.yaml)

    Please enter the gitlab-ci tags for this runner (comma separated):
    my-tag,another-tag

Enter the runner executor (select shell):

    Please enter the executor: ssh, docker+machine, docker-ssh+machine, kubernetes, docker, parallels, virtualbox, docker-ssh, shell:
    shell

Now your runner should be up and registered and you should be able to see it where you got your token, in Gitlab select settings --> CI/CD --> runners. 




    



