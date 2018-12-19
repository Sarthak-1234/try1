$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Check the Authenticity of the FADAVIS.COM website.",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Check the authenticity using correct login credentials.",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;check-the-authenticity-using-correct-login-credentials.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Click on Login/Join button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter CorrectEmail \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter CorrectPassword \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Login is Successfull.",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;check-the-authenticity-using-correct-login-credentials.;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 14,
      "id": "check-the-authenticity-of-the-fadavis.com-website.;check-the-authenticity-using-correct-login-credentials.;;1"
    },
    {
      "cells": [
        "vandanasharma@qainfotech.com",
        "password"
      ],
      "line": 15,
      "id": "check-the-authenticity-of-the-fadavis.com-website.;check-the-authenticity-using-correct-login-credentials.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5933463140,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch URL",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonFunctions.Launch_URL()"
});
formatter.result({
  "duration": 10904132043,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Check the authenticity using correct login credentials.",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;check-the-authenticity-using-correct-login-credentials.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Click on Login/Join button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter CorrectEmail \"vandanasharma@qainfotech.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter CorrectPassword \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Login is Successfull.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.click_on_Login_Join_button()"
});
formatter.result({
  "duration": 6759858773,
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
  "duration": 461186462,
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
  "duration": 200322133,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_on_Login_Button()"
});
formatter.result({
  "duration": 9841790737,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_is_Successfull()"
});
formatter.result({
  "duration": 230304786,
  "status": "passed"
});
formatter.after({
  "duration": 2044138202,
  "status": "passed"
});
formatter.before({
  "duration": 3820264968,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch URL",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonFunctions.Launch_URL()"
});
formatter.result({
  "duration": 13312229195,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Check the message displayed when incorrect email is used.",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;check-the-message-displayed-when-incorrect-email-is-used.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "Click on Login/Join button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter Incorrect Email ID",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Application displays error message.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.click_on_Login_Join_button()"
});
formatter.result({
  "duration": 6214952348,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.enter_Incorrect_Email_ID()"
});
formatter.result({
  "duration": 616120615,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.application_displays_error_message()"
});
formatter.result({
  "duration": 794580091,
  "status": "passed"
});
formatter.after({
  "duration": 1188915916,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Confirm the presence of Alert, when incorrect password is used.",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;confirm-the-presence-of-alert,-when-incorrect-password-is-used.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "Click on Login/Join button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Enter CorrectEmail \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter Incorrect Password",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Alert message should be present about incorrect password",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;confirm-the-presence-of-alert,-when-incorrect-password-is-used.;",
  "rows": [
    {
      "cells": [
        "email"
      ],
      "line": 34,
      "id": "check-the-authenticity-of-the-fadavis.com-website.;confirm-the-presence-of-alert,-when-incorrect-password-is-used.;;1"
    },
    {
      "cells": [
        "vandanasharma@qainfotech.com"
      ],
      "line": 35,
      "id": "check-the-authenticity-of-the-fadavis.com-website.;confirm-the-presence-of-alert,-when-incorrect-password-is-used.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3998444001,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch URL",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonFunctions.Launch_URL()"
});
formatter.result({
  "duration": 16960865351,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Confirm the presence of Alert, when incorrect password is used.",
  "description": "",
  "id": "check-the-authenticity-of-the-fadavis.com-website.;confirm-the-presence-of-alert,-when-incorrect-password-is-used.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "Click on Login/Join button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Enter CorrectEmail \"vandanasharma@qainfotech.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter Incorrect Password",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Alert message should be present about incorrect password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.click_on_Login_Join_button()"
});
formatter.result({
  "duration": 6200900800,
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
  "duration": 319542969,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.enter_Incorrect_Password()"
});
formatter.result({
  "duration": 222773679,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_on_Login_Button()"
});
formatter.result({
  "duration": 4274042545,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.alert_should_be_present_about_incorrect_password()"
});
formatter.result({
  "duration": 23780878,
  "status": "passed"
});
formatter.after({
  "duration": 1326186077,
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
  "duration": 5934699584,
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
  "name": "Launch URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify Title",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctions.Launch_URL()"
});
formatter.result({
  "duration": 16919408036,
  "status": "passed"
});
formatter.match({
  "location": "TitleVerification.Verify_Title()"
});
formatter.result({
  "duration": 33166652,
  "status": "passed"
});
formatter.after({
  "duration": 1427723366,
  "status": "passed"
});
});