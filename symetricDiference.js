/**
 *
 * Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
 * Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets
 * is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
 * For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in
 * either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 */
function sym(args) {
    var arr = Array.from(arguments);
    var symDiff = function (a , b) {
        var c =[];
        a.forEach(function (val) {
            if(b.indexOf(val)<0 && c.indexOf(val)<0){
                c.push(val);
            }
        });

        b.forEach(function (val) {
            if(a.indexOf(val)<0 && c.indexOf(val)<0){
                c.push(val);
            }
        });
        return c;
    };
    return (arr.reduce(symDiff,[]));
}
console.log(sym([3, 3, 3, 2, 5]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));

