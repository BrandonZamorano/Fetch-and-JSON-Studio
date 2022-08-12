// TODO: add code here
window.addEventListener('load', (evt) => {
    // Do stuff onLoad

    const containerEl = document.getElementById("container");

    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(res => res.json())
        .then(data => {
            // Sort the array
            const sortedAstronauts = data
                .sort((a, b) => b.hoursInSpace - a.hoursInSpace);

            // map each astronaut to the HTML template string (see astronautToHTMLstr)
            const htmlArr = sortedAstronauts.map(astronautToHTMLStr);

            // The final html string
            // htmlArr is an array, so we joined it back to a string
            const htmlStr = `
            <p>Astronaut count: ${sortedAstronauts.length}</p>
            ${htmlArr.join("")}
            `;

            containerEl.innerHTML = htmlStr

        });
});


// returns an html string template with the details of given astronaut filled.
function astronautToHTMLStr(astronaut) {
    return `
                <div class="astronaut">
                  <div class="bio">
                  <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                      <li>Hourse in space: ${astronaut.hoursInSpace}</li>
                      <li class="${astronaut.active ? 'active' : ''}">Active: ${astronaut.active}</li>
                      <li>Skills: ${astronaut.skills}</li>
                    </ul>
                  </div>
                  <img class="avatar" src="${astronaut.picture}" />
                </div>
                `

}
