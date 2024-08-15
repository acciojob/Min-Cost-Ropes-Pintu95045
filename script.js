function mincost(arr)
{ 
//write your code here
// return the min cost
	let min_cost=0;
	arr=arr.sort();
	for(let i=1;i<arr.length;i++){
		let temp=arr[0];
		let curr_cost=temp+arr[i];
		min_cost+=curr_cost;
		temp=curr_cost;
		
	}
  
}

module.exports=mincost;
