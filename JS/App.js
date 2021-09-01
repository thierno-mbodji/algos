function BinarySearch(A,n,x)
{
    var end = n - 1;
    var start = 0;
    while(start <= end){
        var mid = start + (end - start)/2
        if(x === A[mid])
            return mid;
                else if(x < A[mid])
                    end = mid + 1;
                        else 
                            start = mid - 1;
    }
    return -1;
}

function FirstOccurenccy(A,n,x){
    var end = n - 1;
    var start = 0;
    var result = -1;
    while(start <= end){
        var mid = start + (end - start)/2
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
    var end = n - 1;
    var start = 0;
    var result = -1;
    while(start <= end){
        var mid = start + (end - start)/2
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

    var Tab = [2,6,13,21,36,47,63,81,97];
    var tab2 = [2,4,10,10,10,18,20];
    var s = 21;
    var t = 10;

var test1 = BinarySearch(Tab,Tab.length,s);
var test2 = FirstOccurenccy(tab2,tab2.length,t);
if(test2 === -1)
    console.log("le nombre n'est pas trouvé");
        else 
        console.log("good job");

        if(test1 === -1)
        console.log("le nombre n'est pas trouvé");
            else 
            console.log("good job");