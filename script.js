let button = document.getElementById("button");
let demo = document.getElementById("demo");

function myFunction() {

    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    var maiden = document.getElementById("maidenName").value;
    var city = document.getElementById("cityName").value;

    let firstArr = first.split('');
    console.log(firstArr);
    let lastArr = last.split('');
    console.log(lastArr);
    let maidenArr = maiden.split('');
    console.log(maidenArr);
    let cityArr = city.split('');
    console.log(cityArr);

    let firstSyl = `${firstArr[0]}${firstArr[1]}${firstArr[2]}`;
    let lastSyl = `${lastArr[0]}${lastArr[1]}`;
    let maidenSyl = `${maidenArr[0]}${maidenArr[1]}`;
    let citySyl = `${cityArr[0]}${cityArr[1]}${cityArr[2]}`;
    let starWarsName = `${firstSyl}${lastSyl}  ${maidenSyl}${citySyl}`;
    
    demo.innerHTML = starWarsName;
  }

button.addEventListener("click", myFunction);

