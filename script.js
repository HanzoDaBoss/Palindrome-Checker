const button = document.getElementById("check-btn");

function isThisAPalindrome() {
    const userInput = document.getElementById("text-input").value;
    const result = document.getElementById("result");

    const regex = /[^A-Za-z0-9]/g;
    const lowReStr = userInput.toLowerCase().replace(regex, '');
    const reverseStr = lowReStr.split('').reverse().join('');
    if (userInput === "") {
        alert("Please input a value");
    }
    else if (reverseStr === lowReStr) {
        result.textContent = `${userInput} is a palindrome.`;
    }
    else {
        result.textContent = `${userInput} is not a palindrome.`;
    }
}

button.addEventListener("click", isThisAPalindrome);