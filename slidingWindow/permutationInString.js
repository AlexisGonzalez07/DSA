var checkInclusion = function (s1, s2) {
    if(s1.length === 1 && s2.includes(s1)){
        return true
    }
  var need = new Map();
  for (var letter of s1) {
    need[letter] ? need[letter]++ : (need[letter] = 1);
  }
  console.log(need);
  var have = {}
  function compareKeys() {
    console.log("Comparing keys");
    console.log(have);
    var invalid = false
    for (letter in have) {
      if (have[letter] > need[letter]) {
        invalid = true
      }
    }
    if(invalid){
        have = {}
        return "invalid"
    }
    var continueOrSolved = "continue";
    var neededLetters = Object.keys(need).length;
    console.log(neededLetters)
    var haveLetters = Object.keys(have).length;
    console.log(haveLetters)
    if (neededLetters !== haveLetters) {
      console.log("need to continue");
      return continueOrSolved;
    }
    console.log("determining if solved");
    console.log(have)
    var letterCount = 1;
    for (letter in have) {
        console.log("My letter: ", have, "has count: ", have[letter])
      if (letterCount === neededLetters && have[letter] === need[letter]) {
        continueOrSolved = "solved";
      } else if (have[letter] === need[letter]) {
        letterCount++;
        continue;
      } else {
        return continueOrSolved;
      }
    }
    return continueOrSolved;
  }

  for (let i = 0; i < s2.length; i++) {
    console.log("current letter is: ", s2[i], " at index ", i)
    var currentLetter = s2[i];
    if (!need[currentLetter]) {
        continue
    }
    have[currentLetter] ? have[currentLetter]++ : (have[currentLetter] = 1);
    console.log(have)
    var canContinue = true;
    let j = i+1
    while (canContinue && j <s2.length) {
        var nextLetter = s2[j];
        if (!need[nextLetter]) {
            have = {};
            canContinue = false;
            break;
        }
        have[nextLetter] ? have[nextLetter]++ : (have[nextLetter] = 1);
        var status = compareKeys();
        if (status === "invalid") {
          have = {}
          canContinue = false;
          break;
        } else if (status === "solved") {
          return true;
        }
      }
  }
  return false;
};

// console.log(checkInclusion("hello", "ooolleoooleh"));
console.log(checkInclusion("adc", "dcda"));