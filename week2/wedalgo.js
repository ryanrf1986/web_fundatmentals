var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

function flatten(arr2d) {
    var flat = [];
}           
console.log(arr2d.flat(3));

var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);




function flatten(arr2d) {
    var flat = [];
    for (var i=0; i<arr2d.length; i++){
        console.log(arr2d[i])
        for( var j= 0; j<arr2d[i].length; j++){
            flat.push(arr2d[i][j]);
        }
    }

    // your code here
    // nested loop
    // push the numbers to flat
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result);// we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]