Feature: Verifu alerts via playwright

    #@alerts
    #Scenario: Validate different alerts in playwright
        Given I launch chrome browser
        When I navigate to demoQa website
        Then I handle simple alert
        Then I handle confirm alert
        Then I handle prompt alert

Feature: Verify popup alerts
    @popUpAlerts
    Scenario: Validate popup alerts
        Given I launch google chrome browser
        When I goto demo automation testing website
        Then I click Button to see simple alert 
        Then I handle simple alert
        When I click Button to see confirm alert 
        Then I handle confirm alert
        When I click Button to see prompt alert 
        Then I handle prompt alert