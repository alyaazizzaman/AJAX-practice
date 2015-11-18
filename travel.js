$.ajax({
  url: "https://www.zipcodeapi.com/rest/js-kSkZBF2enqFqFq8gzLNVtl7bysDLlGYGyiG9YJol93MOtV52GTY9e5lNyZyTFwAd/distance.json/80524/55113/mile",
  success: function (msg) {
        $("#success").text(msg);
        console.log(msg);
    }
});
