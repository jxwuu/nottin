
//fading 
function fade(element) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.3;
  }, 30);
}

// unfade 
function unfade(element) {
  var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.3;
  }, 30);
}

//initial loader 
document.addEventListener('DOMContentLoaded', function() {
  fade(document.getElementById('note'));
  chrome.storage.sync.get(['tt','tt0','tt1','tt2','tt3','tt4','tt5','tt6','tt7','tt8','tt9'], function(result){
    if(result.tt === null || !(result.tt)){
      document.getElementById('title').innerHTML = "untitled";
    } else {
      document.getElementById('title').innerHTML = result.tt;
    }
    if(result.tt0 === null || !(result.tt0)){
      document.getElementById('title0').innerHTML = "untitled";
    } else {
      document.getElementById('title0').innerHTML = result.tt0;
    }
    if( result.tt1 === null || !(result.tt1)){
      document.getElementById('title1').innerHTML = "untitled";
    } else {
      document.getElementById('title1').innerHTML = result.tt1;
    }
    if(result.tt2 === null || !(result.tt2)){
      document.getElementById('title2').innerHTML = "untitled";
    } else {
      document.getElementById('title2').innerHTML = result.tt2;
    }
    if( result.tt3 === null || !(result.tt3)){
      document.getElementById('title3').innerHTML = "untitled";
    } else {
      document.getElementById('title3').innerHTML = result.tt3;
    }
    if(result.tt4=== null || !(result.tt4)){
      document.getElementById('title4').innerHTML = "untitled";
    } else {
      document.getElementById('title4').innerHTML = result.tt4;
    }
    if(result.tt5 === null || !(result.tt5)){
      document.getElementById('title5').innerHTML = "untitled";
    } else {
      document.getElementById('title5').innerHTML = result.tt5;
    }
    if( result.tt6 === null || !(result.tt6)){
      document.getElementById('title6').innerHTML = "untitled";
    } else {
      document.getElementById('title6').innerHTML = result.tt6;
    }
    if(result.tt7 === null || !(result.tt7)){
      document.getElementById('title7').innerHTML = "untitled";
    } else {
      document.getElementById('title7').innerHTML = result.tt7;
    }
});
unfade(document.getElementById('notebook'));
}); 


// from notebook to specifies note (first note)
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('title');
  // onClick's logic below:
  link.addEventListener('click', function() {
      chrome.storage.sync.get(['tt', 'nn'], function(result){
        if((!result.tt || result.tt === null) && result.nn){
          document.getElementById('titleinput').value = 'untitled'; 
          document.getElementById('noteinput').value = result.nn; 
        } else if( result.tt && !result.nn){
          document.getElementById('titleinput').value = result.tt;
          document.getElementById('noteinput').value = '';
        } else {
        document.getElementById('titleinput').value = result.tt; 
        document.getElementById('noteinput').value =  result.nn; 
        }
      }); 
      chrome.storage.sync.set({'aa' : 0}); 
      fade(document.getElementById('notebook'));
      unfade(document.getElementById('note'));
  });
});

// (second note)
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('title0');
  // onClick's logic below:
  link.addEventListener('click', function() {
      chrome.storage.sync.get(['tt0', 'nn0'], function(result){
        if((!result.tt0 || result.tt0 === null) && result.nn0){
          document.getElementById('titleinput').value = 'untitled'; 
          document.getElementById('noteinput').value = result.nn0; 
        } else if( result.tt0 && !result.nn0){
          document.getElementById('titleinput').value = result.tt0;
          document.getElementById('noteinput').value = '';
        } else {
        document.getElementById('titleinput').value = result.tt0; 
        document.getElementById('noteinput').value = result.nn0; 
        }
      }); 
      chrome.storage.sync.set({'aa' : 1}); 
      fade(document.getElementById('notebook'));
      unfade(document.getElementById('note'));
  });
});

//(third note)
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('title1');
  // onClick's logic below:
  link.addEventListener('click', function() {
      chrome.storage.sync.get(['tt1', 'nn1'], function(result){
        if((!result.tt1 || result.tt1 === null) && result.nn1){
          document.getElementById('titleinput').value = 'untitled'; 
          document.getElementById('noteinput').value = result.nn1; 
        } else if( result.tt1 && !result.nn1){
          document.getElementById('titleinput').value = result.tt1;
          document.getElementById('noteinput').value = '';
        } else {
        document.getElementById('titleinput').value = result.tt1; 
        document.getElementById('noteinput').value = result.nn1; 
        }
      }); 
      chrome.storage.sync.set({'aa' : 2}); 
      fade(document.getElementById('notebook'));
      unfade(document.getElementById('note'));
  });
});

//(fourth note)
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('title2');
  // onClick's logic below:
  link.addEventListener('click', function() {
      chrome.storage.sync.get(['tt2', 'nn2'], function(result){
        if((!result.tt2 || result.tt2 === null) && result.nn2){
          document.getElementById('titleinput').value = 'untitled'; 
          document.getElementById('noteinput').value = result.nn2; 
        } else if( result.tt2 && !result.nn2){
          document.getElementById('titleinput').value = result.tt2;
          document.getElementById('noteinput').value = '';
        } else {
        document.getElementById('titleinput').value = result.tt2; 
         
        document.getElementById('noteinput').value = result.nn2; 
        }
      }); 
      chrome.storage.sync.set({'aa' : 3}); 
      fade(document.getElementById('notebook'));
      unfade(document.getElementById('note'));
  });
});

//(fifth note)
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('title3');
  // onClick's logic below:
  link.addEventListener('click', function() {
      chrome.storage.sync.get(['tt3', 'nn3'], function(result){
        if((!result.tt3 || result.tt3 === null) && result.nn3){
          document.getElementById('titleinput').value = 'untitled'; 
          document.getElementById('noteinput').value = result.nn3; 
        } else if( result.tt3 && !result.nn3){
          document.getElementById('titleinput').value = result.tt3;
          document.getElementById('noteinput').value = '';
        } else {
        document.getElementById('titleinput').value = result.tt3; 
        document.getElementById('noteinput').value = result.nn3; 
        }
      }); 
      chrome.storage.sync.set({'aa' : 4}); 
      fade(document.getElementById('notebook'));
      unfade(document.getElementById('note'));
  });
});

//(sixth note)
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('title4');
  // onClick's logic below:
  link.addEventListener('click', function() {
      chrome.storage.sync.get(['tt4', 'nn4'], function(result){
        if((!result.tt4 || result.tt4 === null) && result.nn4){
          document.getElementById('titleinput').value = 'untitled'; 
          document.getElementById('noteinput').value = result.nn4; 
        } else if( result.tt4 && !result.nn4){
          document.getElementById('titleinput').value = result.tt4;
          document.getElementById('noteinput').value = '';
        } else {
        document.getElementById('titleinput').value = result.tt4; 
        document.getElementById('noteinput').value = result.nn4; 
        }
      }); 
      chrome.storage.sync.set({'aa' : 5}); 
      fade(document.getElementById('notebook'));
      unfade(document.getElementById('note'));
  });
});

//(seventh note)
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('title5');
  // onClick's logic below:
  link.addEventListener('click', function() {
      chrome.storage.sync.get(['tt5', 'nn5'], function(result){
        if((!result.tt5 || result.tt5 === null) && result.nn5){
          document.getElementById('titleinput').value = 'untitled'; 
          document.getElementById('noteinput').value = result.nn5; 
        } else if( result.tt5 && !result.nn5){
          document.getElementById('titleinput').value = result.tt5;
          document.getElementById('noteinput').value = '';
        } else {
        document.getElementById('titleinput').value = result.tt5; 
        document.getElementById('noteinput').value = result.nn5; 
        }
      }); 
      chrome.storage.sync.set({'aa' : 6}); 
      fade(document.getElementById('notebook'));
      unfade(document.getElementById('note'));
  });
});

//(eighth note)
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('title6');
  // onClick's logic below:
  link.addEventListener('click', function() {
      chrome.storage.sync.get(['tt6', 'nn6'], function(result){
        if((!result.tt6 || result.tt6 === null) && result.nn6){
          document.getElementById('titleinput').value = 'untitled'; 
          document.getElementById('noteinput').value = result.nn6; 
        } else if( result.tt6 && !result.nn6){
          document.getElementById('titleinput').value = result.tt6;
          document.getElementById('noteinput').value = '';
        } else {
        document.getElementById('titleinput').value = result.tt6; 
        document.getElementById('noteinput').value = result.nn6; 
        }
      }); 
      chrome.storage.sync.set({'aa' : 7}); 
      fade(document.getElementById('notebook'));
      unfade(document.getElementById('note'));
  });
});

//(ninth note)
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('title7');
  // onClick's logic below:
  link.addEventListener('click', function() {
      chrome.storage.sync.get(['tt7', 'nn7'], function(result){
        if((!result.tt7 || result.tt7 === null) && result.nn7){
          document.getElementById('titleinput').value = 'untitled'; 
          document.getElementById('noteinput').value = result.nn7; 
        } else if( result.tt7 && !result.nn7){
          document.getElementById('titleinput').value = result.tt7;
          document.getElementById('noteinput').value = '';
        } else {
        document.getElementById('titleinput').value = result.tt7; 
        document.getElementById('noteinput').value = result.nn7; 
        }
      }); 
      chrome.storage.sync.set({'aa' : 8}); 
      fade(document.getElementById('notebook'));
      unfade(document.getElementById('note'));
  });
});


function record1(){
  var titleinput = document.getElementById('titleinput'); 
  var textinput = document.getElementById('noteinput'); 
  chrome.storage.sync.set({
    'tt' : titleinput.value,
    'nn' : textinput.value
  });
  chrome.storage.sync.get(['tt0','tt1','tt2','tt3','tt4','tt5','tt6','tt7','tt8','tt9'], function(result){
    var titleinput = document.getElementById('titleinput'); 
    var textinput = document.getElementById('noteinput'); 
    document.getElementById('title').innerHTML = titleinput.value; 
    // document.getElementById('text').innerHTML = textinput.value; 
    if(result.tt0 === null || !(result.tt0)){
      document.getElementById('title0').innerHTML = "untitled";
    } else {
      document.getElementById('title0').innerHTML = result.tt0;
    }
    if( result.tt1 === null || !(result.tt1)){
      document.getElementById('title1').innerHTML = "untitled";
    } else {
      document.getElementById('title1').innerHTML = result.tt1;
    }
    if(result.tt2 === null || !(result.tt2)){
      document.getElementById('title2').innerHTML = "untitled";
    } else {
      document.getElementById('title2').innerHTML = result.tt2;
    }
    if( result.tt3 === null || !(result.tt3)){
      document.getElementById('title3').innerHTML = "untitled";
    } else {
      document.getElementById('title3').innerHTML = result.tt3;
    }
    if(result.tt4=== null || !(result.tt4)){
      document.getElementById('title4').innerHTML = "untitled";
    } else {
      document.getElementById('title4').innerHTML = result.tt4;
    }
    if(result.tt5 === null || !(result.tt5)){
      document.getElementById('title5').innerHTML = "untitled";
    } else {
      document.getElementById('title5').innerHTML = result.tt5;
    }
    if( result.tt6 === null || !(result.tt6)){
      document.getElementById('title6').innerHTML = "untitled";
    } else {
      document.getElementById('title6').innerHTML = result.tt6;
    }
    if(result.tt7 === null || !(result.tt7)){
      document.getElementById('title7').innerHTML = "untitled";
    } else {
      document.getElementById('title7').innerHTML = result.tt7;
    }
  
  });
}

function record2(){
  var titleinput = document.getElementById('titleinput'); 
  var textinput = document.getElementById('noteinput'); 
  chrome.storage.sync.set({
    'tt0' : titleinput.value,
    'nn0' : textinput.value, 
  });
  chrome.storage.sync.get(['tt','tt1','tt2', 'tt3', 'tt4', 'tt5', 'tt6', 'tt7', 'tt8', 'tt9'], function(result){
    var titleinput = document.getElementById('titleinput'); 
    var textinput = document.getElementById('noteinput'); 
    document.getElementById('title0').innerHTML = titleinput.value; 
    // document.getElementById('text').innerHTML = textinput.value; 
    if(result.tt === null || !(result.tt)){
      document.getElementById('title').innerHTML = "untitled";
    } else {
      document.getElementById('title').innerHTML = result.tt;
    }
    if(result.tt1 === null || !(result.tt1)){
      document.getElementById('title1').innerHTML = "untitled";
    } else {
      document.getElementById('title1').innerHTML = result.tt1;
    }
    if(result.tt2 === null || !(result.tt2)){
      document.getElementById('title2').innerHTML = "untitled";
    } else {
      document.getElementById('title2').innerHTML = result.tt2;
    }
    
    if( result.tt3 === null || !(result.tt3)){
      document.getElementById('title3').innerHTML = "untitled";
    } else {
      document.getElementById('title3').innerHTML = result.tt3;
    }
    if(result.tt4=== null || !(result.tt4)){
      document.getElementById('title4').innerHTML = "untitled";
    } else {
      document.getElementById('title4').innerHTML = result.tt4;
    }
    if(result.tt5 === null || !(result.tt5)){
      document.getElementById('title5').innerHTML = "untitled";
    } else {
      document.getElementById('title5').innerHTML = result.tt5;
    }
    if( result.tt6 === null || !(result.tt6)){
      document.getElementById('title6').innerHTML = "untitled";
    } else {
      document.getElementById('title6').innerHTML = result.tt6;
    }
    if(result.tt7 === null || !(result.tt7)){
      document.getElementById('title7').innerHTML = "untitled";
    } else {
      document.getElementById('title7').innerHTML = result.tt7;
    }
  
  });
}

function record3(){
  var titleinput = document.getElementById('titleinput'); 
  var textinput = document.getElementById('noteinput'); 
  chrome.storage.sync.set({
    'tt1' : titleinput.value,
    'nn1' : textinput.value
  });
  chrome.storage.sync.get(['tt0','tt2','tt','tt3', 'tt4', 'tt5', 'tt6', 'tt7', 'tt8', 'tt9'], function(result){
    var titleinput = document.getElementById('titleinput'); 
    var textinput = document.getElementById('noteinput'); 
    document.getElementById('title1').innerHTML = titleinput.value; 
    // document.getElementById('text').innerHTML = textinput.value; 
    if(result.tt === null || !(result.tt)){
      document.getElementById('title').innerHTML = "untitled";
    } else {
      document.getElementById('title').innerHTML = result.tt;
    }
    if(result.tt0 === null || !(result.tt0)){
      document.getElementById('title0').innerHTML = "untitled";
    } else {
      document.getElementById('title0').innerHTML = result.tt0;
    }
    if(result.tt2 === null || !(result.tt2)){
      document.getElementById('title2').innerHTML = "untitled";
    } else {
      document.getElementById('title2').innerHTML = result.tt2;
    }
    
    if( result.tt3 === null || !(result.tt3)){
      document.getElementById('title3').innerHTML = "untitled";
    } else {
      document.getElementById('title3').innerHTML = result.tt3;
    }
    if(result.tt4=== null || !(result.tt4)){
      document.getElementById('title4').innerHTML = "untitled";
    } else {
      document.getElementById('title4').innerHTML = result.tt4;
    }
    if(result.tt5 === null || !(result.tt5)){
      document.getElementById('title5').innerHTML = "untitled";
    } else {
      document.getElementById('title5').innerHTML = result.tt5;
    }
    if( result.tt6 === null || !(result.tt6)){
      document.getElementById('title6').innerHTML = "untitled";
    } else {
      document.getElementById('title6').innerHTML = result.tt6;
    }
    if(result.tt7 === null || !(result.tt7)){
      document.getElementById('title7').innerHTML = "untitled";
    } else {
      document.getElementById('title7').innerHTML = result.tt7;
    }
  }); 
}

function record4(){
  var titleinput = document.getElementById('titleinput'); 
  var textinput = document.getElementById('noteinput'); 
  chrome.storage.sync.set({
    'tt2' : titleinput.value,
    'nn2' : textinput.value
  });
  chrome.storage.sync.get(['tt0','tt1','tt', 'tt3', 'tt4', 'tt5', 'tt6', 'tt7', 'tt8', 'tt9'], function(result){
    var titleinput = document.getElementById('titleinput'); 
    var textinput = document.getElementById('noteinput'); 
    document.getElementById('title2').innerHTML = titleinput.value; 
    // document.getElementById('text').innerHTML = textinput.value; 
    if(result.tt === null || !(result.tt)){
      document.getElementById('title').innerHTML = "untitled";
    } else {
      document.getElementById('title').innerHTML = result.tt;
    }
    if(result.tt1 === null || !(result.tt1)){
      document.getElementById('title1').innerHTML = "untitled";
    } else {
      document.getElementById('title1').innerHTML = result.tt1;
    }
    if(result.tt0 === null || !(result.tt0)){
      document.getElementById('title0').innerHTML = "untitled";
    } else {
      document.getElementById('title0').innerHTML = result.tt0;
    }
    
    if( result.tt3 === null || !(result.tt3)){
      document.getElementById('title3').innerHTML = "untitled";
    } else {
      document.getElementById('title3').innerHTML = result.tt3;
    }
    if(result.tt4=== null || !(result.tt4)){
      document.getElementById('title4').innerHTML = "untitled";
    } else {
      document.getElementById('title4').innerHTML = result.tt4;
    }
    if(result.tt5 === null || !(result.tt5)){
      document.getElementById('title5').innerHTML = "untitled";
    } else {
      document.getElementById('title5').innerHTML = result.tt5;
    }
    if( result.tt6 === null || !(result.tt6)){
      document.getElementById('title6').innerHTML = "untitled";
    } else {
      document.getElementById('title6').innerHTML = result.tt6;
    }
    if(result.tt7 === null || !(result.tt7)){
      document.getElementById('title7').innerHTML = "untitled";
    } else {
      document.getElementById('title7').innerHTML = result.tt7;
    }
  }); 
}

function record5(){
  var titleinput = document.getElementById('titleinput'); 
  var textinput = document.getElementById('noteinput'); 
  chrome.storage.sync.set({
    'tt3' : titleinput.value,
    'nn3' : textinput.value
  });
  chrome.storage.sync.get(['tt0','tt1','tt', 'tt2', 'tt4', 'tt5', 'tt6', 'tt7', 'tt8', 'tt9'], function(result){
    var titleinput = document.getElementById('titleinput'); 
    var textinput = document.getElementById('noteinput'); 
    document.getElementById('title3').innerHTML = titleinput.value; 
    // document.getElementById('text').innerHTML = textinput.value; 
    if(result.tt === null || !(result.tt)){
      document.getElementById('title').innerHTML = "untitled";
    } else {
      document.getElementById('title').innerHTML = result.tt;
    }
    if(result.tt1 === null || !(result.tt1)){
      document.getElementById('title1').innerHTML = "untitled";
    } else {
      document.getElementById('title1').innerHTML = result.tt1;
    }
    if(result.tt0 === null || !(result.tt0)){
      document.getElementById('title0').innerHTML = "untitled";
    } else {
      document.getElementById('title0').innerHTML = result.tt0;
    }
    
    if( result.tt2 === null || !(result.tt2)){
      document.getElementById('title2').innerHTML = "untitled";
    } else {
      document.getElementById('title2').innerHTML = result.tt2;
    }
    if(result.tt4=== null || !(result.tt4)){
      document.getElementById('title4').innerHTML = "untitled";
    } else {
      document.getElementById('title4').innerHTML = result.tt4;
    }
    if(result.tt5 === null || !(result.tt5)){
      document.getElementById('title5').innerHTML = "untitled";
    } else {
      document.getElementById('title5').innerHTML = result.tt5;
    }
    if( result.tt6 === null || !(result.tt6)){
      document.getElementById('title6').innerHTML = "untitled";
    } else {
      document.getElementById('title6').innerHTML = result.tt6;
    }
    if(result.tt7 === null || !(result.tt7)){
      document.getElementById('title7').innerHTML = "untitled";
    } else {
      document.getElementById('title7').innerHTML = result.tt7;
    }
  }); 
}

function record6(){
  var titleinput = document.getElementById('titleinput'); 
  var textinput = document.getElementById('noteinput'); 
  chrome.storage.sync.set({
    'tt4' : titleinput.value,
    'nn4' : textinput.value
  });
  chrome.storage.sync.get(['tt0','tt1','tt', 'tt2', 'tt3', 'tt5', 'tt6', 'tt7', 'tt8', 'tt9'], function(result){
    var titleinput = document.getElementById('titleinput'); 
    var textinput = document.getElementById('noteinput'); 
    document.getElementById('title4').innerHTML = titleinput.value; 
    // document.getElementById('text').innerHTML = textinput.value; 
    if(result.tt === null || !(result.tt)){
      document.getElementById('title').innerHTML = "untitled";
    } else {
      document.getElementById('title').innerHTML = result.tt;
    }
    if(result.tt1 === null || !(result.tt1)){
      document.getElementById('title1').innerHTML = "untitled";
    } else {
      document.getElementById('title1').innerHTML = result.tt1;
    }
    if(result.tt0 === null || !(result.tt0)){
      document.getElementById('title0').innerHTML = "untitled";
    } else {
      document.getElementById('title0').innerHTML = result.tt0;
    }
    
    if( result.tt2 === null || !(result.tt2)){
      document.getElementById('title2').innerHTML = "untitled";
    } else {
      document.getElementById('title2').innerHTML = result.tt2;
    }
    if(result.tt3=== null || !(result.tt3)){
      document.getElementById('title3').innerHTML = "untitled";
    } else {
      document.getElementById('title3').innerHTML = result.tt3;
    }
    if(result.tt5 === null || !(result.tt5)){
      document.getElementById('title5').innerHTML = "untitled";
    } else {
      document.getElementById('title5').innerHTML = result.tt5;
    }
    if( result.tt6 === null || !(result.tt6)){
      document.getElementById('title6').innerHTML = "untitled";
    } else {
      document.getElementById('title6').innerHTML = result.tt6;
    }
    if(result.tt7 === null || !(result.tt7)){
      document.getElementById('title7').innerHTML = "untitled";
    } else {
      document.getElementById('title7').innerHTML = result.tt7;
    }
  }); 
}

function record7(){
  var titleinput = document.getElementById('titleinput'); 
  var textinput = document.getElementById('noteinput'); 
  chrome.storage.sync.set({
    'tt5' : titleinput.value,
    'nn5' : textinput.value
  });
  chrome.storage.sync.get(['tt0','tt1','tt', 'tt2', 'tt3', 'tt4', 'tt6', 'tt7', 'tt8', 'tt9'], function(result){
    var titleinput = document.getElementById('titleinput'); 
    var textinput = document.getElementById('noteinput'); 
    document.getElementById('title5').innerHTML = titleinput.value; 
    // document.getElementById('text').innerHTML = textinput.value; 
    if(result.tt === null || !(result.tt)){
      document.getElementById('title').innerHTML = "untitled";
    } else {
      document.getElementById('title').innerHTML = result.tt;
    }
    if(result.tt1 === null || !(result.tt1)){
      document.getElementById('title1').innerHTML = "untitled";
    } else {
      document.getElementById('title1').innerHTML = result.tt1;
    }
    if(result.tt0 === null || !(result.tt0)){
      document.getElementById('title0').innerHTML = "untitled";
    } else {
      document.getElementById('title0').innerHTML = result.tt0;
    }
    
    if( result.tt2 === null || !(result.tt2)){
      document.getElementById('title2').innerHTML = "untitled";
    } else {
      document.getElementById('title2').innerHTML = result.tt2;
    }
    if(result.tt3=== null || !(result.tt3)){
      document.getElementById('title3').innerHTML = "untitled";
    } else {
      document.getElementById('title3').innerHTML = result.tt3;
    }
    if(result.tt4 === null || !(result.tt4)){
      document.getElementById('title4').innerHTML = "untitled";
    } else {
      document.getElementById('title4').innerHTML = result.tt4;
    }
    if( result.tt6 === null || !(result.tt6)){
      document.getElementById('title6').innerHTML = "untitled";
    } else {
      document.getElementById('title6').innerHTML = result.tt6;
    }
    if(result.tt7 === null || !(result.tt7)){
      document.getElementById('title7').innerHTML = "untitled";
    } else {
      document.getElementById('title7').innerHTML = result.tt7;
    }
  }); 
}


function record8(){
  var titleinput = document.getElementById('titleinput'); 
  var textinput = document.getElementById('noteinput'); 
  chrome.storage.sync.set({
    'tt6' : titleinput.value,
    'nn6' : textinput.value
  });
  chrome.storage.sync.get(['tt0','tt1','tt', 'tt2', 'tt3', 'tt4', 'tt5', 'tt7', 'tt8', 'tt9'], function(result){
    var titleinput = document.getElementById('titleinput'); 
    var textinput = document.getElementById('noteinput'); 
    document.getElementById('title6').innerHTML = titleinput.value; 
    // document.getElementById('text').innerHTML = textinput.value; 
    if(result.tt === null || !(result.tt)){
      document.getElementById('title').innerHTML = "untitled";
    } else {
      document.getElementById('title').innerHTML = result.tt;
    }
    if(result.tt1 === null || !(result.tt1)){
      document.getElementById('title1').innerHTML = "untitled";
    } else {
      document.getElementById('title1').innerHTML = result.tt1;
    }
    if(result.tt0 === null || !(result.tt0)){
      document.getElementById('title0').innerHTML = "untitled";
    } else {
      document.getElementById('title0').innerHTML = result.tt0;
    }
    
    if( result.tt2 === null || !(result.tt2)){
      document.getElementById('title2').innerHTML = "untitled";
    } else {
      document.getElementById('title2').innerHTML = result.tt2;
    }
    if(result.tt3=== null || !(result.tt3)){
      document.getElementById('title3').innerHTML = "untitled";
    } else {
      document.getElementById('title3').innerHTML = result.tt3;
    }
    if(result.tt4 === null || !(result.tt4)){
      document.getElementById('title4').innerHTML = "untitled";
    } else {
      document.getElementById('title4').innerHTML = result.tt4;
    }
    if( result.tt5 === null || !(result.tt5)){
      document.getElementById('title5').innerHTML = "untitled";
    } else {
      document.getElementById('title5').innerHTML = result.tt5;
    }
    if(result.tt7 === null || !(result.tt7)){
      document.getElementById('title7').innerHTML = "untitled";
    } else {
      document.getElementById('title7').innerHTML = result.tt7;
    }
  
  }); 
}


function record9(){
  var titleinput = document.getElementById('titleinput'); 
  var textinput = document.getElementById('noteinput'); 
  chrome.storage.sync.set({
    'tt7' : titleinput.value,
    'nn7' : textinput.value
  });
  chrome.storage.sync.get(['tt0','tt1','tt', 'tt2', 'tt3', 'tt4', 'tt5', 'tt6'], function(result){
    var titleinput = document.getElementById('titleinput'); 
    var textinput = document.getElementById('noteinput'); 
    document.getElementById('title7').innerHTML = titleinput.value; 
    // document.getElementById('text').innerHTML = textinput.value; 6
    if(result.tt === null || !(result.tt)){
      document.getElementById('title').innerHTML = "untitled";
    } else {
      document.getElementById('title').innerHTML = result.tt;
    }
    if(result.tt1 === null || !(result.tt1)){
      document.getElementById('title1').innerHTML = "untitled";
    } else {
      document.getElementById('title1').innerHTML = result.tt1;
    }
    if(result.tt0 === null || !(result.tt0)){
      document.getElementById('title0').innerHTML = "untitled";
    } else {
      document.getElementById('title0').innerHTML = result.tt0;
    }
    
    if( result.tt2 === null || !(result.tt2)){
      document.getElementById('title2').innerHTML = "untitled";
    } else {
      document.getElementById('title2').innerHTML = result.tt2;
    }
    if(result.tt3=== null || !(result.tt3)){
      document.getElementById('title3').innerHTML = "untitled";
    } else {
      document.getElementById('title3').innerHTML = result.tt3;
    }
    if(result.tt4 === null || !(result.tt4)){
      document.getElementById('title4').innerHTML = "untitled";
    } else {
      document.getElementById('title4').innerHTML = result.tt4;
    }
    if( result.tt5 === null || !(result.tt5)){
      document.getElementById('title5').innerHTML = "untitled";
    } else {
      document.getElementById('title5').innerHTML = result.tt5;
    }
    if(result.tt6 === null || !(result.tt6)){
      document.getElementById('title6').innerHTML = "keep me blank!";
    } else {
      document.getElementById('title6').innerHTML = result.tt6;
    }
  }); 
}


// from note to notebook!
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('gotoNotebook');
  // onClick's logic below:
  link.addEventListener('click', function() {
      fade(document.getElementById('note'));
      unfade(document.getElementById('notebook'));
      chrome.storage.sync.get(['aa'], function(result){
        if(result.aa === null || !result.aa){
          record1(); 
        }
        else if (result.aa === 0){
          record1();  
        } else if(result.aa === 1){
          record2(); 
        } else if (result.aa === 2){
          record3(); 
        } else if(result.aa === 3){
          record4(); 
        } else if(result.aa === 4){
          record5(); 
        }else if(result.aa === 5){
          record6(); 
        }else if(result.aa === 6){
          record7(); 
        }else if(result.aa === 7){
          record8(); 
        }else if(result.aa === 8){
          record9();   
        }
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('saveNote');
    link.addEventListener('click', function() {
      fade(document.getElementById('note'));
      unfade(document.getElementById('notebook'));
      chrome.storage.sync.get(['aa'], function(result){
        if(result.aa === null || !result.aa){
          record1(); 
        }
        else if (result.aa === 0){
          record1();  
        } else if(result.aa === 1){
          record2(); 
        } else if (result.aa === 2){
          record3(); 
        } else if(result.aa === 3){
          record4(); 
        } else if(result.aa === 4){
          record5(); 
        }else if(result.aa === 5){
          record6(); 
        }else if(result.aa === 6){
          record7(); 
        }else if(result.aa === 7){
          record8(); 
        }else if(result.aa === 8){
          record9();   
        }
      });
    }); 
}); 



// // save note 
// document.addEventListener('DOMContentLoaded', function() {
//   var link = document.getElementById('saveNote');
//   link.addEventListener('click', function() {
//     var text; 
//     var tex = document.getElementById('noteinput'); 
//     if(!tex){
//       text = "empty"; 
//     } else { 
//       text = tex.value; 
//     }
//     var blob = new Blob([text], {type:"text/plain"}); 
//     var iurl = URL.createObjectURL(blob);
//     chrome.downloads.download({
//       url: iurl,
//       filename: "note.txt"
//     });
//   }); 
// }); 

