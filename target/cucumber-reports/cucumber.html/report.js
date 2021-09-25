$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "name": "Login to an e-commerce website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify users can login to portal with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits e-commerce website",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters valid email \"\u003cemail\u003e\" and valid password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "jam123@gmail.com",
        "easy1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify users can login to portal with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits e-commerce website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_visits_e_commerce_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid email \"jam123@gmail.com\" and valid password \"easy1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_enters_valid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_can_logged_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify users cannot login to portal without valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits e-commerce website",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters invalid email \"\u003cemail\u003e\" and invalid password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can not logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "wrong12@test.com",
        "password123"
      ]
    },
    {
      "cells": [
        "tor1265@test.com",
        "password123"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify users cannot login to portal without valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits e-commerce website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_visits_e_commerce_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid email \"wrong12@test.com\" and invalid password \"password123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_enters_invalid_email_and_invalid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_can_not_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify users cannot login to portal without valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits e-commerce website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_visits_e_commerce_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid email \"tor1265@test.com\" and invalid password \"password123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_enters_invalid_email_and_invalid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_can_not_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify users cannot login to portal without valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits e-commerce website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_visits_e_commerce_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid email \"\" and invalid password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_enters_invalid_email_and_invalid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_can_not_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});