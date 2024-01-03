    const sede = ["adarsh", "adhi", "adarsha", "adhu", "prems", "prems thamma"];

function myfun(){

    var a = document.getElementById('sede').value.toLowerCase().toString();

        for( var i = 0; i<sede.length; i++){

            if( sede[i].toString() === a){
                document.getElementById('guess').innerHTML = "Yes, You guessed it right!"
                break;
            }
            else{
                document.getElementById('guess').innerHTML = "Wrong Guess";
            }
        }

}