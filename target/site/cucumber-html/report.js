$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Check BrowserSite and navigation to other products",
  "description": "",
  "id": "check-browsersite-and-navigation-to-other-products",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Check the product navigation through FADAVIS.COM",
  "description": "",
  "id": "check-browsersite-and-navigation-to-other-products;check-the-product-navigation-through-fadavis.com",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch URL for Login",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Login in the application with \"\u003cemailid\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on BrowserSite dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on Davis Edge",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "it should open the new tab with title Davis Edge",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "check-browsersite-and-navigation-to-other-products;check-the-product-navigation-through-fadavis.com;",
  "rows": [
    {
      "cells": [
        "emailid",
        "password"
      ],
      "line": 10,
      "id": "check-browsersite-and-navigation-to-other-products;check-the-product-navigation-through-fadavis.com;;1"
    },
    {
      "cells": [
        "vandanasharma@qainfotech.com",
        "password"
      ],
      "line": 11,
      "id": "check-browsersite-and-navigation-to-other-products;check-the-product-navigation-through-fadavis.com;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5256529664,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check the product navigation through FADAVIS.COM",
  "description": "",
  "id": "check-browsersite-and-navigation-to-other-products;check-the-product-navigation-through-fadavis.com;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch URL for Login",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Login in the application with \"vandanasharma@qainfotech.com\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on BrowserSite dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on Davis Edge",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "it should open the new tab with title Davis Edge",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctions.launch_URL_for_Login()"
});
formatter.result({
  "duration": 8274360323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vandanasharma@qainfotech.com",
      "offset": 31
    },
    {
      "val": "password",
      "offset": 66
    }
  ],
  "location": "CommonFunctions.login_in_the_application_with_and(String,String)"
});
formatter.result({
  "duration": 14782540097,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.click_on_BrowserSite_dropdown()"
});
formatter.result({
  "duration": 699324133,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.click_on_Davis_Edge()"
});
formatter.result({
  "duration": 157922596,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.it_should_open_the_new_tab_with_title_Davis_Edge()"
});
formatter.result({
  "duration": 8476441121,
  "status": "passed"
});
formatter.after({
  "duration": 2904454710,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Check the Authenticity of the FADAVIS.COM website.",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Check the authenticity using correct login credentials.",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;check-the-authenticity-using-correct-login-credentials.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch URL for Login",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Login/Join button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter CorrectEmail \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter CorrectPassword \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Login is Successfull.",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;check-the-authenticity-using-correct-login-credentials.;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 11,
      "id": "check-the-authenticity-of-the-fadavis.com-website.;check-the-authenticity-using-correct-login-credentials.;;1"
    },
    {
      "cells": [
        "vandanasharma@qainfotech.com",
        "password"
      ],
      "line": 12,
      "id": "check-the-authenticity-of-the-fadavis.com-website.;check-the-authenticity-using-correct-login-credentials.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4523214879,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Check the authenticity using correct login credentials.",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;check-the-authenticity-using-correct-login-credentials.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch URL for Login",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Login/Join button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter CorrectEmail \"vandanasharma@qainfotech.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter CorrectPassword \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Login is Successfull.",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctions.launch_URL_for_Login()"
});
formatter.result({
  "duration": 6851692066,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_on_Login_Join_button()"
});
formatter.result({
  "duration": 3577508632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vandanasharma@qainfotech.com",
      "offset": 20
    }
  ],
  "location": "LoginTest.enter_CorrectEmail_vandanasharma_qainfotech_com(String)"
});
formatter.result({
  "duration": 272442545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 23
    }
  ],
  "location": "LoginTest.enter_CorrectPassword_password(String)"
});
formatter.result({
  "duration": 162167928,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_on_Login_Button()"
});
formatter.result({
  "duration": 4277073210,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_is_Successfull()"
});
formatter.result({
  "duration": 116359504,
  "status": "passed"
});
formatter.after({
  "duration": 1384570496,
  "status": "passed"
});
formatter.before({
  "duration": 3991637782,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Check the message displayed when incorrect email is used.",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;check-the-message-displayed-when-incorrect-email-is-used.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Launch URL for Login",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Click on Login/Join button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Enter Incorrect Email ID",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Application displays error message.",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctions.launch_URL_for_Login()"
});
formatter.result({
  "duration": 5234094562,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_on_Login_Join_button()"
});
formatter.result({
  "duration": 3335828739,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.enter_Incorrect_Email_ID()"
});
formatter.result({
  "duration": 392434493,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.application_displays_error_message()"
});
formatter.result({
  "duration": 641772159,
  "status": "passed"
});
formatter.after({
  "duration": 1326636299,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Confirm the presence of Alert, when incorrect password is used.",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;confirm-the-presence-of-alert,-when-incorrect-password-is-used.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "Launch URL for Login",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Click on Login/Join button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Enter CorrectEmail \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter Incorrect Password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Alert message should be present about incorrect password",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;confirm-the-presence-of-alert,-when-incorrect-password-is-used.;",
  "rows": [
    {
      "cells": [
        "email"
      ],
      "line": 31,
      "id": "check-the-authenticity-of-the-fadavis.com-website.;confirm-the-presence-of-alert,-when-incorrect-password-is-used.;;1"
    },
    {
      "cells": [
        "vandanasharma@qainfotech.com"
      ],
      "line": 32,
      "id": "check-the-authenticity-of-the-fadavis.com-website.;confirm-the-presence-of-alert,-when-incorrect-password-is-used.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3762769883,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Confirm the presence of Alert, when incorrect password is used.",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;confirm-the-presence-of-alert,-when-incorrect-password-is-used.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "Launch URL for Login",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Click on Login/Join button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Enter CorrectEmail \"vandanasharma@qainfotech.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter Incorrect Password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Alert message should be present about incorrect password",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctions.launch_URL_for_Login()"
});
formatter.result({
  "duration": 4859613395,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_on_Login_Join_button()"
});
formatter.result({
  "duration": 3745272113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vandanasharma@qainfotech.com",
      "offset": 20
    }
  ],
  "location": "LoginTest.enter_CorrectEmail_vandanasharma_qainfotech_com(String)"
});
formatter.result({
  "duration": 270221657,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.enter_Incorrect_Password()"
});
formatter.result({
  "duration": 160259928,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_on_Login_Button()"
});
formatter.result({
  "duration": 1777336099,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.alert_should_be_present_about_incorrect_password()"
});
formatter.result({
  "duration": 28508432,
  "status": "passed"
});
formatter.after({
  "duration": 1293696758,
  "status": "passed"
});
formatter.uri("TitleVerification.feature");
formatter.feature({
  "line": 1,
  "name": "Test Fadavis.com",
  "description": "",
  "id": "test-fadavis.com",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3704918798,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verification of FADAVIS.COM Title",
  "description": "",
  "id": "test-fadavis.com;verification-of-fadavis.com-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch URL for Login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify Title",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctions.launch_URL_for_Login()"
});
formatter.result({
  "duration": 4870821391,
  "status": "passed"
});
formatter.match({
  "location": "TitleVerification.Verify_Title()"
});
formatter.result({
  "duration": 8284885,
  "status": "passed"
});
formatter.after({
  "duration": 1232766118,
  "status": "passed"
});
});