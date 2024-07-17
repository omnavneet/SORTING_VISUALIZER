let length = 200;
let width = 5;
let heightmultiplier = 7;

const mediaquery = window.matchMedia('(max-width: 768px)');
const medaiquery2 = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');

if(mediaquery.matches){

    length = 80;
    width = 3;
    heightmultiplier = 5;

}
if(medaiquery2.matches){

    length = 150;
    width = 4;
    heightmultiplier = 6;
}



function createBars() {

    let numbers = [];

    for(let i = 0; i<length; i++){
    numbers.push(getrandomnumbers(5,100));
    }

    const container = document.getElementById('bars-container');
    container.innerHTML = '';

    numbers.forEach(height => {
        const bar = document.createElement('div');
        bar.style.height = `${(height * heightmultiplier)}px`;
        bar.style.width = `${width}px`;
        bar.className = 'bar';
        container.appendChild(bar);
    });
    return numbers;
}

function getrandomnumbers(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const array = createBars();
const bubblebtn = document.querySelector('.bubble');
const newarraybtn = document.querySelector('.newarray');
const selectionbtn = document.querySelector('.selection');
const insertionbtn = document.querySelector('.insertion');
const mergebtn = document.querySelector('.merge');
const quickbtn = document.querySelector('.quick');


//********                 BUBBLE SORT                 ********//
bubblebtn.addEventListener('click', () => {
    
    const bars = document.querySelectorAll('.bar');
    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / 7);

    bubblebtn.disabled = true;
    newarraybtn.disabled = true;
    selectionbtn.disabled = true;
    insertionbtn.disabled = true;
    mergebtn.disabled = true;
    quickbtn.disabled = true;

    bubble(heights)
    .then(() => {
        bubblebtn.disabled = false;
        newarraybtn.disabled = false;
        selectionbtn.disabled = false;
        insertionbtn.disabled = false;
        mergebtn.disabled = false;
        quickbtn.disabled = false;
    });
});

//********                 SELECTION SORT                 ********//
selectionbtn.addEventListener('click', () => {
     
    const bars = document.querySelectorAll('.bar');
    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / 7);

    bubblebtn.disabled = true;
    newarraybtn.disabled = true;
    selectionbtn.disabled = true;
    insertionbtn.disabled = true;
    mergebtn.disabled = true;
    quickbtn.disabled = true;
    
    selection(heights)
    .then(() => {


        bubblebtn.disabled = false;
        newarraybtn.disabled = false;
        selectionbtn.disabled = false;
        insertionbtn.disabled = false;
        mergebtn.disabled = false;
        quickbtn.disabled = false;
    });
});

//********                 INSERTION SORT                 ********//
insertionbtn.addEventListener('click', () => {
     
    const bars = document.querySelectorAll('.bar');
    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / 7);

    bubblebtn.disabled = true;
    newarraybtn.disabled = true;
    selectionbtn.disabled = true;
    insertionbtn.disabled = true;
    mergebtn.disabled = true;
    quickbtn.disabled = true;
    
    insertion(heights)
    .then(() => {
        
        checkSorted(heights);

        bubblebtn.disabled = false;
        newarraybtn.disabled = false;
        selectionbtn.disabled = false;
        insertionbtn.disabled = false;
        mergebtn.disabled = false;
        quickbtn.disabled = false;
    });
});
    
//********                 MERGE SORT                 ********//

mergebtn.addEventListener('click', () => {
    
    const bars = document.querySelectorAll('.bar');
    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / 7);

    bubblebtn.disabled = true;
    newarraybtn.disabled = true;
    selectionbtn.disabled = true;
    insertionbtn.disabled = true;
    mergebtn.disabled = true;
    quickbtn.disabled = true;

    mergesort(heights, 0, heights.length - 1)
    .then(() => {
        
        checkSorted(heights);

        bubblebtn.disabled = false;
        newarraybtn.disabled = false;
        selectionbtn.disabled = false;
        insertionbtn.disabled = false;
        mergebtn.disabled = false;
        quickbtn.disabled = false;
    });
});

//********                 QUICK SORT                 ********//

quickbtn.addEventListener('click',() => {

    const bars = document.querySelectorAll('.bar');
    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / 7);

    bubblebtn.disabled = true;
    newarraybtn.disabled = true;
    selectionbtn.disabled = true;
    insertionbtn.disabled = true;
    mergebtn.disabled = true;
    quickbtn.disabled = true;

    quicksort(heights, 0, heights.length - 1)
    .then(async () => {
        
        checkSorted(heights);

        bubblebtn.disabled = false;
        newarraybtn.disabled = false;
        selectionbtn.disabled = false;
        insertionbtn.disabled = false;
        mergebtn.disabled = false;
        quickbtn.disabled = false;
    });
});

async function checkSorted(array){
    for(let i = 0; i < array.length - 1; i++){
        if(array[i] <= array[i + 1]){
            await new Promise(resolve => setTimeout(resolve, 20));
            bars[i].style.backgroundColor = "green";
        }
    }
    bars[array.length - 1].style.backgroundColor = "green";
}


