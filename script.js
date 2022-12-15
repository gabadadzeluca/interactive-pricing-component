let yearlySub = false;

const total = document.getElementById('total');
const billCheck = document.getElementById('bill-check');
billCheck.addEventListener('change', displayTotal);
const slider = document.getElementById('slider');
const period = document.getElementById('period');
//pageviews 
const pageviews = document.getElementById('pageviews');

slider.addEventListener('input', function(){
    displayTotal();
    sliderFunc();
});

function sliderFunc(){
    // console.log("background: ",slider.style.background);
    let percent = Math.min(100, (slider.value / slider.max) * 100);
    // console.log("percent: ",percent,"max: ", slider.max);
    // slider.style.background = `linear-gradient(to right , var(--soft-cyan) ${(percent)}%, var(--slider-blue) ${(percent)}%)`;
    // if(percent < 34){
    //     slider.style.background = 'var(--slider-blue)';
    // }
}
// show the starting price
displayTotal();

function displayTotal(){
    getBilling();
    let x = yearlySub ? 9 : 1; 
    if(yearlySub){
        total.innerHTML = '$' + parseInt(slider.value*3/4 * x).toFixed(2);
    }else{
        total.innerHTML = '$' + parseInt(slider.value * x).toFixed(2);
    }
}

function getBilling(){
    let checked = billCheck.checked;
    if(checked){
        //yearly bidding
        period.innerHTML = '/year';
        yearlySub = true;
    }else{
        //monthly bidding
        period.innerHTML = '/month';
        yearlySub = false;
    }
    displayValues();
}

// display pageviews and slider background gradient
function displayValues(){
    // value = parseInt(slider.value);
    let x;
    let val;
    switch(parseInt(slider.value)){
        case 8:
            val = 0;
            x = 10;
            break;
        case 12:
            val = 25;
            x = 50;
            break;
        case 16:
            val = 50;
            x = 100;
            break;
        case 20:
            val = 75;
            x = 500;
            break;
        case 24:
            val = 100;
            x = 1;
            break;
    }
    pageviews.innerHTML = `${x} K`;
    slider.style.background = `linear-gradient(to right , var(--soft-cyan) ${(val)}%, var(--slider-blue) ${(val)}%)`;

    if(x==1){
        pageviews.innerHTML = `${x} M`
    }
}