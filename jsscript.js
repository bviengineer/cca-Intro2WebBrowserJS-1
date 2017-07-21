var submitButton = document.getElementById("submitBtn"), //submit button on index.html page
    clearButton = document.getElementById("resetButton"),      //reset button on index.html page
    userInput = document.getElementById("textboxInput"), //textbox to accept user input from index.html page
    displayDiv = document.getElementById("printedContent"); //div that will display user input typed into text box

    submitButton.addEventListener("click", function() {
            displayDiv.innerText = textboxInput.value;
    }
);
    clearButton.addEventListener("click", function () {
        displayDiv.innerHTML = "";
    }
);
