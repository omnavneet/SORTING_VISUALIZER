async function partition(array, left, right){
    
    let bars = document.querySelectorAll('.bar');
    
    let pivot = array[left];
    bars[left].style.backgroundColor = "blue";
    let i = left;
    let j = right;

    while(i < j){
        
        while(array[i] <= pivot && i <= right - 1){
            i++;
        }

        while(array[j] > pivot && j >= left + 1){
            j--;
        }

        if(i < j){
            
            qhighlightbars(i);
            qhighlightbars(j);

            await new Promise(resolve => setTimeout(resolve, 50));

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

            qswapbars(bars[i], bars[j]);
            
            qresetbars(i);
            qresetbars(j);

        }

    }
    
    qhighlightbars(left);
    qhighlightbars(j);
     
   

    let temp2 = array[left];
    array[left] = array[j];
    array[j] = temp2;
    
    await new Promise(resolve => setTimeout(resolve, 50));

    qresetbars(left);
    qresetbars(j);

    qswapbars(bars[left], bars[j]);

    return j;

}

async function quicksort(array, left, right){

    if(left < right) {

    let pivot = await partition(array, left, right);
    await quicksort(array, left, pivot - 1);
    await quicksort(array, pivot + 1, right);
   } 

}

function qswapbars(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
}

function qhighlightbars(index) {
    let bars = document.querySelectorAll('.bar');
    bars[index].style.backgroundColor = "red";
}

function qresetbars(index) {
    let bars = document.querySelectorAll('.bar');
    bars[index].style.backgroundColor = "rgb(44, 199, 255)";
}
