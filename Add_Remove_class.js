
function addClassJq(){
    $('#full-name').addClass('bg-color');
    $('#full-name').addClass('color-red');
    $('.using-jquery h1').addClass('color-brown')
}
function removeClassJq(){
    $('.using-jquery h1').removeClass('color-brown');
    $('#full-name').removeClass('bg-color');
    $('#full-name').removeClass('color-red');
}

function jsAddClass(){

    // console.log(inputBox);
    var inputBox = document.querySelector('#company-name');
    var classNames = inputBox.className;
    classNames += ' bg-pink' + ' color-green';
    inputBox.className = classNames;
    // console.log(classNames);

    var heading = document.querySelector('#heading-js');
    let headingClass = heading.className;
    headingClass += ' color-green';
    heading.className = headingClass;
    console.log(heading.className);
}

function jsRemoveClass(){

    var inputBox = document.querySelector('#company-name');
    // console.log(inputBox);
    var classNames = inputBox.className;
    let classNamesArray = classNames.split(' ');
    // console.log(classNamesArray);
    classNamesArray.splice(classNamesArray.indexOf('bg-pink'),1)
    // console.log(classNamesArray);
    inputBox.className = classNamesArray.join(' ');

     var heading = document.querySelector('#heading-js');
    let headingClass = heading.className;
    let headingClassArray = headingClass.split(' ');
    headingClassArray.splice(headingClassArray.indexOf('color-green'));
    heading.className = headingClassArray.join(' ');
    console.log(heading.className);
}

