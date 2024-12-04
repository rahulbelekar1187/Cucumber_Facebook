Feature: Logine to Facebook application

Scenario Outline: Logine to Facebook application by Data driven framework

Given user opens chrome browser
When enters url as "https://www.facebook.com/login.php"
And provides valid username & password from given sheetname "<SheetName>" & rownumber <RowNumber> 
And click on login button
Then login page name should be "(11) Facebook"
When user clicks on Human icon
And user clicks on Logout button 
Then last page name should be "Facebook – log in or sign up"
And user closes the browser 

Examples: 
|SheetName|RowNumber|
|Sheet1|0|
|Sheet1|1|