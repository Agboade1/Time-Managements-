let users = JSON.parse(localStorage.getItem("users")) || [];

function register() {
    let name = document.getElementById("regName").value;
    let phone = document.getElementById("regPhone").value;
    let pass = document.getElementById("regPass").value;

    if (!name || !phone || !pass) {
        alert("All fields are required!");
        return;
    }

    users.push({ name, phone, pass, approved: false });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration submitted! Wait for admin approval.");
}

function login() {
    let name = document.getElementById("loginName").value;
    let pass = document.getElementById("loginPass").value;

    let user = users.find(u => u.name === name && u.pass === pass);
    if (user) {
        if (user.approved) {
            alert("Login successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Waiting for admin approval.");
        }
    } else {
        alert("Invalid login credentials.");
    }
}

function approveUser(name) {
    let userIndex = users.findIndex(u => u.name === name);
    if (userIndex !== -1) {
        users[userIndex].approved = true;
        localStorage.setItem("users", JSON.stringify(users));
        alert(`${name} has been approved.`);
    }
}

// Load pending users for admin
function loadPendingUsers() {
    let pendingUsers = users.filter(u => !u.approved);
    let list = document.getElementById("pendingList");

    list.innerHTML = "";  // Clear old list
    pendingUsers.forEach(user => {
        let li = document.createElement("li");
        li.innerHTML = `${user.name} - ${user.phone} 
            <button onclick="approveUser('${user.name}')">Approve</button>`;
        list.appendChild(li);
    });
}

