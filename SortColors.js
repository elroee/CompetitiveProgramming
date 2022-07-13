/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  for(var i=0; i<nums.length; i++){
      var smallest = i;
      for(var j=i+1; j<nums.length; j++){
          if(nums[j]<nums[smallest])
            smallest=j
      }
      var temp = nums[i];
      nums[i]=nums[smallest];
      nums[smallest]=temp;
  }
};
