// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $searchBtn = document.querySelector("#search");
var $loadMoreBtn = document.querySelector("#load-btn");
var $cityInput = document.querySelector("#city")
var $countryInput = document.querySelector("#country")
var $shapeInput = document.querySelector("#shape")
var $stateInput = document.querySelector("#state");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredDataSet to dataSet initially
var filteredDataSet = dataSet;

// renderTable renders the filteredDataSet to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredDataSet.length; i++) {
    // Get get the current dataData object and its fields
    var dataData = filteredDataSet[i];
    var fields = Object.keys(dataData);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the dataData object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = dataData[field];
    }
  }
}


function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();
  
  // Set filteredDataSet to an array of all data whose "state, city, shape, country" matches the filter
  filteredDataSet = dataSet.filter(function(dataData) {
    var searchState = dataData.state.substring(0,filterState.length).toLowerCase();
    var searchCountry = dataData.country.substring(0,filterCountry.length).toLowerCase();
    var searchCity = dataData.city.substring(0,filterCity.length).toLowerCase();
    var searchShape = dataData.shape.substring(0,filterShape.length).toLowerCase();
    if ( searchState == filterState && searchCity == filterCity &&  
      searchCountry == filterCountry && searchShape == filterShape){
        return true;
      }
        return false;
    });
    renderTable();
  }
    


// Render the table for the first time on page load
renderTable();
