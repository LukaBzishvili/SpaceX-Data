//Styles
const style = document.querySelector(".main_css");
let hrefLinkPart = "./src/css/";

// Hamburger Menu
const hamburgerBtn = document.querySelector(".hamburger_btn");
const headerContent = document.querySelector(".header_main_ul");
const container = document.querySelector(".container");

//Buttons
const allBtn = document.querySelectorAll("#header_btn");

//Creating array containing pageNames
// let pageNames = [];

//Hamburger Menu
hamburgerBtn.addEventListener("click", () => {
  headerContent.classList.toggle("active");
});

//Main code for changing HTML elements
let baseURL = "https://api.spacexdata.com/v3";
let endpoint = "/info";

const fetchData = (async = (endpoint) => {
  showLoadingAnimation();

  if (
    endpoint == "/crew" ||
    endpoint == "/landpads" ||
    endpoint == "/launchpads" ||
    endpoint == "/payloads" ||
    endpoint == "/roadster" ||
    endpoint == "/starlink"
  ) {
    baseURL = "https://api.spacexdata.com/v4";
  } else {
    baseURL = "https://api.spacexdata.com/v3";
  }
  fetch(baseURL + endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      getCorrectHTMLElements(endpoint, data);
      hideLoadingAnimation();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      hideLoadingAnimation();
    });
});

function showLoadingAnimation() {
  document.querySelector(".loading-container").style.display = "block";
}

function hideLoadingAnimation() {
  let second = 1;
  setInterval(() => {
    if (second == 2) {
      document.querySelector(".loading-container").style.display = "none";
    }
    second++;
  }, 500);
}

//Adding listeneres for all page buttons
allBtn.forEach((element) => {
  element.addEventListener("click", () => {
    endpoint = `/${element.className}`;
    fetchData(endpoint);
  });
});

//Going back to the main page
function goToIndex() {
  fetchData("/info");
}

function getCorrectHTMLElements(endpoint, data) {
  if (endpoint == "/capsules") {
    capsulePage(data);
  } else if (endpoint == "/cores") {
    coresPage(data);
  } else if (endpoint == "/crew") {
    crewPage(data);
  } else if (endpoint == "/dragons") {
    dragonsPage(data);
  } else if (endpoint == "/landpads") {
    landpadsPage(data);
  } else if (endpoint == "/launches") {
    launchesPage(data);
  } else if (endpoint == "/launchpads") {
    launchpadsPage(data);
  } else if (endpoint == "/payloads") {
    payloadsPage(data);
  } else if (endpoint == "/roadster") {
    roadster(data);
  } else if (endpoint == "/rockets") {
    rocketsPage(data);
  } else if (endpoint == "/ships") {
    shipsPage(data);
  } else if (endpoint == "/starlink") {
    starlinkPage(data);
  } else {
    mainPage(data);
  }
}

function capitalizeFirstLetter(string) {
  if (string.length === 0) {
    return string;
  }
  const words = string.split(" ");

  if (words.length >= 2) {
    words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1);
  }
  return words.join(" ");
}

//Usign to reduce text length
function checkDescriptionLength(description, length) {
  let splitDesc;
  if (description.length > length) {
    splitDesc = description.split("");
    description = "";

    for (let i = 0; i < length; i++) {
      description += splitDesc[i];
    }
    description += "...";
  }
  return description;
}
fetchData(endpoint);
