const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A ver long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

// Grabbing our elements
const profileEditButton = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const editModal = document.querySelector("#edit-modal");
const editFormElement = editModal.querySelector(".modal__form");
const editModalCloseBtn = editModal.querySelector(".modal__close-btn");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

// this is selecting the cardTemplate that we made in html under the ul section
const cardTemplate = document.querySelector("#card-template");
//this and cardsList.prepend(cardElement) below is adding the cards list to the DOM
const cardsList = document.querySelector(".cards__list");

//this will clone the cardTemplate, grab the element, and insert the data/text thats inside it
//Its going to receive the data as an argument
function getCardElement(data) {
  console.log(data);
  // we create a card element variable and store in it a clone of the card template
  //We're using .content to access the document fragment, then query selector to access the card element
  //Using .cloneNode() and passing it true to make a clone of .card
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEL = cardElement.querySelector(".card__title");
  // Selecting the image element
  const cardImageEL = cardElement.querySelector(".card__image");

  cardNameEL.textContent = data.name;
  // assigning values to the image src and alt atrributes
  cardImageEL.src = data.link;
  cardImageEL.alt = data.name;

  return cardElement;
}

function openModal() {
  // When called the stuff on the rigth is the value we're assigning to the left of the equal sign
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  // When called add the modal_opened class to our modal to open it
  editModal.classList.add("modal_opened");
}

// Remove modal_opened from modal to close it
function closeModal() {
  editModal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal();
}

// When the profile edit button is clicked, call our openModal function
profileEditButton.addEventListener("click", openModal);
editModalCloseBtn.addEventListener("click", closeModal);
editFormElement.addEventListener("submit", handleEditFormSubmit);

//We are iterating over the cards array using a loop, and in each iteration we Pass the array item to our getCardElement() function to create the card element, then we Use the appropriate built-in DOM method to add this HTML element to the page.
//This says keep iterating as long as this statement is true, as long as is less than the length of the cards array keep going.
//Array item is initialCards[i]
for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  //this along with const cardsList = document.querySelector(".cards__list") above adds cards/list/elements to the DOM
  cardsList.append(cardElement);
}
