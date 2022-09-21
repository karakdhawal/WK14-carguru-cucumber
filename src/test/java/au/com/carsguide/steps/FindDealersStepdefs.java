package au.com.carsguide.steps;

import au.com.carsguide.pages.HomePage;
import au.com.carsguide.pages.ResultPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class FindDealersStepdefs {
    @And("^I click on Fina a dealer$")
    public void iClickOnFinaADealer() {
        new HomePage().clickFindADealer();
    }

    @Then("^I navigate to car dealers page$")
    public void iNavigateToCarDealersPage() {

    }

    @And("^I should see the dealer name \"([^\"]*)\" are display on page$")
    public void iShouldSeeTheDealerNameAreDisplayOnPage(boolean dealersName) throws InterruptedException {

         new ResultPage().dealerNameDisplay(dealersName);
//        new ResultPage().sendkeysToSearchDealer(dealersName);
//        new ResultPage().clickonFindDealerButton();
//        new ResultPage().DealerNameDisplay(dealersName);
//        String actualdealer = new ResultPage().verifyDealerNameDisplay();
//        Assert.assertEquals(actualdealer, dealersName);
    }
}
