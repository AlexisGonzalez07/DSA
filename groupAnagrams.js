var groupAnagrams = function(strs) {
    if(strs.length ===1) {
        return [strs]
    }
    const anagramsSeen = {}
    var groupedSet = []
    var setCount = 1
    for (let i = 0; i < strs.length; i++) {
        console.log("++++++++main Loop ++++++")
        console.log(anagramsSeen)
        const loopSet = {}
        for (letter of strs[i]){
            loopSet[letter] = loopSet[letter] ? loopSet[letter] ++ : 1
        }
        loopSet.words = strs[i]
        console.log(loopSet)
        if(i === 0) {
            anagramsSeen[`set${setCount}`] = loopSet
            setCount ++
            continue
        }
        const keySetLength = Object.keys(anagramsSeen).length
        var keysSeen = 1
        for (const keySet in anagramsSeen){
            console.log("++++++++++ looping thorugh Anagrams Seen")
            var currentAnagramSet = {...anagramsSeen[keySet]}
            console.log(currentAnagramSet)
            var matches = false
            for(const keyLetter in currentAnagramSet){
                // if a letter is not there, we'll need to create a new keyLetter in anagrams Seen
                if(!(currentAnagramSet[keyLetter] && loopSet[keyLetter]) || (currentAnagramSet[keyLetter] !== loopSet[keyLetter])){
                    break
                } 
                if(keyLetter === "words"){
                    console.log("made it to end of the loop")
                    matches = true
                }
            }
            if(matches === true){
                anagramsSeen[keySet].words.push(strs[i])
                break
            } else if (keysSeen === keySetLength){
                anagramsSeen[`set${setCount}`] = loopSet
                setCount ++
                break
            } else {
                keysSeen ++
            }
        }
    }
    console.log(anagramsSeen)
};


// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))