window.onload = function () {
    // var canvas = document.getElementById("tshirtCanvas");
    // if (canvas.getContext) {
    //     var context = canvas.getContext("2d");  //在convas中用2D做畫
    //     context.fillRect(10, 10, 100, 100);
    //     alert("u have canvas");
    // }else{
    //     alert("sorry no canvas API support");
    // }

 
        var button = document.getElementById("previewButton");
        button.onclick = previewHandler;
        
 
    }



    function previewHandler(){
        
        var canvas = document.getElementById("tshirtCanvas");
        var context = canvas.getContext("2d");
        fillBackgroundColor(canvas, context);

        var selectObj = document.getElementById("shape");
        var index = selectObj.selectedIndex;
        var shape = selectObj[index].value;

        if(shape == "squares"){
            for (var squares = 0;squares < 20; squares++){
                drawSquare(canvas, context)
                
            }
        }
        context.beginPath();
        context.moveTo(100, 150);
        context.lineTo(250, 75);
        context.lineTo(125, 30);
        context.closePath();
        context.lineWidth = 5;
        context.stroke();
        context.fillStyle = "red";
        context.fillStyle();
       
    }

    function drawSquare(canvas, context){
        var w = Math.floor(Math.random()*40);
        var x = Math.floor(Math.random()*canvas.width);
        var y = Math.floor(Math.random()*canvas.height);

        context.fillStyle = "lightblue";
        context.fillRect(x, y, w, w);
        
    }

    function fillBackgroundColor(canvas, context){
        var selectObj = document.getElementById("backgroundColor");
        var index = selectObj.selectedIndex;
        var bgColor = selectObj.options[index].value;
        context.fillStyle = bgColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

