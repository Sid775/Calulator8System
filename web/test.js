
var $lba= document.getElementsByClassName('login-button-arrow');

function myPopup(){
    alert( "xyz" );
    console.log($lba);
}

for(var i=0; i<$lba.length; i++) $lba[i].onclick = myPopup;


