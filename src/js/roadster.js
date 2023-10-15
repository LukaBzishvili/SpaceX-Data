const roadster = async (data) => {
  console.log(data);
  console.log();
  style.href = hrefLinkPart + "roadster.css";

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const roadsterHeading = document.createElement("h1");
  roadsterHeading.innerText = "Elon Musk's Tesla Roadster";

  const roadsterContainer = document.createElement("div");
  roadsterContainer.classList.add("roadster_container");

  const roadsterImagesDiv = document.createElement("div");
  roadsterImagesDiv.classList.add("roadster_images");

  const smallImages = document.createElement("div");
  smallImages.classList = "small_images";

  let currentlyActiveImage = null;

  data.flickr_images.forEach((element, index) => {
    const smallImagesimg = document.createElement("img");
    smallImagesimg.src = element;
    smallImages.appendChild(smallImagesimg);
    if (index === 0) {
      smallImagesimg.classList.add("active_img");
      currentlyActiveImage = smallImagesimg;
    }
    smallImagesimg.addEventListener("click", function () {
      if (currentlyActiveImage) {
        currentlyActiveImage.classList.remove("active_img");
        mainImg.src = data.flickr_images[index];
      }
      smallImagesimg.classList.add("active_img");
      currentlyActiveImage = smallImagesimg;
    });
  });

  const mainImage = document.createElement("div");
  mainImage.classList.add("main_image");

  const mainImg = document.createElement("img");
  mainImg.src = data.flickr_images[0];

  mainImage.appendChild(mainImg);

  const roadsterContent = document.createElement("div");
  roadsterContent.classList.add("roadster_content");

  const roadsterParagraph = document.createElement("p");
  roadsterParagraph.innerText = data.details;

  const roadsterLists = document.createElement("div");
  roadsterLists.classList.add("roadster_lists");
  ///////////////////////////////////////////////////////////
  const leftList = document.createElement("div");
  leftList.classList.add("left_li");

  const distanceLi = document.createElement("li");
  const distanceSpan = document.createElement("span");
  distanceLi.innerText = "Launch Date: ";
  distanceSpan.innerText = data.launch_date_utc;
  distanceLi.appendChild(distanceSpan);

  const massLi = document.createElement("li");
  const massSpan = document.createElement("span");
  massLi.innerText = "Launch Mass: ";
  massSpan.innerText = `${data.launch_mass_kg} kg`;
  massLi.appendChild(massSpan);

  const daysLi = document.createElement("li");
  const daysSpan = document.createElement("span");
  daysLi.innerText = "Days Since Launch: ";
  daysSpan.innerText = Math.floor(data.period_days);
  daysLi.appendChild(daysSpan);

  const speedLi = document.createElement("li");
  const speedSpan = document.createElement("span");
  speedLi.innerText = "Speed: ";
  speedSpan.innerText = `${Math.floor(data.speed_kph)} kph`;
  speedLi.appendChild(speedSpan);

  //Lists Left
  leftList.appendChild(distanceLi);
  leftList.appendChild(massLi);
  leftList.appendChild(daysLi);
  leftList.appendChild(speedLi);

  const rightList = document.createElement("div");
  rightList.classList.add("right_li");

  const distanceEarthLi = document.createElement("li");
  const distanceEarthSpan = document.createElement("span");
  distanceEarthLi.innerText = "Distance From The Earth: ";
  distanceEarthSpan.innerText = `${data.earth_distance_km} km`;
  distanceEarthLi.appendChild(distanceEarthSpan);

  const wikipediaLi = document.createElement("li");
  const wikipediaSpan = document.createElement("a");
  wikipediaLi.innerText = "Wikipedia";
  wikipediaSpan.href = data.wikipedia;
  wikipediaLi.appendChild(wikipediaSpan);

  const youtubeLi = document.createElement("li");
  const youtubeSpan = document.createElement("a");
  youtubeLi.innerText = "Youtube Video";
  youtubeSpan.href = data.youtube;
  youtubeLi.appendChild(youtubeSpan);

  //Lists Right
  rightList.appendChild(distanceEarthLi);
  rightList.appendChild(wikipediaLi);
  rightList.appendChild(youtubeLi);

  container.appendChild(roadsterHeading);
  container.appendChild(roadsterContainer);
  roadsterContainer.appendChild(roadsterImagesDiv);
  roadsterContainer.appendChild(roadsterContent);
  roadsterContent.appendChild(roadsterParagraph);
  roadsterContent.appendChild(roadsterLists);
  roadsterImagesDiv.appendChild(smallImages);
  roadsterImagesDiv.appendChild(mainImage);
  roadsterLists.appendChild(leftList);
  roadsterLists.appendChild(rightList);
};
