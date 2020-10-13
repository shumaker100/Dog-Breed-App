
function getFromApi(searchTerm, successCallback, errorCallback) {
  let URL = `https://dog.ceo/api/breed/${searchTerm}/images/random`;

  let request = $.getJSON(URL);

  request.fail(errorCallback);

  request.done(successCallback);


  console.log(URL);
}


function displayData(data) {
  let results;
  console.log(data);
  if (data.status == "success"){
    results = `
    <img src="${data.message}">
  `;}
  else {
    alert("Try another breed!");
  }
  $('.js-search-results').html(results).prop('hidden',false);
}

function showError(error)
{
  alert(error.responseJSON.message)
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let queryTarget = $(event.currentTarget).find('.js-query');
    let query = queryTarget.val();
 
    queryTarget.val("");
    getFromApi(query, displayData, showError);
  });
}

$(watchSubmit);