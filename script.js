function trying(a) {
  let b = a + 2;
  return b;
} ///ALWAYS return something from a function otherwise get undefined behavior
let testing = trying(-1);

switch (testing) {
  case 1:
    console.log(`trying = -1`);
    break;
  case 2:
    console.log(`trying = 0`);
    break;
  case 3:
    console.log(`trying = 1`);
    break;
  default:
    console.log(`I don't know anything`);
}
//  switch(the case answer goes here){
// case possible answer:
//   do something
// break
//case 2:

//dont forget to add default
// }
