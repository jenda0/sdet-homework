# sdet-homework

## Overview

`sdet-homework` is a project created as part of a technical assessment for the SDET role job application. It includes E2E test written in TypeScript using the Playwright framework and Page Object Model design pattern.

## Test plan

Test name: **VEE-T1 - Forum registration with public domain email**

### Objective:

- Verify that user can access Forums page via link on the Landing page
- Verify that Registration form displays error when email with public domain is submitted

### Environment:

    Browsers: Google Chrome, Microsoft Edge, Firefox
    Framework: Playwright
    Language: TypeScript

### Preconditions:

- Tested Pages are accessible

### Test Case Steps:
| No. | Step                                                       | Expected Result               |
|-----|------------------------------------------------------------|-------------------------------|
| 1   | Open Landing page                                          | Landing page opened           |
| 2   | Close cookies dialog and messenger prompt                  | Dialogs closed if present     |
| 3   | Open Support                                               | Support submenu opened        |
| 4   | Click R&D Forums                                           | Redirect to Forums page       |
| 5   | Click on Register Button                                   | Agreement page opened         |
| 6   | Click on Agree Button                                      | Registration Form page opened |
| 7   | Submit Registration form with already existing username    | Error message displayed       |

### Test Data:
Use values from `application/ui/constants.ts` object `TEST_USER`

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/jenda0/sdet-homework.git
   ```
2. Navigate to the project directory:
   ```bash
   cd sdet-homework
   ```
3. Install dependencies:
   ```bash
   npm ci
   ```

## Usage

Run the project using the following command:

```bash
npx playwright test
```

## Reporting
Standard Playwright report is generated after test execution including screenshot on test failure
```bash
npx playwright show-report
```

## CI/CD
The project includes automatically generated GitHub Actions workflow for continuous integration. The workflow is triggered on push and pull request events to the `main` branch.
