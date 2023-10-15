const capsulePage = async (data) => {
  style.href = hrefLinkPart + "capsules.css";

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const heading = document.createElement("h1");
  heading.textContent = "Capsules";

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("first_container");

  container.appendChild(heading);
  container.appendChild(cardsContainer);

  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("first_item");

    const h2 = document.createElement("h2");
    h2.innerHTML = `${element.type}, <span>${element.capsule_serial}</span>`;
    card.appendChild(h2);

    const ul = document.createElement("ul");
    ul.classList.add("first_item_ul");

    const listItems = [
      `Reused ${element.reuse_count} times`,
      `Launches ${element.launches}`,
      `Water Landings ${element.water_landings}`,
      `Land Landings ${element.land_landings}`,
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
    p.textContent = element.last_update;
    card.appendChild(p);
    cardsContainer.appendChild(card);
  });

  document.body.appendChild(container);
};
