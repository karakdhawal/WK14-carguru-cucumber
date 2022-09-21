package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NewAndUsedCarSearchPage extends Utility {

    private static final Logger log = LogManager.getLogger(NewAndUsedCarSearchPage.class.getName());

    public NewAndUsedCarSearchPage (){
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy (xpath = "//select[@id='makes']")
    WebElement makeDropDown;

    @CacheLookup
    @FindBy (xpath = "//select[@id='models']")
    WebElement modelDropDown;

    @CacheLookup
    @FindBy (xpath = "//select[@id='locations']")
    WebElement locationDropDown;

    @CacheLookup
    @FindBy (xpath = "//select[@id='priceTo']")
    WebElement priceDropDown;

    @CacheLookup
    @FindBy (xpath = "//input[@id='search-submit']")
    WebElement findMyNextCarButton;

    @CacheLookup
    @FindBy (xpath = "//h1[@class = 'listing-search-title']")
    WebElement verifyMakeText;

    public String seeTheMakeInResults (){
        return getTextFromElement(verifyMakeText);
    }


    public void clickOnFindMyNextCarTab (){
        clickOnElement(findMyNextCarButton);
    }

    public void selectprice (String price) throws InterruptedException {
        Thread.sleep(1000);
        selectByVisibleTextFromDropDown(priceDropDown, price);
    }

    public void selectLocation (String location) throws InterruptedException {
        Thread.sleep(1000);
        selectByVisibleTextFromDropDown(locationDropDown, location);
    }

    public void selectModel (String model) throws InterruptedException {
        Thread.sleep(1000);
        selectByVisibleTextFromDropDown(modelDropDown, model);
    }

    public void selectMake (String make) throws InterruptedException {

        Thread.sleep(1000);
        selectByVisibleTextFromDropDown(makeDropDown, make);
    }
}
