# Tools and resources...

* [Docker containers for use](https://gitlab.labranet.jamk.fi/tools-and-services?nav_source=navbar)


# Robot Framework

The idea is to run the Robot Framework in a container. First you need to build the image from the repository above, or copy that project into your project, edit or configure it before building the image and pushing it to the project's container registry. After you have the image in the registry, you can edit your .gitlab-ci.yml:

```
stages:
  - test

test:
  stage: test
  image: IMAGE_FROM_REGISTRY
  script:
    - export ROBOT_TESTS=PATH_TO_TESTS_DIRECTORY/
    - export OUTPUT_DIR=DIRECTORY_TO_SAVE_OUTPUT_TO
    - run.sh
  artifacts:
    paths:
      - DIRECTORY_TO_SAVE_OUTPUT_TO/
```

Remember also to make a new directory where your tests are. For the tests, you can start by using the following test as a template:
```
*** Keywords ***
Start Chrome
    ${chrome_options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${chrome_options}    add_argument    --no-sandbox
    Create Webdriver    Chrome      chrome_options=${chrome_options}

*** Test Cases ***
Test Chrome
    Start Chrome
    Go To   http://www.google.com
    Title Should Be     Google
    Close Browser

Test Firefox
    Open Browser   http://www.google.com    Firefox
    Title Should Be     Google
    Close Browser

```