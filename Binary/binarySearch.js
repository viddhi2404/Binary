let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let target = 8;
let start = 0;
let end = arr.length - 1;

while(start <= end){
    let mid = Math.floor((start + end)/2);

    if(arr[mid] == target){
        console.log(mid);
        break;
    }

    if(target < arr[mid]){
        end = mid - 1;
    } else if(target > arr[mid]){
        start = mid + 1;
    }
}