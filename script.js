let yearlySub = false;


const total = document.getElementById('total');
const billCheck = document.getElementById('bill-check');
billCheck.addEventListener('change', displayTotal);
const slider = document.getElementById('slider');
const period = document.getElementById('period');
//pageviews 

const pageviews = document.getElementById('pageviews');
slider.addEventListener('change', function(){
    displayTotal();
});

// show the starting price
displayTotal();



function displayTotal(){
    getBilling();
    let x = yearlySub ? 9 : 1; 
    total.innerHTML = '$' + parseInt(slider.value * x);
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
    displayViews();
}

// display pageviews
function displayViews(){
    // value = parseInt(slider.value);
    let x;
    switch(parseInt(slider.value)){
        case 8:
            x = 10
            break;
        case 12:
            x = 50;
            break;
        case 16:
            x = 100;
            break;
        case 20:
            x = 150;
            break;
        case 24:
            x = 200;
            break;
    }
    pageviews.innerHTML = `${x} K`
}