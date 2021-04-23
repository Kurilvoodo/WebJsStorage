import MyCollectionLogic from './MyCollectionLogic.js';

const storage = new MyCollectionLogic();

let obj1 = { item: 'five', type: 'number' };
let obj2 = { item: 42 };
let obj3 = { item: 'TrueStringNameItDeserves' };
//_________________________________________________________________________________ADD
storage.add(obj1);
storage.add(obj2);
storage.add(obj3);
storage.add(); // failure
storage.add(null); // failure

console.log();

//_________________________________________________________________________________GETBYID
storage.getById('0');
storage.getById('1');
storage.getById('2');
storage.getById('3'); // failure
storage.getById('four'); // failure
storage.getById(); // failure


storage.getAll();

//_________________________________________________________________________________DELETEBYID
storage.deleteById('1');
storage.deleteById('2');
storage.deleteById(3); // failure
storage.deleteById(); // failure
storage.deleteById(null); // failure

console.log();

let obj4 = { item: 'fourthOne' };
storage.add(obj4);

//_________________________________________________________________________________
storage.getAll();

let obj5 = { item: 'update1!', type: 'action' };
let obj6 = { item: 'update2!' };
let obj7 = { item: 'update3!' };
let obj8 = { item: 'update4!' };
let obj9 = { item: 'update5!' };

//_________________________________________________________________________________UPDATEBYID
storage.updateById('0', obj5);
storage.updateById('3', obj6);
storage.updateById('1', obj7); // failure
storage.updateById(2, obj8); // failure
storage.updateById(obj9); // failure
storage.updateById('', ''); // failure
storage.updateById('0', 23); // failure
storage.updateById('0', obj9); // failure

// Show updates
storage.getAll();

let obj10 = { item: 'five', parity: 'no' };
storage.add(obj10);
storage.getAll();

let obj11 = { item: 'replace1!', type: 'action' };
let obj12 = { item: 'replace2!', parity: 'null' };
let obj13 = { item: 'replace3!' };
let obj14 = { item: 'replace4!' };

//_________________________________________________________________________________REPLACEBYID
storage.replaceById('0', obj11);
storage.replaceById('4', obj12);
storage.replaceById('3', obj13);
storage.replaceById('0', obj14);
storage.replaceById('0', null); // failure
storage.replaceById(null, null); // failure
storage.replaceById('2', obj14); // failure
storage.replaceById('2', ''); // failure

//show all
storage.getAll();