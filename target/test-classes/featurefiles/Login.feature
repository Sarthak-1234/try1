Feature: Check the Authenticity of the FADAVIS.COM website.

Background:
Given Launch URL

Scenario Outline: Check the authenticity using correct login credentials.

When Click on Login/Join button
And Enter CorrectEmail "<email>"
And Enter CorrectPassword "<password>"
And Click on Login Button
Then Login is Successfull.
Examples:
|email|password|
|vandanasharma@qainfotech.com|password|



Scenario: Check the message displayed when incorrect email is used.

When Click on Login/Join button
And Enter Incorrect Email ID
Then Application displays error message.


Scenario Outline: Confirm the presence of Alert, when incorrect password is used.

When Click on Login/Join button
And Enter CorrectEmail "<email>"
And Enter Incorrect Password
And Click on Login Button
Then Alert message should be present about incorrect password
Examples:
|email|
|vandanasharma@qainfotech.com|

