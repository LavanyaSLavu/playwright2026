@End2End
Feature: Verify screenshot function in playwright
    @screenshot
    Scenario: Validate screenshot function in playwright
        Given I launch chrome browser
        When I navigate to orangeHRM website
        Then I enter username
        Then I enter password
        Then I click login button