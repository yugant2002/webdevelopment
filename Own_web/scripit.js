function checkBlood() {
  let blood = document.getElementById("bloodGroup").value;
  let result = document.getElementById("result");
  let contactBox = document.getElementById("contactBox");

  if (blood === "") {
    alert("Please select blood group");
    return;
  }

  // Fake logic (blood not available)
  result.innerHTML = "❌ Blood not available!";
  contactBox.classList.remove("hidden");
}

function callBank() {
  alert("📞 Calling Blood Bank: 1800-123-456");
}

function contactDonor() {
  alert("🩸 Donor Contact: +91 98765 43210");
}
