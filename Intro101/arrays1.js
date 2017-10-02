var a = [1, 2, 3];
a[6] = 'abc';

//for (var i = 0; i < a.length; i++) {
//    console.log(a[i]);
//}

/*Lists all properties names in the array
*/
for (var i in a) {
    console.log(i);
}

for (var i in a) {
    console.log(a[i]);
}
