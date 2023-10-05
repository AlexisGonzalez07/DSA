var twoSum = function (nums, target) {
  const valuesSeen = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    console.log(valuesSeen)
    if (nums[i] === difference && valuesSeen[difference]) {
      return [valuesSeen[difference], i];
    }
    else {
        for (const key in valuesSeen) {
        
            if ((target - nums[i]) == key){
                console.log("Found a match!")
                return [i, valuesSeen[key]]
            }
        }
    }
    valuesSeen[nums[i]] = i;
  }
};

console.log(twoSum([2,7,11,15],9))