----------------
TEST FRAMEWORK
----------------

## Cypress-cucumber-pageObject-demo
Demo using Cypress with Cucumber

The cypress-cucumber-preprocessor adds support for using feature files when testing with Cypress.
Built with the working example at 
https://github.com/TheBrainFamily/cypress-cucumber-example  
https://github.com/TheBrainFamily/cypress-cucumber-preprocessor

The following are the directory levels & Files

CypressTest/fixtures/		      						            -**Configure application and environment using json files**<br />		
CypressTest/plugins/								    	            -**Plugin configuration**<br /> 
CypressTest/support/				        			            -**Environment configuration**<br /> 
CypressTest/screenshots/							  	            -**Screenshots of pages failed during execution**<br /> 						
CypressTest/video/										                -**Video of Automated Test execution**<br /> 
CypressTest/cucumber-json/								            -**Output Json file created after test execution**<br /> 
CypressTest/integration/gigautomation/pageObjects/		-**Page Objects which interacts with Application Under Test**<br />
CypressTest/integration/gigautomation/step_defenition	-**JS based scripts for Automation**<br /> 
CypressTest/integration/gigautomation/signIn.feature	-**Gherkin document**<br />
CypressTest/package.json								              -**Browser can be selected by editing "scripts:test" uses Chrome as default

## Installation
Install the plugin by running:<br />
C:\>git clone https://github.com/arulkumartamilmani/CypressTest<br />
C:\>cd CypressTest<br />
C:\>npm install --save-dev cypress-cucumber-preprocessor<br />
C:\>npm install<br />
C:\>npm cypress-xpath<br />

## Run
The tests can be executed as<br />

C:/>cd CypressTest<br />
C:/CypressTest>npm test<br />
