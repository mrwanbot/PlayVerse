/* ===========================
   PlayVerse Login
=========================== */

const loginButton = document.getElementById("loginButton");
const username = document.getElementById("username");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

loginButton.addEventListener("click", login);

username.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        login();
    }

});

function login(){

    const player = username.value.trim();

    error.style.display = "none";

    if(player.length < 3){

        error.innerHTML = "❌ Please enter a valid Minecraft username.";
        error.style.display = "block";

        return;

    }

    loginButton.disabled = true;

    loading.style.display = "block";

    setTimeout(function(){

        loading.style.display = "none";

        window.location.href =
        "server.html?player=" +
        encodeURIComponent(player);

    },2000);

}
