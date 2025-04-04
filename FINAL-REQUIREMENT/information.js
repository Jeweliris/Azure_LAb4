document.addEventListener("DOMContentLoaded", function () {
    fetch('information.xml')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xmlDocument = parser.parseFromString(data, "application/xml");
        const sections = xmlDocument.querySelectorAll("section");
  
        const containerWrapper = document.querySelector(".container-wrapper");
        containerWrapper.innerHTML = ''; 
  
        sections.forEach(section => {
          const title = section.querySelector("title").textContent;
          const imageSrc = section.querySelector("image").getAttribute("href");
          const paragraph = section.querySelector("p").textContent;
  
          const informationContainer = document.createElement("div");
          informationContainer.classList.add("container");
          informationContainer.innerHTML = `
            <img src="${imageSrc}" alt="${title}" width="280" height="280" />
            <p>${paragraph}</p>
          `;
  
          containerWrapper.appendChild(informationContainer);
        });
      })
      .catch(error => {
        console.error("Error loading the XML file:", error);
      });
  });
