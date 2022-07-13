/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    
    for(var i=0; i<nums.length; i++){
        var smallest = i;
        for(var j=i+1; j<nums.length; j++){
            if(nums[j]<nums[smallest])
                smallest =j;
        }
        var temp = nums[i];
        nums[i]=nums[smallest];
        nums[smallest]=temp;
    }
    
    var arr = new Array();
    for(var i=0; i<nums.length; i++){
        if(nums[i]==target)
            arr.push(i);
    }
        
    
    return arr;
   
};
