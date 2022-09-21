package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage(){
        PageFactory.initElements(driver, this);
    }


//    @CacheLookup
//    @FindBy (xpath = "//div[@class='uhf-menu-wrapper']/div[1]/ul[1]/li[1]/a[1]")
//    WebElement buysellTab;

    @CacheLookup
    @FindBy (xpath = "//a[@href='/buy-a-car/new-and-used-car-search']")
    WebElement searchCarTab;
    @CacheLookup
    @FindBy(xpath = "//div[@class='uhf-menu-wrapper']/div[1]/ul[1]/li[1]/a[1]")
    WebElement hovertab;

    @CacheLookup
    @FindBy (xpath = "//a[@href='/buy-a-car/used-car-search']")
    WebElement usedTab;

    @CacheLookup
    @FindBy (xpath = "//a[@href='//www.carsguide.com.au/car-dealers']")
    WebElement dealerTab;

    public void clickFindADealer (){
        clickOnElement(dealerTab);
    }

    public void clickUsedTab (){
        clickOnElement(usedTab);
    }

    public void mouseHoverOnBuySellTab()
    {
        mouseHoverToElement(hovertab);
    }

    public void clickSearchCarsLink (){
        clickOnElement(searchCarTab);
    }
//    public void mouseHoverOnBuySellTab () throws InterruptedException {
//       Thread.sleep(1000);
//        mouseHoverToElement(buysellTab);
//    }

}
