# Here it starts....

![](https://cdn.pixabay.com/photo/2017/02/25/02/49/rail-2096825_960_720.jpg)


## SOURCE-repository for execute test run for CI/CD pipeline

Are you setting up virtual company source repository first time? Please read on!

Source repository contains a seed code for DevSecOps-pipeline, which should be setup first to make sure all things are allright!

* [Download Latest SOURCE repository's export file](https://www.dropbox.com/s/ewxygsjaphhkgw9/open-project-framework_opf-source_export.tar.gz?dl=1)

This source has only .gitlab-ci.yml, which is used to run commands when CI/CD-pipeline is triggered. This file has only a rough frame of jobs, and it does not actually do anything else but echo few lines in the runner. You can see the pipeline and jobs by selecting CI / CD from the left navigation bar. You need to edit the .gitlab-ci.yml to suite your project and needs. You can look for an example in the next page: [example of a working DevSecOps-pipeline](example-of-a-devsecops-pipeline.md)
