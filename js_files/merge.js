async function merge(array, left, mid, right) {
    let bars = document.querySelectorAll('.bar');

    let n1 = mid - left + 1;
    let n2 = right - mid;

    let leftArray = new Array(n1);
    let rightArray = new Array(n2);

    for (let i = 0; i < n1; i++) {

        leftArray[i] = array[left + i];
        mhighlightbars(left + i);
        
    }

    for (let i = 0; i < n2; i++) {

        rightArray[i] = array[mid + 1 + i];
        mhighlightbars(mid + 1 + i);

    }

    await new Promise(resolve => setTimeout(resolve, 30));

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {

        if (leftArray[i] <= rightArray[j]) {

            array[k] = leftArray[i];
            updateBar(bars[k], leftArray[i]);
            await new Promise(resolve => setTimeout(resolve, 30));
            i++;

        } else {

            array[k] = rightArray[j];
            updateBar(bars[k], rightArray[j]);
            await new Promise(resolve => setTimeout(resolve, 30));
            j++;

        }

        k++;
    }

    while (i < n1) {

        array[k] = leftArray[i];
        updateBar(bars[k], leftArray[i]);
        await new Promise(resolve => setTimeout(resolve, 30));
        i++;
        k++;

    }

    while (j < n2) {

        array[k] = rightArray[j];
        updateBar(bars[k], rightArray[j]);
        await new Promise(resolve => setTimeout(resolve, 30));
        j++;
        k++;

    }

}


async function mergesort(array, left, right) {

    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    await mergesort(array, left, mid);
    await mergesort(array, mid + 1, right);
    await merge(array, left, mid, right);

}


function updateBar(el, value) {
    el.style.height = `${value * 7}px`;
}

function mhighlightbars(index) {
    let bars = document.querySelectorAll('.bar');
    bars[index].style.backgroundColor = "red";
}

function mresetbars(index) {
    let bars = document.querySelectorAll('.bar');
    bars[index].style.backgroundColor = "rgb(44, 199, 255)";
}
