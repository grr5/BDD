$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addNewEmployee.feature");
formatter.feature({
  "line": 1,
  "name": "Orange HRM employee management",
  "description": "\r\nAs an admin\r\nI want to login to orangeHRM\r\nSo that I can add employees and manage records",
  "id": "orange-hrm-employee-management",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "create an employee",
  "description": "",
  "id": "orange-hrm-employee-management;create-an-employee",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "admin is logged in and is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "admin click on pim link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "admin clicked on add employee button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "admin enters employee details as \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "admin can add more details",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "orange-hrm-employee-management;create-an-employee;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname"
      ],
      "line": 25,
      "id": "orange-hrm-employee-management;create-an-employee;;1"
    },
    {
      "cells": [
        "raj",
        "rej"
      ],
      "line": 26,
      "id": "orange-hrm-employee-management;create-an-employee;;2"
    },
    {
      "cells": [
        "Ram",
        "Sur"
      ],
      "line": 27,
      "id": "orange-hrm-employee-management;create-an-employee;;3"
    },
    {
      "cells": [
        "David",
        "Dave"
      ],
      "line": 28,
      "id": "orange-hrm-employee-management;create-an-employee;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "create an employee",
  "description": "",
  "id": "orange-hrm-employee-management;create-an-employee;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "admin is logged in and is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "admin click on pim link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "admin clicked on add employee button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "admin enters employee details as \"raj\" and \"rej\" and click on save button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "admin can add more details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_is_logged_in_and_is_on_homepage()"
});
formatter.result({
  "duration": 83043744704,
  "error_message": "org.openqa.selenium.WebDriverException: Process unexpectedly closed with status: 0\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-HODJN7I\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: stack backtrace:\n   0:           0x47e934 - \u003cno info\u003e\n   1:           0x47f0a3 - \u003cno info\u003e\n   2:           0x442649 - \u003cno info\u003e\n   3:           0x449cc3 - \u003cno info\u003e\n   4:           0x42a890 - \u003cno info\u003e\n   5:           0x406f5e - \u003cno info\u003e\n   6:           0x40cfc9 - \u003cno info\u003e\n   7:           0x6bef19 - \u003cno info\u003e\n   8:           0x420756 - \u003cno info\u003e\n   9:           0x6b96e0 - \u003cno info\u003e\n  10:     0x7fff81691fe4 - BaseThreadInitThunk\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:99)\r\n\tat orangeHRMBDD.base.BaseTest.browserSetup(BaseTest.java:40)\r\n\tat orangeHRMBDD.stepdefs.StepDefsNewEmployee.admin_is_logged_in_and_is_on_homepage(StepDefsNewEmployee.java:43)\r\n\tat ✽.Given admin is logged in and is on homepage(addNewEmployee.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_click_on_pim_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_clicked_on_add_employee_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "raj",
      "offset": 34
    },
    {
      "val": "rej",
      "offset": 44
    }
  ],
  "location": "StepDefsNewEmployee.admin_enters_new_employee_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_can_add_more_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "create an employee",
  "description": "",
  "id": "orange-hrm-employee-management;create-an-employee;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "admin is logged in and is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "admin click on pim link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "admin clicked on add employee button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "admin enters employee details as \"Ram\" and \"Sur\" and click on save button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "admin can add more details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_is_logged_in_and_is_on_homepage()"
});
formatter.result({
  "duration": 40374945707,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_click_on_pim_link()"
});
formatter.result({
  "duration": 1963563645,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_clicked_on_add_employee_button()"
});
formatter.result({
  "duration": 1009671220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 34
    },
    {
      "val": "Sur",
      "offset": 44
    }
  ],
  "location": "StepDefsNewEmployee.admin_enters_new_employee_with(String,String)"
});
formatter.result({
  "duration": 2849603073,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_can_add_more_details()"
});
formatter.result({
  "duration": 3962752980,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "create an employee",
  "description": "",
  "id": "orange-hrm-employee-management;create-an-employee;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "admin is logged in and is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "admin click on pim link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "admin clicked on add employee button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "admin enters employee details as \"David\" and \"Dave\" and click on save button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "admin can add more details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_is_logged_in_and_is_on_homepage()"
});
formatter.result({
  "duration": 29227014052,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_click_on_pim_link()"
});
formatter.result({
  "duration": 1712822740,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_clicked_on_add_employee_button()"
});
formatter.result({
  "duration": 917334469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 34
    },
    {
      "val": "Dave",
      "offset": 46
    }
  ],
  "location": "StepDefsNewEmployee.admin_enters_new_employee_with(String,String)"
});
formatter.result({
  "duration": 1948707588,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_can_add_more_details()"
});
formatter.result({
  "duration": 2803189152,
  "status": "passed"
});
});