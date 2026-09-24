#  Financely – Personal Expense Tracker

**Financely** is a modern personal finance and expense tracking web application built with **React.js** and **Firebase**. It allows users to securely manage their income and expenses, monitor their financial balance, search and filter transactions, and import/export transaction data using CSV files.

The application provides a simple and user-friendly dashboard to help users keep track of their personal finances in one place.

## Features

### 🔐 User Authentication

* Sign up and log in using email and password.
* Google authentication using Firebase.
* Secure user-specific transaction management.
* Logout functionality.

### 💵 Income Management

* Add new income transactions.
* Record income name, amount, date, and category.
* Supported income categories:

  * Salary
  * Freelance
  * Investment

### 💸 Expense Management

* Add new expense transactions.
* Record expense name, amount, date, and category.
* Supported expense categories:

  * Food
  * Education
  * Office
  * Shopping
  * Personal

### 📊 Financial Dashboard

* View total income.
* View total expenses.
* View current balance.
* Visualize financial information through dashboard components and charts.

### 🔎 Transaction Management

* Search transactions by name.
* Filter transactions by:

  * Income
  * Expense
* Sort transactions by:

  * Date
  * Amount
* View all transactions in a structured table.

### 📁 CSV Import & Export

* Export transactions to a CSV file.
* Import multiple transactions from a CSV file.
* Useful for backup and transferring financial records.

### ☁️ Firebase Integration

* Firebase Authentication for user authentication.
* Cloud Firestore for storing user transactions.
* Each user's transactions are stored separately.

### 🎨 User Interface

* Responsive and clean interface.
* Built using Ant Design components.
* Toast notifications for successful and unsuccessful operations.
* Loading states for better user experience.

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**

### UI & Components

* **Ant Design**
* **React Toastify**

### Backend / Database

* **Firebase Authentication**
* **Firebase Cloud Firestore**

### Libraries

* **React Router DOM**
* **React Firebase Hooks**
* **PapaParse**
* **Ant Design Charts**

### Development Tools

* **Create React App / React Scripts**
* **npm**

---

## 📂 Project Structure

```text
Expense-Tracker/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header/
│   │   ├── Loader/
│   │   ├── Modals/
│   │   ├── NoTransactions.js
│   │   ├── Signup.js
│   │   └── TransactionSearch.js
│   │
│   ├── App.js
│   ├── firebase.js
│   ├── index.js
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/expense-tracker.git
```

### 2. Navigate to the project directory

```bash
cd expense-tracker
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Firebase

Create a Firebase project from:

https://console.firebase.google.com/

Enable:

* Firebase Authentication
* Google Sign-In
* Email/Password Authentication
* Cloud Firestore

Create a Firebase configuration and add it to your project.

For a production repository, it is recommended to store Firebase configuration values in environment variables rather than hard-coding configuration directly in source files.

Example:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### 5. Start the development server

```bash
npm start
```

The application will normally be available at:

```text
http://localhost:3000
```

---

## 🔥 Firebase Database Structure

The application stores users and their transactions in Firestore.

A simplified structure is:

```text
users
│
└── userId
    │
    ├── name
    ├── email
    ├── photoURL
    ├── createdAt
    │
    └── transactions
        │
        ├── transactionId
        │   ├── name
        │   ├── amount
        │   ├── date
        │   ├── tag
        │   └── type
        │
        └── ...
```

Transaction types include:

```text
income
expense
```

---

## 📊 Transaction Example

```json
{
  "name": "Monthly Salary",
  "amount": 50000,
  "date": "2026-09-25",
  "tag": "salary",
  "type": "income"
}
```

Example expense:

```json
{
  "name": "Grocery Shopping",
  "amount": 2500,
  "date": "2026-09-25",
  "tag": "shopping",
  "type": "expense"
}
```

---

## 📤 CSV Import & Export

The application supports CSV-based transaction management.

### Export

Users can export their transactions into a CSV file for:

* Personal records
* Backup
* Data analysis
* Offline storage

### Import

Users can upload a CSV file containing transaction records and add multiple transactions to their account.

---

## 🔒 Security

This application uses Firebase Authentication and Firestore to separate user data.

For production deployment:

* Configure proper Firestore Security Rules.
* Do not commit private credentials or service-account keys.
* Use environment variables for configuration.
* Restrict Firebase Authentication providers to those required by the application.
* Review Firebase security rules before deploying publicly.

> **Important:** Firebase web configuration values such as the API key are not equivalent to a server-side secret. However, Firestore Security Rules and Firebase Authentication configuration must still be properly secured.

---

## 🧪 Available Scripts

In the project directory, you can run:

### Start development server

```bash
npm start
```

Runs the application in development mode.

### Build for production

```bash
npm run build
```

Creates an optimized production build.

### Run tests

```bash
npm test
```

Launches the test runner.

### Eject

```bash
npm run eject
```

**Note:** This is a one-way operation and should only be used when you need full control over the build configuration.

---

## 🌐 Deployment

The application can be deployed using platforms such as:

* Vercel
* Netlify
* Firebase Hosting
* GitHub Pages

For Firebase-based deployment, Firebase Hosting can be used alongside the existing Firebase project.

---

## 💡 Future Improvements

Potential improvements include:

* 📱 Improved mobile responsiveness
* 🌙 Dark mode
* 📈 Advanced financial analytics
* 📅 Monthly and yearly reports
* 💳 Budget management
* 🔔 Budget notifications
* 📊 More detailed charts
* 🏷️ Custom transaction categories
* 🔄 Recurring transactions
* 📄 PDF financial reports
* 🔐 Improved Firestore security rules
* ☁️ Production-ready environment configuration

---

## 🎯 Project Purpose

The purpose of Financely is to provide a simple and accessible way for users to:

* Track their income.
* Record daily expenses.
* Monitor their available balance.
* Search and organize transactions.
* Maintain financial records.
* Import and export financial data.

This project also demonstrates practical implementation of **React.js, Firebase Authentication, Cloud Firestore, REST-style data handling, component-based architecture, and third-party UI libraries**.

---

## 👨‍💻 Author

**Your Name**

GitHub: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)

LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/YOUR-PROFILE)

---

## ⭐ Contributing

Contributions, suggestions, and improvements are welcome.

### Steps to contribute

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add new feature"
```

5. Push the branch.

```bash
git push origin feature/new-feature
```

6. Open a Pull Request.

---

## 📄 License

This project is available for educational and personal use. Add an appropriate open-source license if you intend to allow redistribution or modification.

---

### ⭐ If you find this project useful, consider giving it a star!
