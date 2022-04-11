function sumTheElements(theArray){
	
	var total = 0;
	for(let i = 0; i<theArray.length ; i++){

		total = theArray.reduce((a, b) => a + + b, 0);
	}
	//your code here

	return total;
}
sumTheElements([2,13,34,5]);