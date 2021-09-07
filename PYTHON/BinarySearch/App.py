import time
import module
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
#----------------------------------------------
debut = time.time()

liste_1 = []

for i in range(10000000):
    liste_1.append(i**2)
    

fin = time.time()
print(fin - debut)

#----------------------------List comprehension------------------------------

debut = time.time()

liste_2 = [i**2 for i in range(10000000)]

    
fin = time.time()
print(fin - debut)
#---------------dictionnaire comprehension--------------------------------

prenoms = ['thierno','ibrahima','fallou','saliou','anta']
dico_comprehension = {k:v for k, v in enumerate(prenoms) }
print(dico_comprehension)
ages = [24,35,31,78,65]
dico_2 = {prenom:age for prenom, age in zip(prenoms, ages) if age > 30}
print(dico_2)

#-------------------------------Module et package--------------------------
test_module = module.fibo(12)

            
        
    
    