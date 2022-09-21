package au.com.carsguide.steps;

import au.com.carsguide.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class usedCarSearchStepdefs {
    @And("^I click on used link$")
    public void iClickOnUsedLink() {
        new HomePage().clickUsedTab();
    }

    @Then("^I navigate to used cars for sale page$")
    public void iNavigateToUsedCarsForSalePage() {
    }
}
