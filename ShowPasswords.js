// ==UserScript==
// @name        Show Passwords
// @namespace   n-a-m-e
// @description Show passwords while typing
// @version     1
// @grant       none
// @include     *
// ==/UserScript==
(function(){
  function getCaretPosition(ctrl){
    var CaretPos = 0;	// IE Support
    if(document.selection){
      ctrl.focus ();
      var Sel = document.selection.createRange ();
      Sel.moveStart ('character', -ctrl.value.length);
      CaretPos = Sel.text.length;
    }else if(ctrl.selectionStart || ctrl.selectionStart == '0'){// Firefox support
      CaretPos = ctrl.selectionStart;
    }
    return (CaretPos);
  }
  function setCaretPosition(ctrl, pos){
    if(ctrl.setSelectionRange){
      ctrl.focus();
      ctrl.setSelectionRange(pos,pos);
    }else if(ctrl.createTextRange){
      var range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }
  function showPassword (e) {
    if(e.target.getAttribute("type")=="password"){
      var position = getCaretPosition(e.target);
      e.target.setAttribute("type", "text");
      setCaretPosition(e.target, position);
      e.target.addEventListener('blur', hidePassword, false);
    }
  }
  function hidePassword (e) {
    e.target.setAttribute("type", "password");
    e.target.removeEventListener('blur', hidePassword, false);
  }
  document.getElementsByTagName('body')[0].addEventListener('focus', showPassword, true);
})();
