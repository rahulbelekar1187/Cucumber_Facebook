package StepsDefinitions_Facebook;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import POM_Facebook.Login_Facebook;
import Utility_Facebook.ExcelReader;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps_Facebook { 
	
	public WebDriver driver;
	public Login_Facebook lf;
	public ExcelReader er;
	
	@When("user opens chrome browser")
	public void user_opens_chrome_browser() throws InterruptedException {
	    System.setProperty("webdriver.chrome.driver", "D:\\drivers\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe");
	    driver = new ChromeDriver();
	    lf = new Login_Facebook(driver);
	    er = new ExcelReader();
	}

	@When("enters url as {string}")
	public void enters_url_as(String string) throws InterruptedException {
		driver.get("https://www.facebook.com/");
	    Thread.sleep(2000);
	    driver.manage().window().maximize();
	    Thread.sleep(2000);
	}

	@When("provides valid username & password from given sheetname {string} & rownumber {int}")
	public void provides_valid_username_password_from_given_sheetname_rownumber(String sheetname, Integer rownumber) throws InvalidFormatException, IOException, InterruptedException {
	
		List<Map<String, String>> getdata = er.getData("D:\\Testing Class Notes\\Facebook.xlsx", sheetname);
		
		String UN = getdata.get(rownumber).get("email");
		String PW = getdata.get(rownumber).get("password"); 
		
		lf.Username(UN);
		Thread.sleep(2000);
		lf.Password(PW);
		Thread.sleep(2000);
	
	}

	@When("click on login button")
	public void click_on_login_button() throws InterruptedException {
	   lf.Login(); 
	   Thread.sleep(5000);
	}

	@Then("login page name should be {string}")
	public void login_page_name_should_be(String exp_title) throws InterruptedException {
	 
		String act_title = driver.getTitle();
		System.out.println(act_title);
		Thread.sleep(2000);
		if(act_title.equals(exp_title)) {
			
			Assert.assertTrue(true);
		} 
		else {
			Assert.assertTrue(false); 
			driver.close();
		}
		
	}

	@When("user clicks on Human icon")
	public void user_clicks_on_Human_icon() throws InterruptedException {
	   lf.HumanIcon();
	   Thread.sleep(2000);
	}

	@When("user clicks on Logout button")
	public void user_clicks_on_Logout_button() throws InterruptedException {
	   lf.Logout();
	   Thread.sleep(2000);
	}

	@Then("last page name should be {string}")
	public void last_page_name_should_be(String exp_title2) {
	    
		String act_title2 = driver.getTitle();
		System.out.println(act_title2);
		if(act_title2.equals(exp_title2)) {
			Assert.assertTrue(true);
		} 
		else {
			Assert.assertTrue(false); 
			driver.close();
		}
	}

	@Then("user closes the browser")
	public void user_closes_the_browser() {
	    driver.close();
	}


}
