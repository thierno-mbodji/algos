package JAVA.BinarySearch.src;
public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        int A[] = {2,6,13,21,36,47,63};
        int result = BinarySearch(A,A.length,21);
        if(result == -1)
            System.out.println("le nombre recherché n'est pas trouvé");
                else 
                System.out.println("le nombre recherché est trouvé à l'indice "+result);
    }
    // traitement iteratif K = log2n
    public static int BinarySearch(int A[],int n,int x)
    {
        int end = n - 1;
        int start = 0;

        while(start <= end){
            int mid = start + (end - start)/2;
            if(x == A[mid]) 
                return mid;
                else if(x <  A[mid])
                    end = mid - 1;
                    else 
                        start = mid + 1;
        }
        return -1;
        
    }

    // traitement recursif O(logn)


}
