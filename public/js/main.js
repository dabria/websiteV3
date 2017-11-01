$(document).ready(function() {
  $('.hamburger').click(function() {
    $('#hamburger-items').toggle();
  });

  /* Mess of transitions, can probably replace these */

  $('.websites').hover(
    function() {
      $('.heading').removeClass('heading-unhover');
      $('.heading').addClass('heading-hover-websites');
    },
    function() {
      $('.heading').removeClass('heading-hover-websites');
      $('.heading').addClass('heading-unhover');
    });

  $('.art').hover(
    function() {
      $('.heading').removeClass('heading-unhover');
      $('.heading').addClass('heading-hover-art');
    },
    function() {
      $('.heading').removeClass('heading-hover-art');
      $('.heading').addClass('heading-unhover');
    });

  $('.about').hover(
    function() {
      $('.heading').removeClass('heading-unhover');
      $('.heading').addClass('heading-hover-about');
    },
    function() {
      $('.heading').removeClass('heading-hover-about');
      $('.heading').addClass('heading-unhover');
    });

  $('.blog').hover(
    function() {
      $('.heading').removeClass('heading-unhover');
      $('.heading').addClass('heading-hover-blog');
    },
    function() {
      $('.heading').removeClass('heading-hover-blog');
      $('.heading').addClass('heading-unhover');
    });

  $('#logo').hover(
    function() {
      $('.heading').removeClass('heading-unhover');
      $('.heading').addClass('heading-hover-h1');
    },
    function() {
      $('.heading').removeClass('heading-hover-h1');
      $('.heading').addClass('heading-unhover');
    });
});
