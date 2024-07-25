let form = document.createElement("form");
form.setAttribute("id", "card-form");
document.body.appendChild(form);

// Name Input
let nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "name-input");
nameInput.setAttribute("placeholder", "Recipent's name");
nameInput.required = true;
form.appendChild(nameInput);
//Message Area
let messageTextArea = document.createElement("textarea");
messageTextArea.setAttribute("id", "message-input");
messageTextArea.setAttribute("placeholder", "Your message");
messageTextArea.required = true;
form.appendChild(messageTextArea);
//Image
let imageInput = document.createElement("input");
imageInput.setAttribute("type", "url");
imageInput.setAttribute("id", "image-url-input");
imageInput.setAttribute("placeholder", "Image/GIF URL");
imageInput.required = true;
form.appendChild(imageInput);

let submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.innerText = "Create Card";
form.appendChild(submitButton);
document.body.appendChild(form);

//create div
let header = document.createElement("header");
let h1 = document.createElement("h1");
let paragraph = document.createElement("h2");
paragraph.setAttribute("class", "directions");

let newDivContainer = document.createElement("div");
newDivContainer.setAttribute("id", "card-container");

let emojiElement = document.createElement("div");
emojiElement.setAttribute("class", "emojiLetter");

h1.textContent = "Virtual Birthday Card Board";
paragraph.textContent = "Upload your favorite image or gif";
emojiElement.textContent = "💌";

header.appendChild(h1);
header.appendChild(paragraph);
header.appendChild(emojiElement);

header.setAttribute("class", "site-header");

document.body.appendChild(header);
document.body.appendChild(form);

let cardContainer = document.createElement("div");
document.body.appendChild(cardContainer);
cardContainer.setAttribute("class", "card-container");

let cardCount = 0;
document.getElementById("card-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name-input").value;
    let messageInput = document.getElementById("message-input").value;
    let imageUrl = document.getElementById("image-url-input").value;

    if (name !== "" && messageInput !== "" && imageUrl !== "") {
      if (cardCount < 3) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        cardContainer.appendChild(card);
        let cardHeading = document.createElement("h3");
        cardHeading.textContent = name;
        // card.appendChild(cardHeading);
        let cardParagraph = document.createElement("p");
        cardParagraph.textContent = messageInput;
        // card.appendChild(cardParagraph);
        let cardImage = document.createElement("img");
        cardImage.src = imageUrl;

        // card.appendChild(cardImage);
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "btnContainer");
        let featureButton = document.createElement("button");
        featureButton.setAttribute("type", "button");
        featureButton.setAttribute("class", "featureBtn");
        featureButton.innerText = "Feature";
        featureButton.style.backgroundColor = "teal";
        featureButton.style.Color = "white";
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("class", "deleteBtn");
        deleteButton.innerText = "Delete";
        deleteButton.style.backgroundColor = "purple";
        featureButton.style.Color = "white";
        newDiv.appendChild(featureButton);
        newDiv.appendChild(deleteButton);

        card.appendChild(cardHeading);
        card.appendChild(cardParagraph);
        card.appendChild(cardImage);
        card.appendChild(newDiv);
        card.appendChild(newDiv);

        cardContainer.appendChild(card);
        cardCount++;
        
            // Clear the form fields after successfully adding a card
        form.reset();

      }
    }

    if (cardCount === 3) {
      submitButton.disabled = true;
    }
  });
cardContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteBtn")) {
    let card = event.target.closest(".card");
    card.remove();
    cardCount--;
    submitButton.disabled = false;
  }
});

cardContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("featureBtn")) {
    let featureButton = event.target;
    let card = featureButton.closest(".card");
    card.classList.toggle("addGoldCardBorder");
  }
});



