const dragonsPage = async (data) => {
  style.href = hrefLinkPart + "dragon.css";

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const heading = document.createElement("h1");
  heading.innerText = "Dragons";

  const dragonsContainer = document.createElement("div");
  dragonsContainer.classList.add("second_container");

  container.appendChild(heading);
  container.appendChild(dragonsContainer);

  data.forEach((element, index) => {
    const dragonItem = document.createElement("div");
    dragonItem.classList.add("second_item");

    const dragonImg = document.createElement("img");
    dragonImg.src = element.flickr_images[0];

    const dragonContent = document.createElement("div");
    dragonContent.classList.add("second_item_content");

    const dragonContent_h2 = document.createElement("h2");
    dragonContent_h2.innerText = `Dragon ${index + 1}`;

    const dragonContent_p = document.createElement("p");
    dragonContent_p.innerText = element.description;

    //Cutting description for it not to bee too long
    dragonContent_p.innerText = checkDescriptionLength(
      dragonContent_p.innerText,
      130
    );

    const link = document.createElement("a");
    link.href = element.wikipedia;
    link.innerText = "Read More";

    dragonsContainer.appendChild(dragonItem);
    dragonItem.appendChild(dragonImg);
    dragonItem.appendChild(dragonContent);
    dragonContent.appendChild(dragonContent_h2);
    dragonContent.appendChild(dragonContent_p);
    dragonContent.appendChild(link);
  });
};
