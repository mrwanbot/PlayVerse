function checkPlayer(){

    let player = document.getElementById("player").value.trim();
    let message = document.getElementById("message");

    if(player === ""){

        message.style.display = "block";
        message.style.background = "#3a1418";
        message.style.border = "2px solid #ff4d5d";
        message.style.color = "#ffb3ba";
        message.innerHTML = "❌ Please enter your Minecraft username.";

        return;
    }

    message.style.display = "block";
    message.style.background = "#163326";
    message.style.border = "2px solid #2dd36f";
    message.style.color = "#9effc8";
    message.innerHTML = "✅ Welcome " + player + "!";

    setTimeout(function(){
        window.location.href = "server.html?player=" + encodeURIComponent(player);
    },1500);

}
