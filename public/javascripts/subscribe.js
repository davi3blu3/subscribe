'use strict'

$(document).ready(function(){
        
    $('#submit').click(function formResults(){

        // var info = {
        //     "email_address": $("#email").val(),
        //     "status": "subscribed",
        //     "merge_fields": {
        //         "FNAME": $("#firstName").val(),
        //         "LNAME": $("#lastName").val()
        //     }
            
        // };

        // var infoObject = "body : " + JSON.stringify(info);
        // console.log(infoObject);
                 
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000', true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    //document.getElementById('join').innerHTML = xhr.responseText;
                    console.log(xhr.responseText);
                } else { 
                    console.log(xhr.statusText);
                };
            };
        };

        xhr.send();

        function success() {
            console.log("Transmission successful!");
        }




    }) // end click
}); // end ready    


