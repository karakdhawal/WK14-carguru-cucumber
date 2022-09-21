$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/buy.feature");
formatter.feature({
  "line": 1,
  "name": "buy search functionality",
  "description": "",
  "id": "buy-search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search the buy car with model",
  "description": "",
  "id": "buy-search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I clicksearch cars link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "buy-search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "buy-search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "BMW",
        "1 Series",
        "NSW - Central West",
        "$100,000"
      ],
      "line": 17,
      "id": "buy-search-functionality;search-the-buy-car-with-model;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8593569900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the buy car with model",
  "description": "",
  "id": "buy-search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I clicksearch cars link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"1 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - Central West\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysearchStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 232123900,
  "status": "passed"
});
formatter.match({
  "location": "buysearchStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 415245600,
  "status": "passed"
});
formatter.match({
  "location": "buysearchStepdefs.iClicksearchCarsLink()"
});
formatter.result({
  "duration": 2176604500,
  "status": "passed"
});
formatter.match({
  "location": "buysearchStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "buysearchStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 1143293400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 16
    }
  ],
  "location": "buysearchStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 1138485900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central West",
      "offset": 19
    }
  ],
  "location": "buysearchStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 1120189300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "buysearchStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 1111794800,
  "status": "passed"
});
formatter.match({
  "location": "buysearchStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3593631900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "buysearchStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 386880400,
  "status": "passed"
});
formatter.after({
  "duration": 172500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 18,
      "value": "#    | Audi | A6 | VIC - Melbourne | $150,000 |"
    },
    {
      "line": 19,
      "value": "#    | Honda | Accord | NSW - Sydney | $80,000 |"
    },
    {
      "line": 20,
      "value": "#    | Ford | Ecosport | VIC - Melbourne | $90,000 |"
    },
    {
      "line": 21,
      "value": "#    | Audi | Q5 | WA - Perth | $150,000 |"
    },
    {
      "line": 22,
      "value": "#    | Ford | Fiesta | NSW - Sydney | $200,000 |"
    }
  ],
  "line": 24,
  "name": "Search the used car with model",
  "description": "",
  "id": "buy-search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on used link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "buy-search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 36,
      "id": "buy-search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "BMW",
        "1 Series",
        "NSW - Central West",
        "$100,000"
      ],
      "line": 37,
      "id": "buy-search-functionality;search-the-used-car-with-model;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5911685000,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search the used car with model",
  "description": "",
  "id": "buy-search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on used link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"1 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"NSW - Central West\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysearchStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 65200,
  "status": "passed"
});
formatter.match({
  "location": "buysearchStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1228083100,
  "status": "passed"
});
formatter.match({
  "location": "usedCarSearchStepdefs.iClickOnUsedLink()"
});
formatter.result({
  "duration": 265267900,
  "status": "passed"
});
formatter.match({
  "location": "usedCarSearchStepdefs.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "buysearchStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 3272166500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 16
    }
  ],
  "location": "buysearchStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 1120694800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central West",
      "offset": 19
    }
  ],
  "location": "buysearchStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 1116886000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "buysearchStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 1122025500,
  "status": "passed"
});
formatter.match({
  "location": "buysearchStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4027470100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "buysearchStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 757512600,
  "status": "passed"
});
formatter.after({
  "duration": 39700,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "find dealers functionality",
  "description": "",
  "id": "find-dealers-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-dealers-functionality;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on Fina a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to car dealers page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer name \"\u003cdealersName\u003e\" are display on page",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "find-dealers-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 10,
      "id": "find-dealers-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;1"
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 11,
      "id": "find-dealers-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7592165100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-dealers-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on Fina a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to car dealers page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer name \"3 Point Motors Epping\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "buysearchStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.match({
  "location": "buysearchStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 365422100,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersStepdefs.iClickOnFinaADealer()"
});
formatter.result({
  "duration": 264862900,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersStepdefs.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 16700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Point Motors Epping",
      "offset": 30
    }
  ],
  "location": "FindDealersStepdefs.iShouldSeeTheDealerNameAreDisplayOnPage(boolean)"
});
formatter.result({
  "duration": 2710349300,
  "status": "passed"
});
formatter.after({
  "duration": 43600,
  "status": "passed"
});
});