const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin']);
var valuesToRemove = new Set(['Beethoven']);

function removeAll(originalSet, toBeRemovedSet) {
    toBeRemovedSet.forEach(Set.prototype.delete, originalSet);
}

console.log([...set]);
removeAll(set, valuesToRemove);
console.log([...set]);






//Output:

//[ 'Beethoven', 'Mozart', 'Chopin' ]
//[ 'Mozart', 'Chopin' ]