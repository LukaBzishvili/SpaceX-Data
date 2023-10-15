const crewPage = async (data) => {
  style.href = hrefLinkPart + "crew.css";
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const crewHeading = document.createElement("h1");
  crewHeading.innerText = "Crew";

  const crewDiv = document.createElement("div");
  crewDiv.classList.add("crew_div");

  container.appendChild(crewHeading);
  container.appendChild(crewDiv);

  data.forEach((element) => {
    const link = document.createElement("a");
    link.href = element.wikipedia;
    link.classList.add("crew_member");

    const image = document.createElement("img");
    image.src = element.image;

    const name = document.createElement("h2");
    name.innerText = element.name;

    crewDiv.appendChild(link);
    link.appendChild(image);
    link.appendChild(name);
  });
};
