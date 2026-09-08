Feature: Verify login functionality
@pom
Scenario: Verify login
 Given User launches chrome browser
 When User navigates to the lambatest playground page
 Then User enter the email
 Then User enter the password
 Then User click the login