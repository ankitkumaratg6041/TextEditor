function getText() {
    let text = document.getElementById('format-input').value;
    document.getElementById('format-output').innerHTML = text;
}

function textBold(element) {
    element.classList.toggle('active');
    document.getElementById('format-output').classList.toggle('bold'); 
}

function textItalic(element) {
    element.classList.toggle('active');
    document.getElementById('format-output').classList.toggle('italic');
}

function textUnderLine(element){
    element.classList.toggle('active');
    if(document.getElementById('format-output').classList.contains('under-line')){
        document.getElementById('format-output').classList.remove('under-line');
    }
    else{
        document.getElementById('format-output').classList.add('under-line');
    }
}

function textAlignment(element, text){
    document.getElementById('format-output').style.textAlign = text;
    let alignButtons = document.getElementsByClassName('alignButton');
    for(let i=0; i<alignButtons.length; i++){
        alignButtons[i].classList.remove('active');
    }
    element.classList.add('active');
}

let increase = 20;
function alterFontSize(element, text) {
    if(text === 'up'){
        document.getElementById('format-output').style.fontSize = (increase=increase + 2) + 'px';
    }
    else{
        document.getElementById('format-output').style.fontSize = (increase=increase - 2) + 'px';
    }
    let getButton = document.getElementsByClassName('font-size-buttons');
    for(let i = 0; i < getButton.length; i++){
        getButton[i].classList.remove('active');
    }
    element.classList.add('active');
}

// function alterFontFamily(element) {
//     element.classList.toggle('active');
// }

function getFontStyle(element) {
    let title = element.innerText;
    document.getElementById('drop-title').innerText = title;
    document.getElementById('drop-title').classList.add('changeText');
    document.getElementById('format-output').style.fontFamily = title.toLowerCase();
}

function getAlignStyle(element, text) {
    let title = element.innerText;
    document.getElementById('align-drop-title').innerText = title;
    document.getElementById('align-drop-title').classList.add('changeText');

    console.log(text);
    document.getElementById('format-output').classList.add(text);
}