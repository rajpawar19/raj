Feature: Test task POS magento.softwaretestingboard QA Automation


  Background: Access the Magento Application and Login Into It.
    Given User open the google chrome and go to magneto application url
    When Login Into the Application with Correct Username and Password

  Scenario: End to End Flow of the Eccommerce Application.
    When User is Access the mentioned Shop and verify that user reached to the correct Shop
      | Shop_Link_Name | Shop_Name |
      | Shop Pants     | Pants     |
    And User applied the below mentioned certain categories filter and veryify that filter are applied Successfully
      | Style            | Size    | Price        | Color      | Material           |
      | Style:Base Layer | Size:33 | Price:$60.00 | Color:Blue | Material:LumaTech™ |
    And Open the Product Page Increase the Quantity and Add the Product Into Cart Page And Verify that Same Product has been added Successfully
    Then Click On Shopping Cart and Verify the Product Name and Proceed From the Cart page
