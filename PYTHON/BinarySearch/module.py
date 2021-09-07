import math
import random
import statistics
import os
import glob

def fibo(n):
    a,b = 0,1
    fib = []
    while a<n:
        fib.append(a)
        a, b = b, a+b
        
    return fib