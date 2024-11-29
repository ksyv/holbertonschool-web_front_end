function createElement(data) {
    const p = document.createElement('p'); // create <p> element
    p.textContent = data;
    document.body.appendChild(p);
  }
  
  function queryWikipedia(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        var response = JSON.parse(xhttp.responseText);
        var extract = response.query.pages[Object.keys(response.query.pages)[0]].extract;
        callback(extract);
      }
    };
    xhttp.send();
  }
  
  queryWikipedia(createElement);