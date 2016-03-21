'use strict'

$(document).ready(function(){
        
    $('#submit').click(function formResults(){

        $.ajax({
            url: "http://localhost:3000/new_user",
            type: "POST",
            data: {
              email_address: $("#email").val(),
              status: "subscribed",
              merge_fields: {
                "FNAME": $("#firstName").val(),
                "LNAME": $("#lastName").val()
              }
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


