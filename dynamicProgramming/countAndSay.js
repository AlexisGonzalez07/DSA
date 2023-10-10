var countAndSay = function(n) {
    if(n == 1){ return "1"}
    n-=1
 
    function getValue(string, newString, runningNum){
        for(let i =0; i < string.length; i++){
            var currentNum = string[i]
            if(!runningNum || runningNum[0] === currentNum ){
                runningNum += currentNum
            } else {
                newString += runningNum.length.toString() + runningNum[0]
                runningNum = currentNum
            }    
        }
        if(runningNum){
            newString += runningNum.length.toString() + runningNum[0]
        }
        n-=1
        if(n == 0){
            return newString
        } 
        return getValue(newString, newString = "", runningNum = "")
    }
    //separate the unique numbers out and count unique numbers separate them by commas
    return getValue("1", "", "")
};