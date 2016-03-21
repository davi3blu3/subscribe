'use strict'

$(document).ready(function(){
        
    $('#submit').click(function formResults(){

        $.ajax({
            url: "http://localhost:3000/new_user",
            type: "POST",
            data: {
              email_address: $("#email").val(),
              first_name: $("#firstName").val(),
              last_name: $("#lastName").val()
            },
            dataType: "json",
            success: function (result) {
                switch (result) {
                    case true:
                        console.log(result);
                        break;
                    default:
                        console.log(result);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
            }
        });





    }) // end click
}); // end ready    


