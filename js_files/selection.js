async function selection(array) {
    let n = array.length;
    let bars = document.querySelectorAll('.bar');
     
    for (let i = 0; i < n - 1; i++) {
        
        let mini = i;
        let swapped = false;

        for (let j = i + 1; j < n; j++) {
        
            shighlightbars(i);
            shighlightbars(j);
            await new Promise(resolve => setTimeout(resolve, 30));
            
            if (array[j] < array[mini]) {

                sresetbars(mini);
                mini = j;
                shighlightbars(mini);

            } else {
                sresetbars(j);
            }
        }
        
        if (mini !== i) {

            let temp = array[i];
            array[i] = array[mini];
            array[mini] = temp;
            sswapbars(bars[i], bars[mini]);

            swapped = true;

        }
        

        sresetbars(mini);
        sresetbars(i);
        bars[i].style.backgroundColor = "green";

        if(swapped == false){

            for(let k = 0; k < n; k++){
                bars[k].style.backgroundColor = "green";
            }

            return;

        }

    }

    bars[n-1].style.backgroundColor = "green";
    
}

function sswapbars(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
}

function shighlightbars(index) {
    let bars = document.querySelectorAll('.bar');
    bars[index].style.backgroundColor = "red";
}

function sresetbars(index) {
    let bars = document.querySelectorAll('.bar');
    bars[index].style.backgroundColor = "rgb(44, 199, 255)";
}
