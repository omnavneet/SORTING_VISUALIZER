async function bubble(array) {
    let n = array.length;

    let bars = document.querySelectorAll('.bar');

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            bhighlightbars(j);
            await new Promise(resolve => setTimeout(resolve, 30));

            if (array[j] > array[j + 1]) {
                
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                bswapbars(bars[j], bars[j + 1]);

            }

            bresetbars(j, j + 1);

        }
      bars[n - i - 1].style.backgroundColor = "green";
    
    }
    bars[0].style.backgroundColor = "green";  
}


function bswapbars(el1, el2) {

    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;

}

function bhighlightbars(j) {

    let bars = document.querySelectorAll('.bar');
    bars[j].style.backgroundColor = "red";
    bars[j + 1].style.backgroundColor = "red";

}

function bresetbars(j, k) {

    let bars = document.querySelectorAll('.bar');
    bars[j].style.backgroundColor = "rgb(44, 199, 255)";
    bars[k].style.backgroundColor = "rgb(44, 199, 255)";
    
}
