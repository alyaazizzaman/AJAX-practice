// get input from user
  // select the dom input
  var cityInput = document.querySelector('#cityInput');
  var stateInput = document.querySelector('#stateInput')
  var button = document.querySelector('button');
  //read input value after specific event
  button.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(cityInput.value);
    console.log(stateInput.value);

  var locationNode = document.querySelector('#location');
  locationNode.innerHTML = cityInput.value + ", " + stateInput.value;

  var cityZipsReq = new XMLHttpRequest();
  cityZipsReq.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var data = JSON.parse(this.responseText).zip_codes[0];
      console.log(cityZip);

  cityZipsReq.open('GET', 'https://www.zipcodeapi.com/rest/js-kSkZBF2enqFqFq8gzLNVtl7bysDLlGYGyiG9YJol93MOtV52GTY9e5lNyZyTFwAd/city-zips.json/'+cityInput.value+'/'+stateInput.value);
  cityZipsReq.send();

  // then use distance method for distance
  var distanceReq = new XMLHttpRequest();
  distanceReq.onreadystatechange = function (){
    if(this.readyState === 4 && this. status === 200) {
      var distance = JSON.parse(this.repsonseText).distance;
      var distnaceNode = document.querySelector('#distance');
      //use disatnce from api to update page
      disatnceNode.innerHTML = distance;
    }
  }

  //
  weatherReq.open('GET',

});
