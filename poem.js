/*
 * @version: v 0.0.1
 * @Author: tomjames100
 * @Email: tomjames100@163.com
 * @Date: 2022-04-07 19:38:27
 * @LastEditors: tomjames100
 * @LastEditTime: 2022-04-07 21:52:00
 * @Attention: This application is only made for studying. Any kind of commercial use is not allowed.
 */
window.onload = function() {
    radios = document.getElementsByName("radio1");
    checkboxs = document.getElementsByName("checkbox1");

    radios[0].onclick = changeTo1;
    radios[1].onclick = changeTo2;
    radios[2].onclick = changeTo3;

    checkboxs[0].onclick = setBold;
    checkboxs[1].onclick = setItalic;
}

function changeTo1() {
    var text = document.getElementById("text");

    if (this.checked) {
        text.style.fontFamily = "微软雅黑";
    }
}

function changeTo2() {
    var text = document.getElementById("text");

    if (this.checked) {
        text.style.fontFamily = "宋体";
    }
}

function changeTo3() {
    var text = document.getElementById("text");

    if (this.checked) {
        text.style.fontFamily = "楷体";
    }
}

function setBold() {
    var text = document.getElementById("text");

    if (this.checked) {
        text.style.fontWeight = "bold";
    }
    else {
        text.style.fontWeight = "normal";
    }
}

function setItalic() {
    var text = document.getElementById("text");

    if (this.checked) {
        text.style.fontStyle = "italic";
    }
    else {
        text.style.fontStyle = "normal";
    }
}