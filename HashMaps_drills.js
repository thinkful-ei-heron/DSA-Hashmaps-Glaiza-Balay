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







