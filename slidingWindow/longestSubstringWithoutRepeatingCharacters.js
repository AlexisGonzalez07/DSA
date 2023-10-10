// 3. Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// Companies
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1){return s.length}
const have = {}
let max = 1
let start = 0
// "abcabcbb"
//     {a:1,
//     b: 1}
   //iterate through the string until the end with the end pointer
   for(let end=0; end < s.length; end++){
   //check if I have currentLetter in my map,
   //if I do, add one,
   //if I don't add it
       let rightChar = s[end]
       have[rightChar] ? have[rightChar] ++ : have[rightChar] = 1
   //if I have two of currentLetter, run a while loop and shrink the window, removing the start of the window from have (Subtract one)
   //break out of the while loop when have is one again
    while(have[rightChar] > 1){
        let leftChar = s[start]
        have[leftChar] --
        if(!have[leftChar]){
            delete have[leftChar]
        }
        start ++
    }

   //determine my new max window
    max = Math.max(end-start + 1, max)
   }
    return max
};