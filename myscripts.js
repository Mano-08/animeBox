let editEle = document.getElementById('editor');
let messageEle = document.getElementById('success_message');

function new_fun() {
  editEle.value = '';
}

function reset_val() {
  setTimeout(new_fun,2)
  messageEle.removeAttribute('style');
  setTimeout(function() {
    messageEle.style.display = 'none';
  },2500)
}

