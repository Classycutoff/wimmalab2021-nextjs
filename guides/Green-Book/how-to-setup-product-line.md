# OLD GUIDE - How to set up product line for CayaC

## Prequisites

* You'll need a Gitlab account 
* git client (not really but it will be easier)
* Knowledge of Docker, Kubernetes, google cloud services and .yaml -files
* Google cloud platform account 
* Kubernetes cluster on Googlec loud

## Create a new subgroup

Go to Gitlab. Create a new subgroup

then you need to create a new project for every repository you need

"source"

"site"

"OPF"

### Clone the needed repositories

Go to [CayaC](https://gitlab.labranet.jamk.fi/wimma-lab-2019/mysticons/cayac) Git and clone the needed repos

Minimum will be: "source", "site" and "OPF"

You need to clone each repository individually.

## On terminal:

### Git global setup

    git config --global user.name "user_name"
    
    git config --global user.email "user_email"

### Push an existing Git repository (Do this for every repo you cloned)
   
    cd existing_repo
    
    git remote rename origin old-origin
    
    git remote add origin https://gitlab.labranet.jamk/repo_address.git
    
    git push -u origin --all
    
# source -repository confic

## configuring the files

The .yaml files do need a considerable amount of configuration to work. That is why you should have some information about yaml, docker and kubernetes.

Also you will need to set up an account on Google cloud platform, set up a kubernetes cluster and define the ip:s of the cluster, which you then update to the .gitlab-ci.yaml.

How to get the security token from google cloud platform: 

* "IAM & admin --> Service accounts" there on the Actions tab, select Create key. Do it in JSON and save it. 
* Then go to your Gitlab project "Settings --> CI/CD --> Variables" KEY = "SERVICE_ACCOUNT_KEY" VALUE = "copypaste everything from that JSON file", click MASKED tab off. 
* Then save variables.

It should now be linked to your google cloud platform. The "SERVICE_ACCOUNT_KEY" is read from the `.gitlab-ci.yml` file and the variable should be exactly that!
(Or if you prefer a different named variable then also alter it in the `.gitlab-ci.yml` also)

ALSO you need to setup some Gilabs runners. There are instructions on [DemoFrontend](https://gitlab.labranet.jamk.fi/wimma-lab-2019/mysticons/cayac/DemoFrontend)

## Notes

* Some of the tests are run ONLY on Development branch, and some only on Master. So use branching! It's good for you. And your team.
* You should go thrue the `.gitlab-ci.yml` file and othe `.yml` files and modify the url's, ports and names for your own project when necessary.
* There are more deatailed explanations from the different tools and what they do in the [Tools](https://gitlab.labranet.jamk.fi/wimma-lab-2019/mysticons/cayac/tools) repository.
* There are 2 different demos which you can use as a reference when setting up your project [DemoFrontend](https://gitlab.labranet.jamk.fi/wimma-lab-2019/mysticons/cayac/DemoFrontend) and [Demo](https://gitlab.labranet.jamk.fi/wimma-lab-2019/mysticons/cayac/demo)


# site -repository

This is where your teams homepage is. There is a premade template of a site which you can use by just modifying the index.html in the "public" folder. 
This is just a simple layout using HTML5 and it should be easy to modify.

Of course you can use your own desing if you so choose.

You can find your sites URL in "Settings --> Pages" -tab

# opf-vanilla-en -repository
 
## Open project framework

This is a premade framework for your team to use. It contains such useful templates as Project contracts, Requirement specification, mindmaps, test plans and such.
You can use this as a base for your project. This also generates an HTML based OPF site for you automatically. 

You will find the URL in site repository "Settings --> Pages"