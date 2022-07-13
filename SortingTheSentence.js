/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    var words = s.split(" ");
    var ind=new Array();
    for(var i=0; i<words.length; i++)
        {
            ind.push(" ");
        }
    words.forEach(word=>{
        ind[word.substring(word.length-1)-1] = word.substring(0,word.length-1);
    })
    
    
    return ind.join(" ");
};
