$(function (){

    //点击查询
    $("#inquire-button").click(function (){
        inquireProjectName = $('[name="inquireProjectName"]').val();
        $.ajax({
            url:'/blog/projectList/',
            type:'post',
            dataType:'json',
			data: {'inquireProjectName':inquireProjectName},
            async:false,
            success: function(data) {
                // data = jQuery.parseJSON(data);  //dataType指明了返回数据为json类型，故不需要再反序列化
                alert(data.message);
            }
        });
    });


    // 点击新增展示弹窗
    $("#add-project").click(function (){
        $('dialog').show();
    });

    //点击取消隐藏弹窗
    $("#dialog-cancel-button").click(function (){
        console.log("111")
        $('dialog').hide();
    });

    //点击提交，提交数据
    $("#dialog-confirm-button").click(function (){
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


