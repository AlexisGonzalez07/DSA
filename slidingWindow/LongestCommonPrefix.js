var longestCommonPrefix = function(strs) {
    let preFix = ""
    let target = ""
    //i want to iterate through each letter
    for(let letterIndex = 0; letterIndex < strs[0].length; letterIndex++){
        //create a targetPrefix from the first letter in the first word
        target = strs[0][letterIndex]
        let match = true
        let wordIndex = 0
        while(wordIndex < strs.length){
            if(strs[wordIndex][letterIndex] !== target){
                match = false
                break
            }
            wordIndex ++
        }
        if(match){
            preFix += target
        } else{
        return preFix
        }

}
            return preFix
};