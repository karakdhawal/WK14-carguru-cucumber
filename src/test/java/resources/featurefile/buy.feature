Feature:  buy search functionality

  Scenario Outline: Search the buy car with model
    Given I am on homepage
    When I mouse hover on buy+sell tab
    And I clicksearch cars link
    Then I navigate to new and used car search page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on find my next car tab
    Then I should see the make "<make>" in results

    Examples:
      | make | model | location | price |
      | BMW | 1 Series | NSW - Central West | $100,000 |
      | Audi | A6 | VIC - Melbourne | $150,000 |
      | Honda | Accord | NSW - Sydney | $80,000 |
      | Ford | Ecosport | VIC - Melbourne | $90,000 |
      | Audi | Q5 | WA - Perth | $150,000 |
      | Ford | Fiesta | NSW - Sydney | $200,000 |

  Scenario Outline: Search the used car with model
    Given I am on homepage
    When I mouse hover on buy+sell tab
    And I click on used link
    Then I navigate to used cars for sale page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on find my next car tab
    Then I should see the make "<make>" in results
    Examples:
      | make | model | location | price |
      | BMW | 1 Series | NSW - Central West | $100,000 |
      | Audi | A6 | VIC - Melbourne | $90,000 |
      | Honda | Accord | NSW - Sydney | $80,000 |
      | Ford | Ecosport | VIC - Melbourne | $90,000 |
      | Audi | Q5 | WA - Perth | $150,000 |
      | Ford | Fiesta | NSW - Sydney | $200,000 |


