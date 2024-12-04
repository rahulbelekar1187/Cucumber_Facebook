package TestRunner_Facebook;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions 
         (
        		features=".//Features/Logine_Facebook.feature",
         		glue="StepsDefinitions_Facebook",
         		dryRun=false, 
         		monochrome=true,
         		plugin= {"pretty","html:test-output"}	 
        		 
         )

public class TestRun {

}
