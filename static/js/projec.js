$(function () {
    $("#button").click(function () {
        method = $('[name="request"]').val();
        url = $('[name="url"]').val();
        // csrf = $('[type="hidden"]').val();
        console.log(method, url);
        if (url.length === 0){
            alert("请求地址不能为空")
        }
        else {
            if (method === "GET") {
                $.get('/blog/project/', $("form").serialize(), function (response) {
                    $("#content").text(response)
                });
            } else if (method === "POST") {
                $.post('/blog/project/', $("form").serialize(), function (response) {
                   $("#content").text(response)
                });
            }
        }
    });

    $("#clear").click(function (){
       $("p").text("");
    });
});