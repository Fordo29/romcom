
//MAKE FORM PAGE VARIABLES
var inputCover = document.querySelector('.user-cover');
var inputTitle = document.querySelector('.user-title');
var inputDescriptor1 = document.querySelector('.user-desc1');
var inputDescriptor2 = document.querySelector('.user-desc2');

//HTML ELEMENT GRABS
var image = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

//BUTTON GRABS
var makeMyBookButton = document.querySelector('.create-new-book-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var saveButton = document.querySelector('.save-cover-button');
var randomButton = document.querySelector('.random-cover-button');
var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');

//FORM GRABS
var formPage = document.querySelector('.form-view');
var homePage = document.querySelector('.home-view');
var displaySavedCoversPage = document.querySelector('.view.saved-view.hidden');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")];


// EVENT HANDLER
document.onload = pageLoad();


// // Add your event listeners here 👇
randomButton.addEventListener('click', pageLoad);
homeButton.addEventListener('click', showHomeView);
makeYourOwnCoverButton.addEventListener('click', showFormView);
viewSavedButton.addEventListener('click', displaySavedCover);
makeMyBookButton.addEventListener('click', makeUserCover);
saveButton.addEventListener('click', showCover);


//  Add your functions here 👇
function displaySavedCover() {
  displaySavedCoversPage.innerHTML = ""
  for (var i = 0; i <savedCovers.length; i++) {
    displaySavedCoversPage.innerHTML +=
    `<section class="mini-cover">
    <img class="cover-image" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>`
  }

  showSavedView();
}

function showCover(){
  makeUserCover();
  for (var i = 0; i <savedCovers.length; i++) {
    displaySavedCoversPage.innerHTML +=
    `<section class="mini-cover">
    <img class="cover-image" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>'`
  }

  savedCovers.push(currentCover);
  console.log(savedCovers);
}

function pushUserInput() {
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(inputDescriptor1.value);
  descriptors.push(inputDescriptor2.value);
}

function makeUserCover() {
  event.preventDefault();
  currentCover = new Cover(image.src, bookTitle.innerText, descriptor1.innerText, descriptor2.innerText);
  pushUserInput();
  image.src = inputCover.value;
  bookTitle.innerText = inputTitle.value;
  descriptor1.innerText = inputDescriptor1.value;
  descriptor2.innerText = inputDescriptor2.value;
  showHomeView();
}

function showHomeView() {
  saveButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomButton.classList.remove('hidden');
  homePage.classList.remove('hidden');
  displaySavedCoversPage.classList.add('hidden');
  formPage.classList.add('hidden');
}

function showSavedView() {
  saveButton.classList.add('hidden');
  randomButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  homePage.classList.add('hidden');
  displaySavedCoversPage.classList.remove('hidden');
  formPage.classList.add('hidden');
}

function showFormView() {
  homeButton.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveButton.classList.add('hidden');
  formPage.classList.remove('hidden');
  homePage.classList.add('hidden');
  displaySavedCoversPage.classList.add('hidden');
}

function pageLoad() {
   image.src = covers[getRandomIndex(covers)];
   bookTitle.innerText = titles[getRandomIndex(titles)];
   descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
   descriptor2.innerText = descriptors[getRandomIndex(descriptors)];
 }

 function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
 }
