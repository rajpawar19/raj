# POC_FRAMEWORK


1. <b>Pre-Requisities:</b><br>
    a. Install Node.js (Needs to download : <a href="https://nodejs.org/en">Click Here</a>)<br>
    b. Create a Project Folder and Open it in the VS Code or any other your suitable IDE. (To download the VS code <a href="https://code.visualstudio.com/Download">Click Here</a>)


2. <b>Configure the Folder and Framework Stuffs:</b><br>
    a. Open the Folder in the VS code and then Open terminal inside the VS Code.<br>
    b. Execute Command npm init.<br>
    c. If any error found check whether Node and NPM is installed properly.<br>
    d. To Install cypress execute command npm install @cypress(version) or npm install cypress.<br>
    e. To install xpath execute command npm install cypress-xpath.<br>
    f. To install cucumber if we are writing the test scenarios or cases in the bdd then we use cucumber npm install cypress-cucumber-preprocessor

    Note : some more configuration required like in the support/e2e file add <b>require</b> of cypress. To setup the frameowrk to work with the cucumber make async <b>setupNodeEvents</b>. To make enable the cucumber we need to add dependencies in the package.json <b>cypress-cucumber-preprocessor</b>.

3. <b>Framework Brief:</b><br>
    a. e2e is the base folder inside that all other folders like Base , features , PageObjects , Selectors , StepDefinitions are present.<br>
    b. BasePage means all the basic or we can common functionalities are written at there in the form of methods.<br>
    c. <b>.feature</b> extension files are representation of scenario and cases.<br>
    d. In Page objects files are represent the Module related stuffs like all the functions or methods which are related to that modules are written at there. <br>
    e. Step definitions are glues with the feature with there respective methods.<br>

<center>For more details please feel free to reach out. Thank you</center>


