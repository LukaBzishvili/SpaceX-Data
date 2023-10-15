const launchesPage = async (data) => {
  style.href = hrefLinkPart + "launches.css";
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const launchesHeading = document.createElement("h1");
  launchesHeading.innerText = "Launches";

  const launchesDiv = document.createElement("div");
  launchesDiv.classList.add("launches_div");

  container.appendChild(launchesHeading);
  container.appendChild(launchesDiv);

  data.forEach((element) => {
    console.log(element);

    const launchLink = document.createElement("a");
    // link.href = element.wikipedia;
    launchLink.classList.add("launches_member");

    const launchImage = document.createElement("img");
    launchImage.src = element.links.mission_patch;
    console.log(element.links.mission_patch);

    const launchName = document.createElement("h2");
    launchName.innerText = element.rocket.rocket_name;

    const launchParagraph = document.createElement("p");
    launchParagraph.innerText = element.details;

    launchParagraph.innerText = checkDescriptionLength(
      launchParagraph.innerText,
      40
    );

    launchesDiv.appendChild(launchLink);
    launchLink.appendChild(launchImage);
    launchLink.appendChild(launchName);
    launchLink.appendChild(launchParagraph);
  });
};
