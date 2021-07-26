*** Settings ***
Library     SeleniumLibrary
Library     Process

*** Keywords ***
Start Chrome
    ${chrome_options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${chrome_options}    add_argument    --no-sandbox
    Create Webdriver    Chrome      chrome_options=${chrome_options}

*** Test Cases ***

Test chromeLanding
    Start Chrome
    Go To    http://vm3714.kaj.pouta.csc.fi:30149/    
    Set Window size	    1366  768
    Title Should Be      WIMMA Lab
    Capture Page Screenshot  ChromeEtu  
    Close Browser
    

Test firefoxLanding
    Open Browser    http://vm3714.kaj.pouta.csc.fi:30149/   Firefox
    Set Window size	     1920  1080
    Title Should Be      WIMMA Lab
    Capture Page Screenshot   FireEtu
    
