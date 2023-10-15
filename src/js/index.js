const mainPage = (async = (data) => {
  style.href = hrefLinkPart + "main.css";

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  //  main container element
  const mainContainer = document.createElement("div");
  mainContainer.className = "hero";

  //  append the heading
  const heading = document.createElement("div");
  heading.className = "hero_heading";
  const headingText = document.createElement("h1");
  headingText.innerHTML =
    "All SpaceX Info In One Place <br /><span>Aside From Their Website</span>";
  heading.appendChild(headingText);
  mainContainer.appendChild(heading);

  //  append the content section
  const content = document.createElement("div");
  content.className = "hero_content";

  //  "ABOUT" article
  const aboutArticle = document.createElement("div");
  aboutArticle.className = "article";
  const aboutHeading = document.createElement("h2");
  aboutHeading.className = "article_h2";
  aboutHeading.textContent = "ABOUT";
  const aboutList = document.createElement("ul");
  aboutList.innerHTML = `
    <li>Founded in ${data.founded} by ${data.founder}</li>
    <li>Has 9500 employees,</li>
    <li>4 space vehicles,</li>
  `;
  aboutArticle.appendChild(aboutHeading);
  aboutArticle.appendChild(document.createElement("hr"));
  aboutArticle.appendChild(aboutList);

  //  "HEADQUARTERS" article
  const headquartersArticle = document.createElement("div");
  headquartersArticle.className = "article";
  const headquartersHeading = document.createElement("h2");
  headquartersHeading.className = "article_h2";
  headquartersHeading.textContent = "HEADQUARTERS";
  const headquartersList = document.createElement("ul");
  headquartersList.innerHTML = `
    <li>${data.headquarters.address}</li>
    <li>${data.headquarters.city}, ${data.headquarters.state}</li>
  `;
  headquartersArticle.appendChild(headquartersHeading);
  headquartersArticle.appendChild(document.createElement("hr"));
  headquartersArticle.appendChild(headquartersList);

  //  "SOCIAL MEDIA" article
  const socialMediaArticle = document.createElement("div");
  socialMediaArticle.className = "article";
  const socialMediaHeading = document.createElement("h2");
  socialMediaHeading.className = "article_h2";
  socialMediaHeading.textContent = "SOCIAL MEDIA";
  const socialMediaList = document.createElement("ul");
  socialMediaList.innerHTML = `
    <li><a href="https://www.spacex.com/">Website</a></li>
    <li><a href="https://www.flickr.com/photos/spacex/">Flickr</a></li>
    <li><a href="https://twitter.com/SpaceX">Twitter</a></li>
    <li><a href="https://twitter.com/elonmusk">Elon Musk's Twitter</a></li>
  `;
  socialMediaArticle.appendChild(socialMediaHeading);
  socialMediaArticle.appendChild(document.createElement("hr"));
  socialMediaArticle.appendChild(socialMediaList);

  // Append the articles to the content section
  content.appendChild(aboutArticle);
  content.appendChild(headquartersArticle);
  content.appendChild(socialMediaArticle);

  //  append the paragraph
  const paragraph = document.createElement("div");
  paragraph.className = "hero_p";
  const pText = document.createElement("p");
  pText.textContent =
    "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.";
  paragraph.appendChild(pText);

  // Append all the sections to the main container
  mainContainer.appendChild(content);
  mainContainer.appendChild(paragraph);

  // Append the main container to the 'container' element in the HTML
  container.appendChild(mainContainer);
});
