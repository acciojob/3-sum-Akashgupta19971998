function threeSum(arr, target) {
  //your code here
	let count=0;
	for(let i=0;i<3;i++){
		count+=arr[i];
	}
	return count;
}

module.exports = threeSum;
