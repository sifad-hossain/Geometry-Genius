/**
 * Objective: get base, height of a triangel. Calculate the area by using the provide formula. and then display the area
 * step-1: get base value of the triangel
 * step-2: added an id in the base input filed
 * step-3: use getelementbyid to access the input field 
 * step-4: get value from the input field.(value is string now)
 * step-5: convert the value to a number. ude parseFloat
 */

function calculateTriangelArea() {
    //get triangel base value
    const triangelBaseInput = document.getElementById('triangle-base');
    const triangelBaseText = triangelBaseInput.value;
    const base = parseFloat(triangelBaseText);
    // console.log(base);

    //get triangel height value
    const triangelHeightInput = document.getElementById('triangle-height');
    const triangelHeightText = triangelHeightInput.value;
    const height = parseFloat(triangelHeightText);
    // console.log(height);

    //calculate triangel area
    const area = 0.5 * base * height;
    // console.log('area of the triangel is:', area);

    //display triangel area
    const triangelAreaSpan = document.getElementById('triangel-area');
    triangelAreaSpan.innerText = area;
}


