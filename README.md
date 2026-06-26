# Playwright End-to-End Test Suite - Sauce Demo

A demonstration project using **Playwright** with the **Page Object Model (POM)** design pattern to test the Sauce Demo e-commerce website.

## Features Tested
- User login functionality
- Adding items to shopping cart
- Cart verification and basic navigation

## Project Structure
playwright-project/
├── tests/
│   ├── pages/              # Page Object classes
│   │   ├── LoginPage.js
│   │   ├── ProductsPage.js
│   │   └── CartPage.js
│   └── sdemo.spec.js       # Test cases
├── playwright.config.js
└── package.json


## How to Run the Tests

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
