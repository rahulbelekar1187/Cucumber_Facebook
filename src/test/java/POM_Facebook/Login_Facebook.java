package POM_Facebook;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login_Facebook { 
	
	public WebDriver ldriver;
	
	public Login_Facebook(WebDriver rdriver) {
		
		ldriver=rdriver;
		PageFactory.initElements(ldriver, this);
	}
	
	@FindBy(xpath="//input[@class='inputtext _55r1 _6luy']")
	@CacheLookup
	WebElement txtUsername;
	
	@FindBy(xpath="//input[@class='inputtext _55r1 _6luy _9npi']")
	@CacheLookup
	WebElement txtPassword;
	
	@FindBy(xpath="//button[@class='_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy']")
	@CacheLookup
	WebElement btnLogin;
	
	@FindBy(xpath="(//span[@class='x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j'])[10]")
	@CacheLookup
	WebElement icnHuman; 
	
	@FindBy(xpath="//div[@data-nocookies='true']//div[@class='x6s0dn4 xkh2ocl x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1q0g3np x1iyjqo2 xs83m0k x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x18d9i69 x4uap5 xkhd6sd xexx8yu x1n2onr6 x1ja2u2z']")
	@CacheLookup
	WebElement btnLogout; 
	
	public void Username(String username) {
		txtUsername.sendKeys(username);
	}
	
	public void Password(String password) {
		txtPassword.sendKeys(password);
	}
	
	public void Login() {
		btnLogin.click();
	}
	
	public void HumanIcon() {
		icnHuman.click();
	} 
	
	public void Logout() {
		btnLogout.click();
	}
	
}
