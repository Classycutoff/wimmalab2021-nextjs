*** Settings ***
Library     SeleniumLibrary


*** Keywords ***
Start Chrome
    ${chrome_options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${chrome_options}    add_argument    --no-sandbox
    Create Webdriver    Chrome      chrome_options=${chrome_options}


*** Test Cases ***

Test chrome
    Open Browser   http://vm3714.kaj.pouta.csc.fi:30149/   chrome
    Set Window size	    1366 768
    Title Should Be     WIMMA Lab
    Close Browser

Test firefox
    Open Browser   http://vm3714.kaj.pouta.csc.fi:30149/   firefox
    Set Window size	    1366  768
    Title Should Be     WIMMA Lab
    Close Browser
    
