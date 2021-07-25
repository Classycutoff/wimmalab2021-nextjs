*** Settings ***
Library     SeleniumLibrary
Library     Process

*** Keywords ***
Start Chrome
    ${chrome_options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${chrome_options}    add_argument    --no-sandbox
    Create Webdriver    Chrome      chrome_options=${chrome_options}


    
    

*** Test Cases ***

Test chrome
    sleep        5
    Start Chrome
    sleep        5
    Go To    http://128.214.252.171:30149   
    Set Window size	    1366  768
    Title Should Be      WIMMA Lab
    Capture Page Screenshot  screenshot 100%    
    Close Browser
    
    

Test firefox
    sleep       5
    Open Browser    http://128.214.252.171:30149   Firefox
    sleep       5
    Set Window size	     1920  1080
    Title Should Be      WIMMA Lab
    Capture Page Screenshot   
    Close Browser
    
