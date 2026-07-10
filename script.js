function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  if(user && pass) {
    document.getElementById("loginMsg").innerText = "✅ Logged in successfully!";
  } else {
    document.getElementById("loginMsg").innerText = "❌ Please enter username and password.";
  }
}

function logout() {
  alert("You have logged out.");
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Expenses
function addExpense() {
  let date = document.getElementById("expDate").value;
  let cat = document.getElementById("expCategory").value;
  let amt = document.getElementById("expAmount").value;
  if(date && cat && amt > 0) {
    let table = document.getElementById("expenseTable");
    table.innerHTML += `<tr><td>${date}</td><td>${cat}</td><td>${amt}</td></tr>`;
  }
}

// Inventory
function addItem() {
  let item = document.getElementById("invItem").value;
  let stock = document.getElementById("invStock").value;
  let cost = document.getElementById("invCost").value;
  if(item && stock >= 0 && cost >= 0) {
    let table = document.getElementById("invTable");
    table.innerHTML += `<tr><td>${item}</td><td>${stock}</td><td>${cost}</td></tr>`;
  }
}
