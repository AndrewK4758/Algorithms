let n = 4; //number of topics, number of rows
let m = 5; //number of attendees, number of columns
let topic = ['10101', '11100', '11010', '00101'];
/*
  [10101]
  [11100]
  [11010]
  [00101]
  */

const acmTeam = () => {
  	let len = topic.length;
	let teams = new Map();
	let maxVal;
	

    for (let i = 0; i < len; i++) {
		teams[i+1] = topic[i] || 1	
	}
	
	

};
console.log(acmTeam());