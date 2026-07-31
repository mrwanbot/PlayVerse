// =========================
// Play Verse Authentication
// =========================

// هل المستخدم مسجل الدخول؟
function isLoggedIn() {
    return localStorage.getItem("playverse_user") !== null;
}

// حماية جميع الروابط التي تحتاج تسجيل دخول
document.addEventListener("DOMContentLoaded", () => {

    const protectedLinks = document.querySelectorAll(".need-login");

    protectedLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            if (!isLoggedIn()) {

                e.preventDefault();

                const goLogin = confirm(
                    "يجب تسجيل الدخول أولاً.\n\nللوصول إلى هذه الصفحة، يرجى تسجيل الدخول أو إنشاء حساب جديد."
                );

                if (goLogin) {
                    window.location.href = "login.html";
                }

            }

        });

    });

});
