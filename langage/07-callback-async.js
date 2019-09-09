setTimeout(() => console.log('A'), 100);
setTimeout(() => console.log('B'), 200);
setTimeout(() => console.log('C'), 0);
setTimeout(() => console.log('D'), 100);
console.log('E');

// pile d'appels
// ^
// |
// |
// |
// |st - st - st - st - lg ... cbC ... cbA - cbD ... cbB
// +---------------------------3-------100-----------200---> temps
//                      E

// file d'attente de callbacks :
// 0ms : cbC
// 3ms :
// 100ms : cbA - cbD
// 101ms : cbD
// 102ms :
// 200ms : cbB
// 201ms :

