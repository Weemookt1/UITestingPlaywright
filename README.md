# E-commerce Test Automation using Playwright 
This project demonstrates automated testing of an e-commerce website using Playwright in TypeScript. 

The test suite covers scenarios like login, product filtering, adding to cart, and completing checkout. 

## Prerequisites: 
Before running the tests, ensure you have the following installed: 
  - Node.js (v18 or later recommended) 
  - npm (Node Package Manager)
  - yarn ( Node Package Manager)
  - Playwright (`@playwright/test`)
  
## Installation 
  Clone the repository:

   ```bash git clone https://github.com/your/repository.git cd e-commerce-playwright ```

## Install dependencies: ##
  
  yarn install

## Run test on chrome: ##
  
  yarn playwright test --project=chromium

## Run test on firefox: ##
  
  yarn playwright test --project=firefox

## Test Execution Report ##

yarn playwright show-report

## Run test on chrome (Headed, by default is headless): ##

yarn playwright test --project=chromium --headed
