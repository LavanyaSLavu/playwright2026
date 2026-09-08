
Feature: Verify dropdown function in playwright
   # @drpdwn
    #Scenario: Validate dropdown function in playwright
        Given I launch chrome browser
        When I navigate to automation test practice website
        Then I handle country dropdown
        Then I handle multi select dropdown

    #@dynamicDrpDwn
    #Scenario: Verify dynamic dropdown in playwright
        Given I launch chrome browser
        When I enter any word in google search box
        When I enter atleast 2char in country search box
  
  @practiceDropdown
  Scenario: Verify dropdown in testing practice website
        Given I launch chrome browser
        When I navigate to expand testing 
        Then I handle simple dropdown
        Then I handle country selection dropdown
        