const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search");
const main = document.querySelector(".main");

async function fetchCountryApi() {
  const API_URL = `https://restcountries.com/v3.1/name/${searchInput.value}`;
  const spinner = document.querySelector(".lds-default");
  spinner.style.display = `inline-block`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    renderCountry(data);
    console.log(data);
  } catch (error) {
    main.innerHTML = `<div class="error">THERE ARE NO COUNTRIES NAMED ${searchInput.value}!!!!!!</div>`;
  } finally {
    spinner.style.display = "none";
  }
}

const renderCountry = (data) => {
  main.innerHTML = `<div class="country-cards"></div>`;
  const countryCards = document.querySelector(".country-cards");
  countryCards.innerHTML = data
    .map(
      (data) => `
     <div class="country-list">
     <img src="${data.flags.png}" alt="" height = "90px">
   <h2>Country name: ${data.name.common}</h2>
   <h2>Country population: ${data.population}</h2>
   <h2>Country capital: ${data.capital}</h2>
   <h2>Country area: ${data.area}</h2>
   <h2>Spoken languages: ${Object.values(data.languages)}</h2>
     </div>
  `
    )
    .join("");
};

searchBtn.addEventListener(`click`, () => {
  fetchCountryApi();
});
