function first(array, n) {
    if (array == null || n<=0)
    return [];
    if (n == null)
    return array[0];
    return array.slice(0, n);
}
console.log(first([3],null))
module.exports=first;
