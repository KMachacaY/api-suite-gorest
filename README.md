# GoREST API Test Suite

An automated API testing suite built with **Playwright**, designed for verification of the GoREST API. This project demonstrates best practices in API testing, security auditing, and test data management.

## Key Features

* **OAuth Token Retrieval:** Automated setup script (`auth.setup.js`) to handle authentication and session persistence.
* **Schema Validation:** Strict contract testing using **Ajv** to ensure API responses match expected JSON schemas.
* **Data-Driven Testing:** Parametrized test execution using an external `user_data.json` file for scalability.
* **Security Audit:** Specialized tests for **OWASP BOLA** vulnerabilities to ensure secure object-level authorization.
* **Resiliency Testing:** Negative testing to verify proper error handling.

## Project Structure

* `tests/`: Contains the main API test suite.
* `data/`: JSON files containing test datasets.
* `schemas/`: JSON schema definitions for contract validation.
* `auth/`: Stores session tokens.
* `reports/`: Contains execution logs and evidence (`results.xml`).

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Playwright

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>