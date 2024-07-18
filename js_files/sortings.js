let length = 200;
let width = 5;
let heightmultiplier = 7;

const mediaquery = window.matchMedia('(max-width: 768px)');
const mediaquery2 = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');

if(mediaquery.matches){
    length = 80;
    width = 3;
    heightmultiplier = 5;
}
if(mediaquery2.matches){

    length = 150;
    width = 4;
    heightmultiplier = 7;
}

function createBars() {
    let numbers = [];

    for(let i = 0; i < length; i++){
        numbers.push(getrandomnumbers(5, 100));
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

    return document.querySelectorAll('.bar');

}

function getrandomnumbers(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bubblebtn = document.querySelector('.bubble');
const newarraybtn = document.querySelector('.newarray');
const selectionbtn = document.querySelector('.selection');
const insertionbtn = document.querySelector('.insertion');
const mergebtn = document.querySelector('.merge');
const quickbtn = document.querySelector('.quick');

newarraybtn.addEventListener('click', () => {

   bars = createBars();
   
});


bubblebtn.addEventListener('click', () => {

    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / heightmultiplier);

    disableButtons();

    bubble(heights).then(() => {

        enableButtons();
        console.log(heights);

    });
});

selectionbtn.addEventListener('click', () => {

    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / heightmultiplier);

    disableButtons();

    selection(heights).then(() => {

        enableButtons();
        console.log(heights);

    });
});

insertionbtn.addEventListener('click', () => {

    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / heightmultiplier);

    disableButtons();

    insertion(heights).then(() => {

        checkSorted(heights);
        enableButtons();
        console.log(heights);

    });
});

mergebtn.addEventListener('click', () => {

    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / heightmultiplier);

    disableButtons();

    mergesort(heights, 0, heights.length - 1).then(() => {

        checkSorted(heights);
        enableButtons();
        console.log(heights);

    });
});

quickbtn.addEventListener('click', () => {

    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / heightmultiplier);

    disableButtons();

    quicksort(heights, 0, heights.length - 1).then(() => {

        checkSorted(heights);
        enableButtons();
        console.log(heights);

    });
});


async function checkSorted(array) {

    for (let i = 0; i < array.length - 1; i++) {

        if (array[i] <= array[i + 1]) {

            await new Promise(resolve => setTimeout(resolve, 10));
            bars[i].style.backgroundColor = "green";

        }
    }

    bars[array.length - 1].style.backgroundColor = "green";

    console.log("Sorted");

}

function disableButtons() {

    bubblebtn.disabled = true;
    newarraybtn.disabled = true;
    selectionbtn.disabled = true;
    insertionbtn.disabled = true;
    mergebtn.disabled = true;
    quickbtn.disabled = true;

}

function enableButtons() {

    bubblebtn.disabled = false;
    newarraybtn.disabled = false;
    selectionbtn.disabled = false;
    insertionbtn.disabled = false;
    mergebtn.disabled = false;
    quickbtn.disabled = false;

}