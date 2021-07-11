//Write a JavaScript function to check whether an `input` is an array or not

const checkArray = (item) => {
    if(Array.isArray(item))
        return true;
    else
        return false;
}

//Write a JavaScript function to clone an array

const shallowCopy = (item) => {
	const duplicate = item;
	return duplicate;
}


//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

const returnElements = (item,n) => {
	if(n < 0 || item == [])
		return [];
	else if(n == undefined){
		return item[0];
	}
	else{
		const ans = [];
		for(var i=0;i<item.length() && i<n;i++){
			ans.push(item[i]);
		}
		return ans;
	}
}

// Write a simple JavaScript program to join all elements of the following array into a string.


const joinElements = (item) => {
	let ans = "";
	item.forEach((x) => {
		ans += x + ',';
	})
	return ans.substr(0, ans.length -1);
}


// Write a JavaScript program to find the most frequent item of an array


const mostFrequentElement = (item) => {
	let max_freq = 0;
	let max_element;	
	let hashmap = {};
	item.forEach((x) => {
		if(hashmap[x]){
			hashmap[x]++;
		}else{
			hashmap[x] = 1;
		}
	})
	Object.entries(hashmap).forEach(entry => {
		const [key,value]  = entry;
		if(value > max_freq){
			maximum = value;
			max_element = key;
		}
	})
	return max_element;
}