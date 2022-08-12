// TODO: add code here
window.addEventListener('load', (evt) => {
  // Do stuff onLoad

  const containerEl = document.getElementById("container");

  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(res => res.json())
    .then(data => {
      const sortedAstronauts = data
        .sort((a, b) => b.hoursInSpace - a.hoursInSpace);

      const htmlArr = sortedAstronauts.map(astronautToHTMLStr);
      const htmlStr = `
            <p>Astronaut count: ${sortedAstronauts.length}</p>
            ${htmlArr.join("")}
            `;

      containerEl.innerHTML = htmlStr

    });
});


function astronautToHTMLStr(astronaut) {
  return `
                <div class="astronaut">
                  <div class="bio">
                  <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                      <li>Hourse in space: ${astronaut.hoursInSpace}</li>
                      <li ${astronaut.active ? 'style="color: green;"' : ''}>Active: ${astronaut.active}</li>
                      <li>Skills: ${astronaut.skills}</li>
                    </ul>
                  </div>
                  <img class="avatar" src="${astronaut.picture}" />
                </div>
                `

}
