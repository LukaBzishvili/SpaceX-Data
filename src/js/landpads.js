const landpadsPage = async (data) => {
  style.href = hrefLinkPart + "landpads.css";
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const heading = document.createElement("h1");
  heading.innerText = "Landpads";

  const landpadsContainer = document.createElement("div");
  landpadsContainer.classList.add("second_container");

  container.appendChild(heading);
  container.appendChild(landpadsContainer);

  data.forEach((element) => {
    const landpadsItem = document.createElement("div");
    landpadsItem.classList.add("second_item");

    const landpadsImg = document.createElement("img");
    landpadsImg.src = element.images.large;
    const landpadsContent = document.createElement("div");
    landpadsContent.classList.add("second_item_content");

    const landpadsContent_h2 = document.createElement("h2");
    landpadsContent_h2.classList.add("landpads_h2");
    landpadsContent_h2.innerText = `${element.type}, `;

    const landpadsSpan = document.createElement("span");
    landpadsSpan.innerText = element.full_name;

    const landpadsContent_p = document.createElement("p");

    landpadsContent_p.innerText = element.details;

    //Cutting description for it not to bee too long
    landpadsContent_p.innerText = checkDescriptionLength(
      landpadsContent_p.innerText,
      130
    );

    const link = document.createElement("a");
    link.href = element.wikipedia;
    link.innerText = "Read More";

    landpadsContainer.appendChild(landpadsItem);
    landpadsItem.appendChild(landpadsImg);
    landpadsItem.appendChild(landpadsContent);
    landpadsContent_h2.appendChild(landpadsSpan);
    landpadsContent.appendChild(landpadsContent_h2);
    landpadsContent.appendChild(landpadsContent_p);
    landpadsContent.appendChild(link);
  });
};
