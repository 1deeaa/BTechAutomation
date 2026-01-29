# 🚀 WeMine Automation Test Repository

This repository contains automated tests for WeMine, covering critical user flows across authentication, equipment inspection, and safety hazard reporting.

The goal of this project is to demonstrate a balanced automation strategy using:
1. End to end (E2E) tests for critical user journeys
2. API tests for business rules and integrations
3. Page Object Model for maintainability

## 🧭 How to Read This Repository
## Start with the E2E tests
📂 ``` tests/e2e/ ```

These files represent real user journeys and are the best entry point:

- ``` auth.spec.ts ```
-> Login and master data sync flow

- ``` equipment-inspection.spec.ts ```
-> Submitting a dynamic equipment inspection form

- ``` hazard-flow.spec.ts ```
-> Safety hazard follow-up by PIC role

## Check the Page Objects
📂 ``` pages/ ```

Page Objects encapsulate:

- selectors

- user actions

- page-level behavior

This keeps tests:

- readable

- maintainable

- resilient to UI changes

## Review API Tests for Business Logic
📂 ``` tests/api/ ```

API tests validate:

- tenant resolution

- dynamic form submission

- hazard → task → notification workflow

These tests:

- run fast

- avoid UI flakiness

- protect critical backend logic