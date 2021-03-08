
exports.min = function min (array) {
    if( array === undefined){
        return 0;
    }
    else if(array.length === 0){
        return 0;
    }
    else{
        array.sort(function(a, b) {
            return a - b;
        });
        return array[0];
    }
}

exports.max = function max (array) {
    if( array === undefined){
        return 0;
    }
    else if(array.length === 0){
        return 0;
    }
    else{
        array.sort(function(a, b) {
            return a - b;
        });
        return array[array.length-1];
    }
}

exports.avg = function avg (array) {
    if( array === undefined){
        return 0;
    }
    else if(array.length === 0){
        return 0;
    }
    else{
        let avg = 0;
        array.forEach(element => {
            avg +=element;
        });
        avg = avg/array.length;
        return avg;
    }
}
