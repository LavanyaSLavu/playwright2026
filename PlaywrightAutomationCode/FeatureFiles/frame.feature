Feature: Verify frames in playwright
@frames
Scenario: validate frames in playwright
Given I launch browser 
When I handle single frame
Then I handle Nested frame

#@practiceframes
#Scenario: validate practiceframes in playwright
Given I launch browser 
When I handle single iframe
Then I handle Nested iframe