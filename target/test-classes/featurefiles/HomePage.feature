Feature: Check BrowserSite and navigation to other products

Scenario Outline: Check the product navigation through FADAVIS.COM
Given Launch URL for Login
When Login in the application with "<emailid>" and "<password>"
When click on BrowserSite dropdown
And click on Davis Edge
Then it should open the new tab with title Davis Edge
Examples:
|emailid|password|
|vandanasharma@qainfotech.com|password|

