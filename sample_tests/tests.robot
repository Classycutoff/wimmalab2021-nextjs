*** Settings ***
Library     SeleniumLibrary

*** Keywords ***
Start Chrome
    ${chrome_options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${chrome_options}    add_argument    --no-sandbox
    Create Webdriver    Chrome      chrome_options=${chrome_options}

*** Test Cases ***
Test Firefox
    Open Browser   http://google.com    Firefox
    Title Should Be     Google
    Close Browser

Test Chrome
    Start Chrome
    Go To   http://www.google.com
    Title Should Be     Google
    Close Browser
    
