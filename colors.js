var links={
    setColor:function(color){
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i < alist.length){
    //     alist[i].style.color = color;
    //     i++;
    //   }
    $('a').css('color',color);
    }
  }
 
  var Body={
    setBcolor:function(color){
    //   document.querySelector('body').style.color = color;
    $('body').css('color',color);
    }
    ,
    setBackgroundColor:function (color){
    //   document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
    }
  }
  function dayornight(self){
    var tar = document.querySelector('body');
    if(tar.dataset.mode === 'Night'){
      Body.setBackgroundColor('#fff9c4');
      Body.setBcolor('#212121');
      tar.dataset.mode ='Day';
      self.value = 'Night';

     links.setColor('#9feb65');
    }else{
      Body.setBackgroundColor('#263238');
      Body.setBcolor('#e3f2fd');
      tar.dataset.mode ='Night';
      self.value='Day';

     links.setColor('#09b6d9');
      }
    }