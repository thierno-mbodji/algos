//recursif
function binarySearchIndex (array, target, low = 0, high = array.length - 1) {
    if (low > high) {
      return -1
    }
    const midPoint = Math.floor((low + high) / 2)
  
    if (target < array[midPoint]) {
      return binarySearchIndex(array, target, low, midPoint - 1)
    } else if (target > array[midPoint]) {
      return binarySearchIndex(array, target, midPoint + 1, high)
    } else {
      return midPoint
    }
  }

function binarySearch(A,n,x)
{
    let end = n - 1;
    let start = 0;
    while(start <= end){
        let mid = start + (end - start)/2
        if(x == A[mid])
            return mid;
                else if(x < A[mid])
                    end = mid + 1;
                        else 
                            start = mid - 1;
    }
    return -1;
}

function FirstOccurenccy(A,n,x){
    let end = n - 1;
    let start = 0;
    let result = -1;
    while(start <= end){
        let mid = start + (end - start)/2
        if(x === A[mid]){
            end = mid - 1;
            result = mid;
        }else if(x < A[mid])
            end = mid + 1;
                else 
                    start = mid - 1;
    }
    return result;
}

function LastOccurenccy(A,n,x){
    let end = n - 1;
    let start = 0;
    let result = -1;
    while(start <= end){
        let mid = start + (end - start)/2
        if(x === A[mid]){
            end = mid + 1;
            result = mid;
        }else if(x < A[mid])
            end = mid + 1;
                else 
                    start = mid - 1;
    }
    return result;
}

let Tab = [2,6,13,21,36,47,63,81,97];
let tab2 = [2,4,10,10,10,18,20];
let s = 21;
let t = 10;


let test2 = FirstOccurenccy(tab2,tab2.length,t);
let test1 = binarySearch(Tab,Tab.length,s);
if(test2 === -1){
    console.log("le nombre n'est pas trouvé");}
        else {
         console.log("good job");}

        
         if(test1 === -1)
             console.log("le nombre n'est pas trouvé");
            else 
             console.log("good job");