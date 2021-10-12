const countries = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    country: "India",
    population: "1,392,700,000",
    region: "Asia",
    capital: "Delhi",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    country: "Germany",
    population: "84,120,076",
    region: "Europe",
    capital: "Berlin",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
    country: "United States of America",
    population: "333,416,037",
    region: "America",
    capital: "Washington D.C",
  },
  {
    image: "https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg",
    country: "Brazil",
    population: "214,458,419",
    region: "America",
    capital: "Brazilia",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
    country: "Japan",
    population: "125,990,353",
    region: "Asia",
    capital: "Tokyo",
  },
  {
    image: "https://cdn.britannica.com/85/1485-004-94C3DEDA/Flag-Iceland.jpg",
    country: "Iceland",
    population: "344,027",
    region: "Europe",
    capital: "Reykjavik",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    country: "United Kingdom",
    population: "68,334,304",
    region: "Europe",
    capital: "London",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
    country: "France",
    population: "65,455,147",
    region: "Europe",
    capital: "Paris",
  },
];

//console.log(countries);

const element = document.createElement("div");
element.setAttribute("class", "container");

const rows = document.createElement("div");
rows.setAttribute("class", "row");

const column1 = document.createElement("div");
column1.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
column1.innerHTML = countries[0];
const column2 = document.createElement("div");
column2.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
column2.innerHTML = countries[1];
const column3 = document.createElement("div");
column3.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
column3.innerHTML = countries[2];
const column4 = document.createElement("div");
column4.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
column4.innerHTML = countries[3];

const column5 = document.createElement("div");
column5.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
column5.innerHTML = countries[4];
const column6 = document.createElement("div");
column6.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
column6.innerHTML = countries[5];
const column7 = document.createElement("div");
column7.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
column7.innerHTML = countries[6];
const column8 = document.createElement("div");
column8.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
column8.innerHTML = countries[7];

const rows1 = document.createElement("div");
rows1.setAttribute("class", "row");

rows.append(column1, column2, column3, column4);
rows1.append(column5, column6, column7, column8);

element.append(rows, rows1);
document.body.append(element);
console.log(element);
