# Shift Management System

## 📌 Overview
The **Shift Management System** is designed to help manage employee work shifts, defect reporting, announcements, and link sharing efficiently. It includes user registration, admin approval, and shift tracking.

## 🚀 Features
### ✅ User Management
- **Registration & Login**: Employees must register before accessing the system.
- **Admin Approval**: Only approved users can log in.

### ✅ Shift Management
- Users can check their shift schedule based on the **6-day work, 2-day off cycle**.
- Shifts include **Morning, Afternoon, and Night** rotations.

### ✅ Defect Reporting
- Employees can **submit defect reports**.
- The system prevents duplicate defect submissions.

### ✅ Announcements & Updates
- Admins can **post important updates**.
- Users can view company-wide announcements.

### ✅ Link Sharing & Post Management
- Employees can **share useful links** (e.g., training materials, social media updates).
- Admins can **delete or block posts** if necessary.

### ✅ Admin Controls
- Approve or reject new users.
- Manage user access (block/unblock users).
- Delete inappropriate posts or defect reports.

## 📂 Project Structure
```
/shift-management-system
│── /css
│   └── style.css  (Styling)
│── /js
│   ├── script.js  (Shift logic)
│   ├── auth.js  (Login & Admin Approval logic)
│── /data
│   ├── users.json  (Stores registered users)
│   ├── shifts.json  (Stores shift data)
│── index.html  (Registration & Login Page)
│── dashboard.html  (Main Dashboard: Shifts, Defects, Announcements)
│── admin.html  (Admin Panel)
│── favicon.ico  (Company Icon)
│── README.md  (This file)
```

## 🔧 Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/shift-management-system.git
   ```
2. **Open the Project Folder**
   ```sh
   cd shift-management-system
   ```
3. **Run the System Locally**
   - Open `index.html` in a browser.
   - Register as a user and wait for admin approval.
   - Once approved, log in and access the dashboard.

## 🌐 Live Demo
👉 **[Live System](https://your-github-username.github.io/shift-management-system/)**

## 🔑 Admin Access
To log in as an admin and manage users:
- Open `admin.html` in your browser.
- Use **admin credentials** to access the dashboard.

## 📝 License
This project is licensed under the **MIT License** – you are free to modify and use it for personal or business purposes.

---

### Need help? 🤔
For any issues, feel free to **create an issue on GitHub** or **contact the project admin**.

