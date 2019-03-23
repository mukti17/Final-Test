const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.jpg';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://swapi.co/api/planets/', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  let bismillah = data.results;
  if (request.status >= 200 && request.status < 400) {
    bismillah.forEach(planets => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = planets.name;

      const pDesc = document.createElement('p');
      pDesc.textContent = "DIAMETER OF PLANET";

      const pContDesc = document.createElement('p');
      // movie.description = movie.description.substring(0, 300);
      pContDesc.textContent = `${planets.diameter}`;

      const pDir = document.createElement('p');
      pDir.textContent = "POPULATIONS OF PLANET";

      const pContDir = document.createElement('p');
      pContDir.textContent = `${planets.population}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(pDesc);
      card.appendChild(pContDesc);
      card.appendChild(pDir);
      card.appendChild(pContDir);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request.send();