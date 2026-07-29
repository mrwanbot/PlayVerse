/* ===========================
   PlayVerse Dashboard
=========================== */

const params = new URLSearchParams(window.location.search);

const player =
params.get("player") || "Steve";

const server =
params.get("server") || "BlockHub";

document.getElementById("welcomePlayer").innerHTML =
"Welcome, <b>" + player + "</b>";

document.getElementById("playerName").innerHTML =
player;

document.getElementById("serverName").innerHTML =
server;

document.getElementById("avatar").src =
"https://mc-heads.net/avatar/" +
player +
"/150";

document.getElementById("skin").src =
"https://starlightskins.lunareclipse.studio/render/default/" +
player +
"/full";

const copyButton =
document.getElementById("copyIP");

const message =
document.getElementById("message");

copyButton.addEventListener("click", function(){

    const ip =
    document.getElementById("serverIP").innerText;

    navigator.clipboard.writeText(ip);

    message.innerHTML =
    "✅ Server IP Copied!";

    message.style.display = "block";

    setTimeout(function(){

        message.style.display = "none";

    },2500);

});

document
.getElementById("joinMinecraft")
.addEventListener("click", function(){

    window.location.href =
    "minecraft://";

});
