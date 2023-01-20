function threeSum(arr, target) {
  //your code here
let n = arr.length;
        let i = 0;
        let closestSum = arr[0] + arr [1] + arr[n-1];   //Initially closestSum = initial triplet sum
        sort(arr.begin(),arr.end());
		// arr.sort();
        while(i < n -2){
            let j = i+1;
            let k = n-1;         
            while(j < k){
                let sum = arr[i] + arr[j] + arr[k] ;
                if(sum == target)               //if triplet sum becomes equal to target, then that is the closestSum itself
                    return sum;
                if ((target - sum) <(target - closestSum)){
                    closestSum = sum;       //if sum of current triplet is closer than target than the previous closestSum,
				}                                        //we update the closestSum value to the current triplet sum
                if(sum > target)
                    k--;
                else if(sum <target)
                    j++;
            }
            i++;
        }
        return closestSum;

}

module.exports = threeSum;
