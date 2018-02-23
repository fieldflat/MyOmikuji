(function(){
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function(){
    var n = Math.floor(Math.random() * 3);
    switch(n){
      case 0:
        this.textContent = '全然ダメ';
        break;
      case 1:
        this.textContent = 'まあまあ';
        break;
      case 2:
        this.textContent = 'すげえじゃん';
    }
    //this.textContent = n;
  });
  btn.addEventListener('mousedown', function(){
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function(){
    this.className = '';
  });
})();
