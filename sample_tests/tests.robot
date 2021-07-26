*** Settings ***
Library     SeleniumLibrary
Library     Process

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
    
Ping test
    ${result} =     Run Process   ping 127.0.0.1 -c 1   shell=True
    Should Contain   ${result.stdout}     64 bytes from 127.0.0.1:
