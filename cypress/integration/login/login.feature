Feature: The TodoMVC

  I want to open TodoMVC
  
  @focus
  Scenario: Opening TodoMVC
    Given I open TodoMVC
    Then I see "TodoMVC" in the title
