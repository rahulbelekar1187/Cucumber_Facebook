$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Logine_Facebook.feature");
formatter.feature({
  "name": "Logine to Facebook application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Logine to Facebook application by Data driven framework",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "enters url as \"https://www.facebook.com/login.php\"",
  "keyword": "When "
});
formatter.step({
  "name": "provides valid username \u0026 password from given sheetname \"\u003cSheetName\u003e\" \u0026 rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "login page name should be \"(11) Facebook\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Human icon",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on Logout button",
  "keyword": "And "
});
formatter.step({
  "name": "last page name should be \"Facebook – log in or sign up\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ]
    },
    {
      "cells": [
        "Sheet1",
        "0"
      ]
    },
    {
      "cells": [
        "Sheet1",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Logine to Facebook application by Data driven framework",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps_Facebook.user_opens_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters url as \"https://www.facebook.com/login.php\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps_Facebook.enters_url_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides valid username \u0026 password from given sheetname \"Sheet1\" \u0026 rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Facebook.provides_valid_username_password_from_given_sheetname_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Facebook.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login page name should be \"(11) Facebook\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps_Facebook.login_page_name_should_be(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat StepsDefinitions_Facebook.Steps_Facebook.login_page_name_should_be(Steps_Facebook.java:71)\r\n\tat ✽.login page name should be \"(11) Facebook\"(file:Features/Logine_Facebook.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Human icon",
  "keyword": "When "
});
formatter.match({
  "location": "Steps_Facebook.user_clicks_on_Human_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Logout button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Facebook.user_clicks_on_Logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "last page name should be \"Facebook – log in or sign up\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps_Facebook.last_page_name_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Facebook.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Logine to Facebook application by Data driven framework",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps_Facebook.user_opens_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters url as \"https://www.facebook.com/login.php\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps_Facebook.enters_url_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides valid username \u0026 password from given sheetname \"Sheet1\" \u0026 rownumber 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Facebook.provides_valid_username_password_from_given_sheetname_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Facebook.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login page name should be \"(11) Facebook\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps_Facebook.login_page_name_should_be(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat StepsDefinitions_Facebook.Steps_Facebook.login_page_name_should_be(Steps_Facebook.java:71)\r\n\tat ✽.login page name should be \"(11) Facebook\"(file:Features/Logine_Facebook.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Human icon",
  "keyword": "When "
});
formatter.match({
  "location": "Steps_Facebook.user_clicks_on_Human_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Logout button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Facebook.user_clicks_on_Logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "last page name should be \"Facebook – log in or sign up\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps_Facebook.last_page_name_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Facebook.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});