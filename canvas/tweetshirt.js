window.onload = function () {
    // var canvas = document.getElementById("tshirtCanvas");
    // if (canvas.getContext) {
    //     var context = canvas.getContext("2d");  //在convas中用2D做畫
    //     context.fillRect(10, 10, 100, 100);
    //     alert("u have canvas");
    // }else{
    //     alert("sorry no canvas API support");
    // }

    window.onload = function(){
        var button = document.getElementById("previewButton");
        button.onclick = previewHandler;
    }

    function previewHandler(){
        var canvas = document.getElementById("tshirtCanvas");
        var context = convas.getContext("2d");

        var selectObj = document.getElementById("shape");
        var index = selectObj.selectedIndex;
        var shape = selectObj[index].value;

        if(shape == "squares"){
            for (var squares = 0;squares < 20; squares++){
                drawSquare(canvas, context)
            }
        }
    }
}