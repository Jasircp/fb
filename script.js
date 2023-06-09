$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            lname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            mail:{
                required:true,
                email:true
            },
            remail:{
                required:true,
                email:true,
                equalTo:"#mail"
            },
            pwd:{
                required:true,
                minlength:8

            },
            sex:{
                required:true
            },
            day:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name"
            },
            remail:{
                equalTo:"mails dont match"
            }
        }
    })
})