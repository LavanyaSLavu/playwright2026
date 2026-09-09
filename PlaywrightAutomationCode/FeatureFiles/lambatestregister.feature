Feature: Verify registeration function in ecommerce website 
    @lambatestRegister
    Scenario: Validate registeration in lambdatest playground

        Given User launches the chrome browser
        When User navigates to lambatest playground page
        Then  User click the Continue button
        And User enters the first name
        And User enters the last name
        And User enters the email
        And User enters the telephone
        And User enters the password
        And User enters the password confirm
        And User clicks the subscribe no radio button
        And User clicks the checkbox of privacy policy
        And User clicks the Continue button

        