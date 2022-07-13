/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    var dist = new Array();
    for(var i=0; i<points.length; i++){
        
            dist.push(Math.sqrt((points[i][0]*points[i][0])+(points[i][1]*points[i][1])));
        
    }
    var arr = points;
    for(var i=0; i<dist.length; i++){
        var smallest = i;
        for(var j=i+1; j<dist.length; j++){
            if(dist[j]<dist[smallest])
                smallest=j;
        }
        var temp1=dist[i], temp2=arr[i];
        dist[i]=dist[smallest];
        arr[i]=arr[smallest];
        dist[smallest]=temp1;
        arr[smallest]=temp2;
       
    }
   var final = new Array();
    for(var i=0; i<k; i++){
        final.push(arr[i]);
    }
    return final;
    
};
