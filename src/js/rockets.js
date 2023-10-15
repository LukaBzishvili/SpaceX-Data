const rocketsPage = async (data) => {
  style.href = hrefLinkPart + "landpads.css";
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const heading = document.createElement("h1");
  heading.innerText = "Rockets";

  const rocketsContainer = document.createElement("div");
  rocketsContainer.classList.add("second_container");

  container.appendChild(heading);
  container.appendChild(rocketsContainer);

  data.forEach((element) => {
    console.log(element);
    const rocketsItem = document.createElement("div");
    rocketsItem.classList.add("second_item");

    const rocketsImg = document.createElement("img");
    rocketsImg.src = element.flickr_images;
    const rocketsContent = document.createElement("div");
    rocketsContent.classList.add("rocket_item_content");
    rocketsContent.classList.add("second_item_content");

    const rocketsContent_h2 = document.createElement("h2");
    rocketsContent_h2.classList.add("rockets_h2");
    rocketsContent_h2.innerText = element.rocket_name;

    const rocketsContent_p = document.createElement("p");

    rocketsContent_p.innerText = element.description;

    //Cutting description for it not to bee too long
    rocketsContent_p.innerText = checkDescriptionLength(
      rocketsContent_p.innerText,
      130
    );

    const link = document.createElement("a");
    link.href = element.wikipedia;
    link.innerText = "Read More";

    rocketsContainer.appendChild(rocketsItem);
    rocketsItem.appendChild(rocketsImg);
    rocketsItem.appendChild(rocketsContent);
    rocketsContent.appendChild(rocketsContent_h2);
    rocketsContent.appendChild(rocketsContent_p);
    rocketsContent.appendChild(link);
  });
};
