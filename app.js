// https://www.omnicalculator.com/finance/dart-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const DARTrateRadio = document.getElementById('DARTrateRadio');
const totalDARTincidentsRadio = document.getElementById('totalDARTincidentsRadio');
const totalhoursworkedRadio = document.getElementById('totalhoursworkedRadio');

let DARTrate;
let totalDARTincidents = v1;
let totalhoursworked = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

DARTrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Total DART incidents';
  variable2.textContent = 'Total hours worked';
  totalDARTincidents = v1;
  totalhoursworked = v2;
  result.textContent = '';
});

totalDARTincidentsRadio.addEventListener('click', function() {
  variable1.textContent = 'DART rate';
  variable2.textContent = 'Total hours worked';
  DARTrate = v1;
  totalhoursworked = v2;
  result.textContent = '';
});

totalhoursworkedRadio.addEventListener('click', function() {
  variable1.textContent = 'DART rate';
  variable2.textContent = 'Total DART incidents';
  DARTrate = v1;
  totalDARTincidents = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(DARTrateRadio.checked)
    result.textContent = `DART rate = ${computeDARTrate().toFixed(2)}`;

  else if(totalDARTincidentsRadio.checked)
    result.textContent = `Total DART incidents = ${computetotalDARTincidents().toFixed(2)}`;

  else if(totalhoursworkedRadio.checked)
    result.textContent = `Total hours worked = ${computetotalhoursworked().toFixed(2)}`;
})

// calculation

// DART rate = (Total number of DARTs * 200,000) / Total hours worked

function computeDARTrate() {
  return (Number(totalDARTincidents.value) * 200000) / Number(totalhoursworked.value);
}

function computetotalDARTincidents() {
  return (Number(DARTrate.value) * Number(totalhoursworked.value)) / 200000;
}

function computetotalhoursworked() {
  return (Number(totalDARTincidents.value) * 200000) / Number(DARTrate.value);
}