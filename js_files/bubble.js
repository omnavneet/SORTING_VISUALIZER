async function bubble(array) {
    let n = array.length;

    let bars = document.querySelectorAll('.bar');
    let didsort = false;

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            bhighlightbars(j);
            

            if (array[j] > array[j + 1]) {
                
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                await bswapbars(bars[j], bars[j + 1]);

                didsort = true;

            }
          
            bresetbars(j, j + 1);

        }

        if(didsort == false) {
           
           for(let k = 0; k < n; k++){
           bars[k].style.backgroundColor = "green";
           }

           return;

        }

      bars[n - i - 1].style.backgroundColor = "green";
    
    }

    bars[0].style.backgroundColor = "green";

}


async function bswapbars(el1, el2) {

    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;

    await new Promise(resolve => setTimeout(resolve, 30));

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
