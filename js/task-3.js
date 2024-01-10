
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function updateGreetingText() {
    let trimmedValue = input.value.trim();
    output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
}

input.addEventListener("input", updateGreetingText);

