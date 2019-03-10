window.onload = init;
function init(){
    var button = document.getElementById("addButton");
    button.onclick = handleButtonOnClick;
    loadPlaylist();
}
function handleButtonOnClick(){
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    if(songName == ""){
        alert("please enter a song");
    }else{
        alert("Adding " + songName)
        var li = document.createElement("li");
        li.innerHTML = songName;
        var ul =document.getElementById("playlist");
        ul.appendChild(li);
       textInput.value ="";
        save(songName);
    }

}

