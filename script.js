		 const button = document.getElementById("submit");
        const box = document.getElementById("checkbox");
        const existingButton = document.getElementById("existing");
		  const savedData = localStorage.getItem("usersData");
        if (savedData) {
            existingButton.style.display = "block"; // Show the "Login as existing user" button
		}

button.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
	box.checked = true;
    if (!name || !pass) {
        alert("Please enter both username and password.");
        return;
    }
    let userObj = { username: name, password: pass };
    
    if (box.checked) {
        let data = JSON.stringify(userObj);
        localStorage.setItem("usersData", data);
        alert(`Logged in as ${name}`);
	
    }
});
        existingButton.addEventListener("click", () => {
            const parsedData = JSON.parse(localStorage.getItem("usersData"));
            alert(`Logged in as ${parsedData.username}`);
        });