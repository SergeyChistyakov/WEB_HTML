function verify() {
    console.log("a, h, r, m")
    let a = parseInt(elementA.innerText);
    let h = parseInt(elementH.innerText);
    let r = parseInt(elementR.innerText);
    let m = parseInt(elementM.innerText);
    console.log(a, h, r, m)

    let cube_volume, cylinder_volume
    cube_volume = a**3;
    cylinder_volume = 3.14*(r**2)*h;

    if (cube_volume <= m) {
        result1 = "Можно заполнить"
        document.getElementById("result1").innerText = result1;
    } else {
        result1 = "Нельзя заполнить"
        document.getElementById("result1").innerText = result1;
    }
     if (cylinder_volume <= m) {
        result2 = "Можно заполнить"
        document.getElementById("result2").innerText = result2;
    } else {
        result2 = "Нельзя заполнить"
        document.getElementById("result2").innerText = result2;
    }
     if (cube_volume + cylinder_volume <= m) {
        result3 = "Можно заполнить"
        document.getElementById("result3").innerText = result3;
    } else {
        result3 = "Нельзя заполнить"
        document.getElementById("result3").innerText = result3;
    }
}

const elementA = document.getElementById("a");
const elementH = document.getElementById("h");
const elementR = document.getElementById("r");
const elementM = document.getElementById("m");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
