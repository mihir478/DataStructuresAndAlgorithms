function mergeSort(a) {
    if(a.length < 2)
        return a
    else {
        var m = a.length / 2
        var left = a.splice(0, m)
        return merge(mergeSort(left), mergeSort(a))
    }
}

function merge(left, right) {
    const result = []
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right] // left over elements in left or right
}