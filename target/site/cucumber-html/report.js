$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/featurefiles/Teacher_CreateAssignment.feature");
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
  "name": "Click on Add Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter Class Title",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter Class Description",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click for Auto Enroll checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Create Class button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on Continue To Success Center",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on Manage Classes",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on Create Assignment",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter Assignment Name",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Create Quick Assignment button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select Course Topic",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on Save \u0026 Exit button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify it should display Assignment under Assignment Grades",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "creation-of-class-through-teacher;verification-of-assignment-creation;",
  "rows": [
    {
      "cells": [
        "emailid",
        "password"
      ],
      "line": 26,
      "id": "creation-of-class-through-teacher;verification-of-assignment-creation;;1"
    },
    {
      "cells": [
        "vandanasharma@qainfotech.com",
        "password"
      ],
      "line": 27,
      "id": "creation-of-class-through-teacher;verification-of-assignment-creation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5526126854,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
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
  "name": "Click on Add Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter Class Title",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter Class Description",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click for Auto Enroll checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Create Class button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on Continue To Success Center",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on Manage Classes",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on Create Assignment",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter Assignment Name",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Create Quick Assignment button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select Course Topic",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on Save \u0026 Exit button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify it should display Assignment under Assignment Grades",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctions.launch_URL_for_Login()"
});
formatter.result({
  "duration": 5063481249,
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
  "duration": 8685744419,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.click_on_BrowserSite_dropdown()"
});
formatter.result({
  "duration": 177138431,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateClassTest.click_on_Davis_Edge()"
});
formatter.result({
  "duration": 211683273,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateClassTest.it_should_open_Davis_Edge_in_new_window()"
});
formatter.result({
  "duration": 7023272858,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateClassTest.click_on_Rudd_Title()"
});
formatter.result({
  "duration": 1392555032,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateClassTest.click_on_Add_Button()"
});
formatter.result({
  "duration": 7574912123,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateClassTest.enter_Class_Title()"
});
formatter.result({
  "duration": 283237401,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateClassTest.enter_Class_Description()"
});
formatter.result({
  "duration": 372966169,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateClassTest.click_for_Auto_Enroll_checkbox()"
});
formatter.result({
  "duration": 177531763,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateClassTest.click_on_Create_Class_button()"
});
formatter.result({
  "duration": 244359674,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateAssignmentTest.click_on_Continue_To_Success_Center()"
});
formatter.result({
  "duration": 1277007631,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateAssignmentTest.click_on_Manage_Classes()"
});
formatter.result({
  "duration": 1071449683,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateAssignmentTest.click_on_Create_Assignment()"
});
formatter.result({
  "duration": 9858176633,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateAssignmentTest.enter_Assignment_Name()"
});
formatter.result({
  "duration": 3409991453,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateAssignmentTest.click_on_Create_Quick_Assignment_button()"
});
formatter.result({
  "duration": 141126923,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateAssignmentTest.select_Course_Topic()"
});
formatter.result({
  "duration": 1693521742,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateAssignmentTest.click_on_Continue_button()"
});
formatter.result({
  "duration": 211260608,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateAssignmentTest.click_on_Save_Exit_button()"
});
formatter.result({
  "duration": 1300012044,
  "status": "passed"
});
formatter.match({
  "location": "Teacher_CreateAssignmentTest.verify_it_should_display_Assignment_under_Assignment_Grades()"
});
formatter.result({
  "duration": 2877843274,
  "status": "passed"
});
formatter.after({
  "duration": 1502115331,
  "status": "passed"
});
});