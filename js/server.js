/* ===========================
   PlayVerse Server Page
=========================== */

const serverInput = document.getElementById("serverName");
const joinButton = document.getElementById("joinServer");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

const params = new URLSearchParams(window.location.search);
const player = params.get("player");

joinButton.addEventListener("click", joinServer);

serverInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        joinServer();
    }

});

function joinServer(){

    const server = serverInput.value.trim();

    error.style.display = "none";

    if(server === ""){

        error.innerHTML = "❌ Please enter the server name.";
        error.style.display = "block";

        return;

    }

    loading.style.display = "block";

    joinButton.disabled = true;

    setTimeout(function(){

        loading.style.display = "none";

        if(server.toLowerCase() === "blockhub"){

            window.location.href =
            "dashboard.html?player=" +
            encodeURIComponent(player) +
            "&server=" +
            encodeURIComponent(server);

        }else{

            joinButton.disabled = false;

            error.innerHTML =
            "❌ Server not found.";

            error.style.display = "block";

        }

    },2000);

       }
