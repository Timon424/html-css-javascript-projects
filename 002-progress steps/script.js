let prev = document.getElementById("prev")
let next = document.getElementById("next")
let progress = document.getElementById("progress")
let steps = document.querySelectorAll(".step")

let curentStep = 0

prev.addEventListener("click", () => {
    if (!prev.disabled) {
        curentStep--
        steps[curentStep + 1].classList.remove("active")
        progress.style.width = curentStep / (steps.length - 1) * 100 + "%"
        next.disabled = false
        if (curentStep == 0) {
            prev.disabled = true
        }
    }
})

next.addEventListener("click", () => {
    if (!next.disabled) {
        curentStep++
        steps[curentStep].classList.add("active")
        progress.style.width = curentStep / (steps.length - 1) * 100 + "%"
        prev.disabled = false
        if (curentStep == steps.length - 1) {
            next.disabled = true
        }
    }
})