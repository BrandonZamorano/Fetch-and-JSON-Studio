// TODO: add code here
window.addEventListener('load', (evt) => {
    // Do stuff onLoad

    const containerEl = document.getElementById("container");

    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(res => res.json())
        .then(data => {
            // Sort the array
            const sortedAstronauts = data .sort(hoursMostToLeast);

            // map each astronaut to the HTML template string (see astronautToHTMLstr)
            // and join it back to a string
            const astronautHTMLStr = sortedAstronauts
                .map(astronautToHTMLStr)
                .join("");

            // The final html string
            const htmlStr = `
            <p>Astronaut count: ${sortedAstronauts.length}</p>
            ${astronautHTMLStr}
            `;

            containerEl.innerHTML = htmlStr

        });
});

function hoursMostToLeast(a, b) {
 return b.hoursInSpace - a.hoursInSpace
}

// returns an html string template with the details of given astronaut filled.
function astronautToHTMLStr(astronaut) {
    return `
                <div class="astronaut">
                  <div class="bio">
                  <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                      <li>Hourse in space: ${astronaut.hoursInSpace}</li>
                      <li class="${astronaut.active ? 'active' : ''}">Active: ${astronaut.active}</li>
                      <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>
                  </div>
                  <img class="avatar" src="${astronaut.picture}" />
                </div>
                `

}
