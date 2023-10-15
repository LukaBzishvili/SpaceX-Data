const starlinkPage = async (data) => {
  style.href = hrefLinkPart + "capsules.css";
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const heading = document.createElement("h1");
  heading.textContent = "Starlink";

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("first_container");

  container.appendChild(heading);
  container.appendChild(cardsContainer);

  data.forEach((element) => {
    console.log(element);

    const card = document.createElement("div");
    card.classList.add("first_item");
    card.classList.add("first_item_starlink");

    const h2 = document.createElement("h2");
    h2.innerHTML = `${element.spaceTrack.OBJECT_NAME}, <span>${element.version}</span>`;
    card.appendChild(h2);

    const ul = document.createElement("ul");
    ul.classList.add("first_item_ul_starlnk");

    const dateSpan = document.createElement("span");
    dateSpan.innerText = element.spaceTrack.LAUNCH_DATE;

    const siteSpan = document.createElement("span");
    siteSpan.innerText = element.spaceTrack.SITE;

    const listItems = [
      `Launch Date: `,
      `Launch Site: `,
      //   `${element.spaceTrack.COMMENT}`,
    ];

    listItems.forEach((itemText) => {
      const li = document.createElement("li");
      li.textContent = itemText;
      ul.appendChild(li);
    });
    ul.childNodes[0].appendChild(dateSpan);
    ul.childNodes[1].appendChild(siteSpan);

    card.appendChild(ul);

    const p = document.createElement("p");
    p.textContent = element.spaceTrack.COMMENT.toLowerCase();
    card.appendChild(p);
    cardsContainer.appendChild(card);
    p.style.color = "rgb(199, 195, 195)";
  });

  document.body.appendChild(container);
};
