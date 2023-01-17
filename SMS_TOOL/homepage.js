//counts number of years
let numYears = 0;

let year = document.getElementById('Div');
new URLSearchParams(window.location.search).forEach((value, year) => {
    year.append('${year}: ${value}');
    year.append(document.createElement('br'));
});

year.setAttribute('class', 'listOfYear');

//let this be array of years tracked
//let years = [];
//code for years to push back value after it is added


//goal for this page
//connect an array to the table of the homepage that will