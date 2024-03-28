// function calculateParallelogramlArea() {
//     const lengthInput = document.getElementById('parallelogram-length')
//     const lengthText = lengthInput.value;
//     const length = parseFloat(lengthText)
//     // console.log(length);


//     const WidthInput = document.getElementById('parallelogram-width');
//     const widthText = WidthInput.value;
//     const width = parseFloat(widthText);
//     // console.log(width);

//     const area = length * width;
//     // console.log(area);

//     const parallelogramAreaSpan = document.getElementById('parallelogram-area');
//     parallelogramAreaSpan.innerText = area;

// }


function calculateParallelogramlArea() {
    const base = getInputValueById('parallelogram-base'); 
    // console.log('base value', base);

    const height = getInputValueById('parallelogram-height');
    // console.log('height', height);

    const area = base * height;
    console.log('area of the parallelogram', area);

    setInnerTextById('parallelogram-area',area)
}

function getInputValueById(inputFiledId) {
    const inputFiled = document.getElementById(inputFiledId);
    const inputValueText =inputFiled.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}