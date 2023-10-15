const coresPage = async (data) => {
  style.href = hrefLinkPart + "capsules.css";

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const heading = document.createElement("h1");
  heading.textContent = "Cores";

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("first_container");

  container.appendChild(heading);
  container.appendChild(cardsContainer);

  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("first_item");

    const h2 = document.createElement("h2");
    h2.innerHTML = `${element.core_serial}`;
    card.appendChild(h2);

    const ul = document.createElement("ul");
    ul.classList.add("first_item_ul");

    const listItems = [
      `Reused ${element.reuse_count} times`,
      `${element.missions.length} Launches`,
      `${element.rtls_landings} RTLS Landings `,
      `${element.asds_landings} ASDS Landings`,
    ];

    listItems.forEach((itemText) => {
      const li = document.createElement("li");
      li.textContent = itemText;
      ul.appendChild(li);
    });

    //Adding color to the status info
    const status = document.createElement("li");
    status.classList.add("first_item_status");
    status.textContent = `Status: ${element.status}`;
    ul.appendChild(status);

    if (status.innerText !== "Status: active") {
      status.classList.add("unknown");
    } else {
      status.classList.add("active");
    }
    status.innerText = capitalizeFirstLetter(status.innerText);

    card.appendChild(ul);

    const p = document.createElement("p");
    p.innerText = element.details;
    p.innerText = checkDescriptionLength(p.innerText, 80);
    card.appendChild(p);

    cardsContainer.appendChild(card);
  });

  document.body.appendChild(container);
};
