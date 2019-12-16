const HashMap = require('./HashMap');


function main() {
  
  let lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set('hobbit', 'bilbo');
  lotr.set('hobbit', 'frodo');
  lotr.set('wizard', 'gandolf');
  lotr.set('human', 'aragon');
  lotr.set('elf', 'legolas');
  lotr.set('maiar', 'The Necromancer');
  lotr.set('maiar', 'sauron');
  lotr.set('ringbearer', 'gollum');
  lotr.set('ladyoflight', 'galadriel');
  lotr.set('halfelven', 'arwen');
  console.log(lotr);
  lotr.get('hobbit');
  lotr.get('maiar'); 
  /**
   * the values for maiar and hobbit are equal to the last value
   * set for them. this is because the last value given replaces
   * the previous value.
   */
  /**
   * the capacity after all items are added is still the initial
   * capacity of 8. this is because we have 8 items added and that is 
   * not greater than the capacity. if we wanted to add more, we need
   * to increase the capacity to accomodate. If you add more items 
   * without increasing the capacity the index that the new item is added
   * at will be "undefined".
   */
  
}

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap(); //create a new hashmap
  map1.set(str1,10); //set a new key/value pair {'Hello World.': 10}
  map1.set(str2,20); //changes the value of 'Hello World' to 20
  let map2 = new HashMap(); //create another hashmap
  let str3 = str1; //set str3 to 'Hello World.';
  let str4 = str2; //set str4 to 'Hello World.';
  map2.set(str3,20); //set value of 'Hello World.' to 20
  map2.set(str4,10); //change the value of 'Hello World.' to 10

  console.log(map1.get(str1)); //returns 20
  console.log(map2.get(str3));//returns 10
};

//4. Remove duplicates 
function removeDuplicates(str) {
  let map = new HashMap();

  for(let i=0; i< str.length; i++) {
    map.set(str[i], str[i]);
  }
  // console.log(map);

  let result = '';
  for(let i=0; i< map._hashTable.length; i++) {
    if(map._hashTable[i]){
      result += map._hashTable[i].value;
    }
  }
  //console.log(result); //result = lego
  
  //sorting
  let sort =  '';
  for(let i=0; i< str.length; i++) {
    if(result.includes(str[i]) && !sort.includes(str[i])) {
      sort += str[i];
    }
  }
  // console.log(sort);
  return sort;

}
removeDuplicates('google');

//5. Any permutation a palindrome
function palindrome(str) {
  let map = new HashMap();
  
  for(let i=0; i<str.length; i++) {
    map.set(str[i],str[i]);
  }
 
  if(str.length / map.length <= 2 && str.length / map.length !== 1) {
    return true;
  } else {
    return false;
  }

}
//console.log(palindrome('acecarr'));

//#6 Anagram grouping
function groupAnagrams(arr) {
    let map = new HashMap();
    for (let idx in arr) {
      let sorted = arr[idx].split('').sort().join('');
      let anagrams;
      try{
        anagrams = map.get(sorted);
      } catch(e) {
        anagrams = [];
      }
      anagrams.push(arr[idx]);
      map.set(sorted, anagrams);
    }

    let results = [];
    for(let i in map._hashTable) {
        results.push(map._hashTable[i].value);
    }
    return results;
  }
  
console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));

function anagrams(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let tempArr = [];
    let curr = arr[i];
    tempArr.push(curr);
    for (let j = 0; j < arr.length; j++) {
      if (curr !== arr[j]) {
        if (isAnagram(curr, arr[j])) {
          tempArr.push(arr[j]);
        }
      }
    }
    result.push(tempArr);
  }

  return result;


}


function isAnagram(str1, str2) {
  let map1 = new HashMap();
  let map2 = new HashMap();

  for (let i = 0; i < str1.length; i++) {
    map1.set(str1[i], str1[i]);
  }

  for (let i = 0; i < str2.length; i++) {
    map2.set(str2[i], str2[i]);
  }

  for(var i in map1._hashTable){
    try{
      map2.get(map1._hashTable[i].key);
    }catch(e){
      return false;
    }
  }
  return true;
  
}

anagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']);

//console.log(isAnagram('eaht', 'teas'));