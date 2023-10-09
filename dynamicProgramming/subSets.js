// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

var subsets = function(nums) {
    var map = new Map()
    var results = [[]]
    var lastArray;
    var newSubset;
    var mapLength 
    var addMapKey= (num)=>{
        console.log("Adding new subset")
        console.log(map)
        for(const set in map){
            //for every set in our map
            //we want to get the last array,
            //we want to add the new number
            //we want to push the new array with the new number to the mapSet array
            //we want to add the new entry to our results
            if(set == num){

                continue
            }
            console.log("current map set")
            console.log(map[set])
            lastArray = map[set][map[set].length-1]
            console.log("Last array")
            console.log(lastArray)
            newSubset = [...lastArray,num]
            map[set].push(newSubset)
            console.log(map)
            results.push(newSubset)
        }
    }
    nums.forEach((number,i) => {
        map[number] = [[number]]
        results.push([number])
        j = i-2
        while(j >=0){
            results.push([nums[j],number])
            j--
        }
        addMapKey(number)
    })
    return results
};

console.log(subsets([3,2,4,1]))