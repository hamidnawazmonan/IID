function toggleCountryForm() {
  var countryForm = document.getElementById('country-form');
  var btnCountry = document.querySelector('.btn-country');
  var btnCountryIcon = document.querySelector('.btn-country-icon');

  countryForm.classList.toggle('active');
  btnCountry.classList.toggle('open');
  btnCountryIcon.classList.toggle('open');
}

function cancelForm() {
  var countryForm = document.getElementById('country-form');
  var btnCountry = document.querySelector('.btn-country');
  var btnCountryIcon = document.querySelector('.btn-country-icon');

  countryForm.classList.remove('active');
  btnCountry.classList.remove('open');
  btnCountryIcon.classList.remove('open');
}

function toggleCityForm() {
  var cityForm = document.getElementById('city-form');
  var btnCity = document.querySelector('.btn-city');
  var btnCityIcon = document.querySelector('.btn-city-icon');

  cityForm.classList.toggle('active');
  btnCity.classList.toggle('open');
  btnCityIcon.classList.toggle('open');
}

function cancelCityForm() {
  var cityForm = document.getElementById('city-form');
  var btnCity = document.querySelector('.btn-city');
  var btnCityIcon = document.querySelector('.btn-city-icon');

  cityForm.classList.remove('active');
  btnCity.classList.remove('open');
  btnCityIcon.classList.remove('open');
}
function toggleTopicsForm() {
  var topicsForm = document.getElementById('topics-form');
  var btnTopics = document.querySelector('.btn-topics');
  var btnTopicsIcon = document.querySelector('.btn-topics-icon');

  topicsForm.classList.toggle('active');
  btnTopics.classList.toggle('open');
  btnTopicsIcon.classList.toggle('open');
}

function cancelTopicsForm() {
  var topicsForm = document.getElementById('topics-form');
  var btnTopics = document.querySelector('.btn-topics');
  var btnTopicsIcon = document.querySelector('.btn-topics-icon');

  topicsForm.classList.remove('active');
  btnTopics.classList.remove('open');
  btnTopicsIcon.classList.remove('open');
}

window.addEventListener('resize', function() {
  var topicsForm = document.getElementById('topics-form');
  var btnTopics = document.querySelector('.btn-topics');
  var btnTopicsIcon = document.querySelector('.btn-topics-icon');

  if (window.innerWidth <= 768) {
    topicsForm.classList.remove('active');
    btnTopics.classList.remove('open');
    btnTopicsIcon.classList.remove('open');
  }
  else{
    topicsForm.classList.add('active');
    btnTopics.classList.add('open');
    btnTopicsIcon.classList.add('open');
  }
});

window.addEventListener('resize', function() {
  var countryForm = document.getElementById('country-form');
  var btnCountry = document.querySelector('.btn-country');
  var btnCountryIcon = document.querySelector('.btn-country-icon');

  if (window.innerWidth <= 768) {
    countryForm.classList.remove('active');
    btnCountry.classList.remove('open');
    btnCountryIcon.classList.remove('open');
  }
  else{
    countryForm.classList.add('active');
    btnCountry.classList.add('open');
    btnCountryIcon.classList.add('open');
  }
});

window.addEventListener('resize', function() {
  var cityForm = document.getElementById('city-form');
  var btnCity = document.querySelector('.btn-city');
  var btnCityIcon = document.querySelector('.btn-city-icon');

  if (window.innerWidth <= 768) {
    cityForm.classList.remove('active');
    btnCity.classList.remove('open');
    btnCityIcon.classList.remove('open');
  }
  else{
    cityForm.classList.add('active');
    btnCity.classList.add('open');
    btnCityIcon.classList.add('open');
  }
});

const donut_chart = document.querySelectorAll(".my_chart canvas");
for (dc of donut_chart) {
  new Chart(dc, {
    type: "doughnut",
    data: {
      // labels:["Good", "Bad"],
      datasets: [
        {
          label: "select",
          backgroundColor: ["black", "lightgray"],
          data: [308542, 383257],
        },
      ],
    },
    options: {
      cutout: 12.5,
      borderWidth: 0,
    },
  });
}
