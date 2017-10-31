
function main() {
  // all code goes in here
//  document.getElementById('google').innerHTML = "Google"; // changing the title of website 2 to Google (selecting things by id)

  $('#google').html('Google'); // jquery way of writing

  //let links = document.getElementsByClassName('my-link'); // storing into an array to manipulate later

  let links = $('.my-link');

  links[0].innerHTML = "Twitter"; // changing website 3 to Twitter
  links[0].href = "http://www.twitter.com"; // changing website 3's link to twitter.com

  links[1].innerHTML = "LinkedIn";
  links[1].href = "http://linkedin.com";
  links[1].style.color = "red"; // changing style of hyperlink to the color red

  // button click event
  $('#heading-button').click (function () {
      $('h1').css('color', 'red');
      $('.my-link').hide();
  });

  // toggle button click

  $('#toggle-button').click(function () {
    $('.my-link').toggle();

  });

// hide and show main text
$('#main-text').hide();
$('#main-text').fadeIn(1000);

// hide projects
$('.projects').hide();


// ****show projects by clicking****
$('.project-button').click(function () {
  $(this).next().slideToggle(500);

});
}

$(document).ready(main);
