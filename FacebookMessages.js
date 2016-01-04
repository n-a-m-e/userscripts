// ==UserScript==
// @name        Facebook Messages
// @namespace   n-a-m-e
// @description Increase size of Textarea for messages
// @include     https://m.facebook.com/messages/read/*
// @version     1
// @grant       none
// ==/UserScript==
(function(){
  var css = '#composerInput{height:400px !important;width:300px !important;margin:42px 0 0 -89px !important;}',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
})();
