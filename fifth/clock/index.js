function getTime() {
    //第一步创建xhr对象
    var xhr = new XMLHttpRequest();
    //open
    xhr.open('GET','/clock',true);
    //xhr.responseType = 'json';//设置类型为json后只能使用response
    //监听事件
    xhr.onload = function () {
        clock.innerHTML = xhr.response;
    };
    xhr.send();
    /*xhr.onreadystatechange = function () {
        if(xhr.readyState==xhr.DONE&&xhr.status==200){
            clock.innerHTML = xhr.response;//数据
            //response 可以取代responseText
        }
    }*/
}
setInterval(getTime,1000);