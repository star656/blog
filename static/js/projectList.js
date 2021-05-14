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

        // $.post('/blog/addProject/', $("form").serialize(), function (response) {
        //            console.log(response);
        //            $('dialog').hide();
        //         });
        $.ajax({
            url:'/blog/addProject/',
            type:'post',
            dataType:'json',
			data: $("form").serialize(),
            async:false,
            success: function(data) {
                // data = jQuery.parseJSON(data);  //dataType指明了返回数据为json类型，故不需要再反序列化
                alert(data.message);
            }
        });
        window.location.reload();
    });
});


