var table = document.getElementById('planetStarWars');

var request = new XMLHttpRequest();
request.open('GET', 'https://swapi.co/api/planets/', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  let bismillah = data.results;
  if (request.status >= 200 && request.status < 400) {
    bismillah.forEach(planets => {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + planets.name + '</td>' +
            '<td>' + planets.rotation_period + '</td>' +
            '<td>' + planets.orbital_period + '</td>' +
            '<td>' + planets.diameter + '</td>' +
            '<td>' + planets.gravity + '</td>' +
            '<td>' + planets.terrain + '</td>' +
            '<td>' + planets.population + '</td>';
        table.appendChild(tr);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request.send();

function searchPlanet() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("planetInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("planetStarWars");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}