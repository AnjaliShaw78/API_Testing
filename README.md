# 📚 Cypress API Automation – Simple Books API

## 📖 Overview

This project demonstrates **REST API automation** using **Cypress** by testing the **Simple Books API**. It validates the complete API workflow, including authentication, book retrieval, order management, and CRUD operations.

The project follows a structured approach to API testing with assertions for status codes, response validation, and authenticated requests.

---

## 🚀 Features

- ✅ API Health Check
- ✅ Retrieve Book List
- ✅ Get Book Details
- ✅ Client Authentication
- ✅ Submit a New Order
- ✅ Retrieve Orders
- ✅ Update an Existing Order
- ✅ Delete an Order
- ✅ Response Validation
- ✅ Status Code Verification

---

## 🛠 Tech Stack

- **Automation Tool:** Cypress
- **Language:** JavaScript
- **API Type:** REST API
- **Authentication:** Bearer Token
- **Data Format:** JSON

---

## 📂 Project Structure

```
cypress/
 ├── e2e/
 │    └── SimpleBooksAPI.cy.js
 ├── fixtures/
 ├── support/
 ├── screenshots/
 ├── videos/
cypress.config.js
package.json
README.md
```

---

## 🔍 Test Scenarios

- Verify API Status
- Get List of Books
- Get Single Book Details
- Register API Client
- Generate Authentication Token
- Submit an Order
- Retrieve Orders
- Update Customer Name
- Delete Order

---

## ▶️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
```

Navigate to the project

```bash
cd your-repository
```

Install dependencies

```bash
npm install
```

---

## ▶️ Run Tests

Open Cypress

```bash
npx cypress open
```

Run in Headless Mode

```bash
npx cypress run
```

---

## ✅ Validations Performed

- HTTP Status Code Validation
- Response Body Validation
- Authentication Validation
- CRUD Operations Validation
- Bearer Token Authorization
- API Response Logging

---

## 📌 API Endpoints Covered

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/status` | Check API Status |
| GET | `/books` | Get All Books |
| GET | `/books/{id}` | Get Single Book |
| POST | `/api-clients` | Register Client |
| POST | `/orders` | Create Order |
| GET | `/orders` | Retrieve Orders |
| PATCH | `/orders/{id}` | Update Order |
| DELETE | `/orders/{id}` | Delete Order |

---

## 🎯 Learning Outcomes

- API Automation using Cypress
- REST API Testing
- Authentication using Bearer Tokens
- CRUD Operations Testing
- Request & Response Validation
- Status Code Assertions
- End-to-End API Workflow Testing

---

## 👩‍💻 Author

**Anjali Shaw**

- LinkedIn: https://www.linkedin.com/in/anjali-shaw07/
- GitHub: https://github.com/AnjaliShaw78
