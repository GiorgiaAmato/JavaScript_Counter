let add = document.getElementById('increment');
let subtrat = document.getElementById('decrement');
let int = document.getElementById('total');
let integer = 0;
let inputNum = document.getElementById('text-input');
let reset = document.getElementById('reset');

//message counter reset
function showLabel() {
    document.getElementById('label-reset').innerHTML = "Counter reset";

    setTimeout(function () {
            document.getElementById('label-reset').innerHTML = "";
        }, 1000);
}

//plus button 
add.addEventListener('click', function () {
    integer += Number(inputNum.value);
    int.innerHTML = integer;
});

//minus button
subtrat.addEventListener('click', function () {
    integer -= Number(inputNum.value);
    int.innerHTML = integer;
});

//reset button
reset.addEventListener('click', function () {
    integer = 0;
    int.innerHTML = integer;
    inputNum.value = 1;
    showLabel();
});

//function reset onload Firefox
function load() {
    integer = 0;
    int.innerHTML = integer;
    inputNum.value = 1;
};
