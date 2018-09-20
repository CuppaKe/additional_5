module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 > 0) return false;

    let arr = bracketsConfig.map(function(arrsmall){
		return arrsmall.join("");
	});

    for(let i = 0; i<arr.length; i++){

        if( !str.includes(arr[i])){

	     return false;
	    } else return true;

    }
 
}
