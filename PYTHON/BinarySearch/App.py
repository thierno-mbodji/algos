print("hello world");
#fonction f(x) = x^2 lambda fonction de type Matho
f = lambda x: x**2;

def binarySearch(A,n,x):
    start = 0
    end = n - 1
    while(start <= end):
        mid = start = (end - start)/2
        if A[mid] == x:
            return mid
        elif x < A[mid]:
            end = mid - 1
        else: 
            start = mid + 1
    return -1
#------------------------------------------------------------------------
def fibonacci(n):
    a = 0
    b = 1
    while a < n:
        print(a)
        a, b = b, a+b
#----------------------------------------------------------------
#les dictionnaires en python

traduction = {
    "chien": "dog",
    "chat": "cat",
    "oiseau": "bird",
    "souris": "mouse"
}

    
            
        
    
    