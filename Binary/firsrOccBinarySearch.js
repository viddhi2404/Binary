let arr = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8];
let target = 2;
let start = 0;
let end = arr.length - 1;
let ans = -1;

while(start <= end){
    let mid = Math.floor((start + end)/2);

    if(arr[mid] == target){
        ans = mid;
        end = mid - 1;
    }

    if(target < arr[mid]){
        end = mid - 1;
    } else if(target > arr[mid]){
        start = mid + 1;
    }
}

console.log(ans);