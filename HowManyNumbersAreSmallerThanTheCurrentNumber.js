/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var arr = new Array();
    for(var i=0; i<nums.length; i++)
    {
        var cnt = 0;
        for(var j=0; j<nums.length; j++)
            {
                if(nums[j]<nums[i])
                        cnt++;
            }
        arr.push(cnt);
    }
    return arr;
};
