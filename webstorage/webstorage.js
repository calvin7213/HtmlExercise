localStorage.setItem("sticky_0", "Pick up dry cleaning");//前面為鍵 後面為值
localStorage.setItem("sticky_1", "Cancel cable tv, who needs it now?");

var sticky = localStorage.getItem("sticky_1")
alert(sticky);

localStorage.setItem("sticky_2", 1); //setItem只能儲存字串型別 所以1這個值實際上是被轉成字串 無法做運算，如需運算要幫他轉型
var numItems = parseInt(localStorage.getItem("sticky_2"));//轉int

numItems = numItems + 1;

localStorage.setItem("sticky_2", numItems);



localStorage.setItem("sticky_3", 9.99);
var price = parseFloat(localStorage.getItem("sticky_3"));

price += 2;

localStorage.setItem("sticky_3", price);

for(var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    var value = localStorage[key]
    alert(value);
}




