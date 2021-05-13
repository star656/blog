$(function (){
    $("#add-project").click(function (){

        $('dialog').show();
    });

    $("#dialog-cancel-button").click(function (){
        console.log("111")
        $('dialog').hide();
    });

    $("#dialog-confirm-button").click(function (){
        // projectName = $('[name="projectName"]').val();
        // projectType = $('[name="projectType"]').val();
        // projectVersion = $('[name="projectVersion"]').val();
        // projectDescribe = $('[name="projectDescribe"]').val();
        // csrf = $('[type="hidden"]').val();

        $.post('/blog/addProject/', $("form").serialize(), function (response) {
                   console.log(response);
                   $('dialog').hide();
                });
        window.location.reload();
        console.log(222);
    });
});


