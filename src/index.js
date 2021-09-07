import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $('#giphySearch').click(function () {
    const gif = $('#keyword').val();
    $('#keyword').val("");


    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=${process.env.API_KEY}`;
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showGifs').html(`<img src="${response["data"][0]["images"]["original"]["url"]}">`);
      $('.showGifs').append(`<img src="${response["data"][1]["images"]["original"]["url"]}">`);
      $('.showGifs').append(`<img src="${response["data"][2]["images"]["original"]["url"]}">`);

    }

  });

  $('#giphyRandom').click(function (){
    const gif2 = $('#keyword2').val();
    $('#keyword2').val("");

    let request = new XMLHttpRequest();
    const url2 = `http://api.giphy.com/v1/gifs/random?q=${gif2}&api_key=${process.env.API_KEY}`;
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url2, true);
    request.send();

    function getElements(response) {
      $('.showGifs2').html(`<img src="${response["data"]["images"]["original"]["url"]}">`);
      $('.showGifs2').html(`<img src="${response["data"]["images"]["original"]["url"]}">`);
      $('.showGifs2').html(`<img src="${response["data"]["images"]["original"]["url"]}">`);
    }

    
  });
});