let button = document.getElementById('button');
let demo = document.getElementById('demo');
let reset = document.getElementById('reset');
let hidden = document.getElementById('hidden')

reset.style.display = 'none';
hidden.style.display = 'none';


function myFunction() {
  let first = document.getElementById('firstName').value;
  let last = document.getElementById('lastName').value;
  let maiden = document.getElementById('maidenName').value;
  let city = document.getElementById('cityName').value;

  if (first==='' || last==='' || maiden==='' || city==='') {
    demo.innerHTML = '';
    window.alert('Please ensure all fields are completed and re-click to create!');
  } else {

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
    let starWarsName = `Your Star Wars name is: <br>'${firstSyl}${lastSyl}  ${maidenSyl}${citySyl}'`;
    
    demo.innerHTML = starWarsName;
    button.style.display ='none';
    reset.style.display = '';
  };
}

button.addEventListener('click', myFunction);
