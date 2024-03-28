function calculateRectangelArea() {
    // Get Length of the rectangel area
    const lengthInput = document.getElementById('rectangel-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    // Get width of the rectangel area
    const lengthWidth = document.getElementById('rectangel-width');
    const widthText = lengthWidth.value;
    const width = parseFloat(widthText);

    console.log(width);

    //Calculate rectangel area
    const area = length * width;
    console.log('area of the rectangel', area);

    //display rectangel area
    const rectangelAreaSpan = document.getElementById('rectangel-area');
    rectangelAreaSpan.innerText = area;
}