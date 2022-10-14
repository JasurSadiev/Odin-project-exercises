function bubbleSort(array){
	
    for(var i = 0; i <= array.length-1; i++){
        for(var j = 0; j < ( array.length - i -1); j++){
            if(array[j] > array[j+1]){
            var temp = array[j]
            array[j] = array[j + 1]
            array[j+1] = temp
            console.log(temp)
            }
        }
    }
    console.log(array);
}
var array = [23, 43, 12, 56, 35];
bubbleSort(array);