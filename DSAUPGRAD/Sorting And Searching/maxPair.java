public class Solution {
    public static int findMaxValue(int mat[][], int n) {
        int maxValue=Integer.MIN_VALUE;
        for (int a = 0; a < n-1; a++) 
        for (int b = 0; b < n-1; b++) 
           for (int d = a+1; d < n; d++) 
           for (int e = b+1; e < n; e++) 
             if(maxValue<(mat[d][e] - mat[a][b])) maxValue=(mat[d][e] - mat[a][b]);
        
        return maxValue;
    }
}