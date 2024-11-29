/* 
File: script.js 
 GUI Assignment:  Creating a Dynamic Multipication table using JS 
 Allen Zammer, UMass Lowell Computer Science, allen_zammer@student.uml.edu 
 Copyright (c) 2024 by Allen.  All rights reserved.  May be freely copied or 
 excerpted for educational purposes with credit to the author. 
 updated by AZ on October 30, 2024 at  11:59 PM */
 
 $(document).ready(function() {
    $('#values').validate({
        rules: {
            xMin : {
                required : true,
                number: true,
                range: [-100, 100]
            },
            xMax : {
                required : true,
                number: true,
                range: [-100, 100]
            },
            yMin : {
                required : true,
                number: true,
                range: [-100, 100]
            },
            yMax : {
                required : true,
                number: true,
                range: [-100, 100]
            },
        }
    })

jQuery.validator.addMethod("lessThan", function(value, element, param) {
    var max = parseInt($(param).val());
    return this.optional(element) || parseInt(value) < max;
}, "This value must be less than max Value.");

jQuery.validator.addMethod("greaterThan", function(value, element, param) {
    var min = parseInt($(param).val());
    return this.optional(element) || parseInt(value) > min;
}, "This value must be greater than min Value.");



});

function tableCreation() {
    let xMin = document.getElementById('xMin').value;
    let xMax = document.getElementById('xMax').value;
    let yMin = document.getElementById('yMin').value;
    let yMax = document.getElementById('yMax').value;

    var cols = xMax - xMin;
    var rows = yMax - yMin;
    var xVal = [xMin, xMax];
    var yVal = [yMin, yMax];
    
    let table = '<table id="table">';
    table += '<tr><th id="special"></th>'
    for (let t = xVal[0]; t <= xVal[1]; t++) {
        table+= `<th id="first-row"> ${ t } </th>`;
    }
     table += '</tr>'
    for (let i = 0; i<= rows; i++) {  
        table += '<tr>';  
        for (let j = 0; j <= cols + 1; j++) { 
            if( j == 0){
                table += `<th id="first-col"> ${ i + parseInt(yVal[0]) }</th>`
            } else {
                table += `<td>${(i + parseInt(yVal[0])) * (parseInt(xVal[0]) + j - 1)}</td>`;  
            }
        }  
        table += '</tr>';  
    } 
    table += '</table>';  
    tableContainer = document.getElementById('tableCont');  
    tableContainer.innerHTML = table;  
};