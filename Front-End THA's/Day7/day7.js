// Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

const listProperties = (item) =>{
	var ans = []
	Object.keys(item).map(x => {
    ans.push(x);
	})
	return ans;
}

//  Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 


const deleteKey = (item) =>{
    delete item['rollno'];
	console.log(item);
}

// Write a JavaScript program to get the length of a JavaScript object.

const getLength = (item) =>{
	return Object.keys(item).length;
}

// Write a JavaScript program to display the reading status

const displayReadingStatus = (item) => {
	item.forEach((x) => {
		console.log(x['readingStatus']);
	})
}

 // Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

 Cylinder = {
 	radius: 0,
 	height: 0,
 	volume: (radius,height)=>{
 		return (2*3.14*radius*height).toFixed(4);
 	}
}

// Write a JavaScript program to sort an array of JavaScript objects
function compare( a, b ) {
    if ( a.libraryID < b.libraryID ){
      return -1;
    }
    if ( a.libraryID > b.libraryID ){
      return 1;
    }
    return 0;
  }
  
  


var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
library.sort( compare );
console.log(library)