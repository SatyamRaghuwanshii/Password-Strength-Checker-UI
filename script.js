let inp = document.querySelector("#password");
let bar = document.querySelector("#strengthBar");
let text = document.querySelector(".strength-text");
let icon = document.querySelector(".toggle");

icon.addEventListener("click", () => {
    if (inp.type === "password") {
        inp.type = "text";
    } else {
        inp.type = "password";
    }
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
});

inp.addEventListener("input", (pass) => {
    let value = pass.target.value;
    let count = 0;

    if (value.length >= 6) {
        document.querySelector("#length").className = "valid";
        count++;
    } else {
        document.querySelector("#length").className = "invalid";
    }

    if (/[A-Z]/.test(value)) {
        document.querySelector("#uppercase").className = "valid";
        count++;
    } else {
        document.querySelector("#uppercase").className = "invalid";
    }

    if (/[0-9]/.test(value)) {
        document.querySelector("#number").className = "valid";
        count++;
    } else {
        document.querySelector("#number").className = "invalid";
    }

    if (/[^A-Za-z0-9]/.test(value)) {
        document.querySelector("#special").className = "valid";
        count++;
    } else {
        document.querySelector("#special").className = "invalid";
    }

    if (count === 0) {
        bar.className = "bar";
        text.textContent = "Strength: None";
    }
    else if (count === 1) {
        bar.className = "bar very-weak";
        text.textContent = "Strength: Very Weak";
    }
    else if (count === 2) {
        bar.className = "bar weak";
        text.textContent = "Strength: Weak";
    }
    else if (count === 3) {
        bar.className = "bar medium";
        text.textContent = "Strength: Medium";
    }
    else {
        bar.className = "bar strong";
        text.textContent = "Strength: Strong";
    }

});