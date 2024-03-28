function caculatePentagonArea() {
   const periMeter = getInputValueById('pentagon-perimeter');
   const apothem = getInputValueById('pentagon-apothem');
   const area = 0.5 * periMeter * apothem;
   setInnerTextById('pentagon-area', area)

}

function getInputValueById(inputFiledId) {
    const inputFiled = document.getElementById(inputFiledId);
    const inputValueText = inputFiled.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area) {

    const element = document.getElementById(elementId);
    element.innerText = area;
}