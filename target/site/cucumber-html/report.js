$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/featurefiles/Teacher_DeleteClass.feature");
formatter.feature({
  "line": 1,
  "name": "Creation of CLASS through Teacher",
  "description": "",
  "id": "creation-of-class-through-teacher",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Verification of assignment creation",
  "description": "",
  "id": "creation-of-class-through-teacher;verification-of-assignment-creation",
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
  "name": "It should open Davis Edge in new window",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Rudd Title",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on settings icon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on Delete button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "confirm deletion pop-up opens up",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on ok button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a confirmation pop-up appears",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "creation-of-class-through-teacher;verification-of-assignment-creation;",
  "rows": [
    {
      "cells": [
        "emailid",
        "password"
      ],
      "line": 17,
      "id": "creation-of-class-through-teacher;verification-of-assignment-creation;;1"
    },
    {
      "cells": [
        "vandanasharma@qainfotech.com",
        "password"
      ],
      "line": 18,
      "id": "creation-of-class-through-teacher;verification-of-assignment-creation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23040258169,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verification of assignment creation",
  "description": "",
  "id": "creation-of-class-through-teacher;verification-of-assignment-creation;;2",
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
  "name": "It should open Davis Edge in new window",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Rudd Title",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on settings icon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on Delete button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "confirm deletion pop-up opens up",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on ok button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a confirmation pop-up appears",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctions.launch_URL_for_Login()"
});
formatter.result({
  "duration": 4942695632,
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
  "duration": 10942450299,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.click_on_BrowserSite_dropdown()"
});
formatter.result({
  "duration": 638930703,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateClassTest.click_on_Davis_Edge()"
});
formatter.result({
  "duration": 550412599,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateClassTest.it_should_open_Davis_Edge_in_new_window()"
});
formatter.result({
  "duration": 18325165345,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateClassTest.click_on_Rudd_Title()"
});
formatter.result({
  "duration": 3657103568,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_DeleteClassTest.click_on_settings_icon()"
});
formatter.result({
  "duration": 6862318406,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_DeleteClassTest.click_on_Delete_button()"
});
formatter.result({
  "duration": 559782365,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_DeleteClassTest.confirm_deletion_pop_up_opens_up()"
});
formatter.result({
  "duration": 1123287835,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_DeleteClassTest.click_on_ok_button()"
});
formatter.result({
  "duration": 716779488,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_DeleteClassTest.a_confirmation_pop_up_appears()"
});
formatter.result({
  "duration": 538045060,
  "status": "passed"
});
formatter.after({
  "duration": 2342124433,
  "status": "passed"
});
});