const payloadsPage = async (data) => {
  style.href = hrefLinkPart + "capsules.css";

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const heading = document.createElement("h1");
  heading.textContent = "Payloads";

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("first_container");

  container.appendChild(heading);
  container.appendChild(cardsContainer);

  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("first_item");

    const h2 = document.createElement("h2");
    h2.innerHTML = `${element.name}, <span>${element.type}</span>`;
    card.appendChild(h2);

    const ul = document.createElement("ul");
    ul.classList.add("first_item_ul");

    const listItems = [
      `Orbit: ${element.orbit}`,
      `Reference System: ${element.reference_system}`,
      `Customers: ${element.customers}`,
      `Manufacturers: ${element.manufacturers}`,
      `Countries: ${element.nationalities}`,
    ];

    listItems.forEach((itemText) => {
      const li = document.createElement("li");
      li.textContent = itemText;
      ul.appendChild(li);
    });

    card.appendChild(ul);

    const p = document.createElement("p");
    p.textContent = element.last_update;
    card.appendChild(p);
    cardsContainer.appendChild(card);
  });

  document.body.appendChild(container);
};
