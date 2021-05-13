
$(function (){
    $("#button").click(function (){
        username = $('[name="username"]').val();
        password = $('[name="password"]').val();
        csrf = $('[type="hidden"]').val();
        if (username.length ===0){
            $("#username-error").show(500,"linear");
        }
        if (password.length ===0){
                $("#password-error").show(500,"linear");
            }
        // else{
        //     console.log(username,password,csrf);
        //     $.post('/blog/login/',{'username':username,'password':password,'csrfmiddlewaretoken':csrf},function (response){
        //         console.log(response)
        //         alert($(response).message)
        // });
        // }
    });

    $("#username").blur(function (){
        username = $('[name="username"]').val();
        if (username.length !== 0) {
            $("#username-error").hide();
        }
    });

    $("#password").blur(function (){
        password = $('[name="password"]').val();
        if (password.length !== 0) {
            $("#password-error").hide();
        }
    });
});