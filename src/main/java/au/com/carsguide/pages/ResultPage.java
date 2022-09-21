package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ResultPage extends Utility {

    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());

    public ResultPage (){
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy (xpath = "//h1[@class='listing-search-title']")
    WebElement makeVerify;

    @CacheLookup
    @FindBy (xpath = "//input[@id='keyword']")
    WebElement keywordsField;

    @CacheLookup
    @FindBy (xpath = "//a[@id='dealer-search-submit']")
    WebElement findDealerButton;

    @CacheLookup
    @FindBy (xpath = "//div[@class='dealer-listings row']")
    List<WebElement> dealerList;

    @CacheLookup
    @FindBy (xpath = "//div[@class='dealerDetails']/div[1]/h1[1]")
    WebElement verifyDealer;

    public void dealerNameDisplay (boolean dealersNames) throws InterruptedException {
        for (WebElement dealer : dealerList){
            if (dealersNames= dealer.isDisplayed()){
                Thread.sleep(1000);
                break;
            } else System.out.println("Dealer Name is not displayed");
        }

    }

    public void clickonFindDealerButton (){
        clickOnElement(findDealerButton);
    }

    public String verifyDealerNameDisplay () throws InterruptedException {
        Thread.sleep(1000);
        return getTextFromElement(verifyDealer);
    }


    public String seeTheMake (){
    return getTextFromElement(makeVerify);
    }
    public void sendkeysToSearchDealer (String dealersName){
        sendTextToElement(keywordsField, dealersName);
    }
}
