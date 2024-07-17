async function insertion(array){

    let n = array.length;
    let bars = document.querySelectorAll('.bar');
    
    for(let i = 0; i < n; i++){
          
        let j = i;
        let current = array[i];

        ihighlightbars(i);
 
        while(j > 0 && array[j-1] > current){

            ihighlightbars(j);
            ihighlightbars(j-1);

            array[j] = array[j-1];
            iswapbars(bars[j], bars[j-1]);

            await new Promise(resolve => setTimeout(resolve, 30));
          
            iresetbars(j);
            iresetbars(j-1);

            j--;

        }

        array[j] = current;

    }
}

function iswapbars(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
}

function ihighlightbars(index) {
    let bars = document.querySelectorAll('.bar');
    bars[index].style.backgroundColor = "red";
}

function iresetbars(index) {
    let bars = document.querySelectorAll('.bar');
    bars[index].style.backgroundColor = "rgb(44, 199, 255)";
}