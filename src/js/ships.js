const shipsPage = async (data) => {
  style.href = hrefLinkPart + "landpads.css";
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const heading = document.createElement("h1");
  heading.innerText = "Ships";

  const shipsContainer = document.createElement("div");
  shipsContainer.classList.add("second_container");

  container.appendChild(heading);
  container.appendChild(shipsContainer);

  data.forEach((element) => {
    console.log(element);

    const shipsItem = document.createElement("div");
    shipsItem.classList.add("second_item");

    const shipsImg = document.createElement("img");
    shipsImg.src = element.image;
    const shipsContent = document.createElement("div");
    shipsContent.classList.add("second_item_content");

    const shipsContent_h2 = document.createElement("h2");
    shipsContent_h2.classList.add("launchpads_h2");
    shipsContent_h2.innerText = element.ship_name;

    const shipsContent_p = document.createElement("p");
    shipsContent_p.innerText = element.home_port;

    //Cutting description for it not to bee too long
    shipsContent_p.innerText = checkDescriptionLength(
      shipsContent_p.innerText,
      60
    );

    const link = document.createElement("a");
    // link.href = element.wikipedia;
    link.innerText = "Learn More";

    shipsContainer.appendChild(shipsItem);
    shipsItem.appendChild(shipsImg);
    shipsItem.appendChild(shipsContent);
    shipsContent.appendChild(shipsContent_h2);
    shipsContent.appendChild(shipsContent_p);
    shipsContent.appendChild(link);
  });
};
