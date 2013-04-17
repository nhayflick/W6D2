

var myuniq = function(array){
	var newArray = []
	for(var i in array)
	{
		if(newArray.indexOf(array[i]) == -1)
			newArray.push(array[i]);
 	}
	return newArray
};

// console.log(myuniq([1,2,2,2]))


function two_sum(array){
	// Zeros? 
	// Non zero matches? 
	for(var i in array)
	{
		var first = array.indexOf(array[i]);
		var second = array.lastIndexOf(array[i]*-1); 
		if(first != -1 && second != -1 && first != second)
			return true;
	}
	return false;
};

// console.log(two_sum([1,1,0,0]))

function my_transpose(array){
	for(var row in array)
	{
		for(col = row; col < array.length; col++)
		{
			swap(array, row, col);
			console.log(row + "," + col);
		}
	}
	return array
};

function swap(array, i,j){
	holder = array[i][j];
	array[i][j] = array[j][i];
	array[j][i] = holder;
};

// console.log(my_transpose([[0,1,2],[3,4,5],[6,7,8]]))


function multiples(array){
	var newArray = []
	for(var i in array)
		newArray.push(array[i]*2)

	return newArray
}

//console.log(multiples([1,2,3]))

Array.prototype.my_each = function(method) {
	for(var i = 0; i < this.length; i++)
	{
		method(this[i]);
	}
}

var a = [1,2,3];
// a.my_each(console.log);


Array.prototype.my_inject = function(init_value, method){
	var sum = init_value
	for(var i = 0; i < this.length; i++){
		sum = method(sum, this[i])
	}
	return sum
}

function sum(a,b){
	return a + b;
}

//console.log([1,2,3].my_inject(10, sum))

Array.prototype.bubble_sort = function() {
	var not_sorted = true;
	while (not_sorted)
	{
		not_sorted = false;
		for(var i = 0; i < this.length - 1; i++) {
			if (this[i] > this[i+1]) {
				not_sorted = true;
				swap_values(this, i, i+1)
			}
		}
	}
	return this
}

function swap_values(array, i, j){
	holder = array[i];
	array[i] = array[j];
	array[j] = holder;
};

a = [10,8,45,0];
// console.log(a.bubble_sort())

function substrings(string) {
	var substrings = []
	for(i = 0; i < string.length; i++)
	{
		for(j = i+1; j < string.length+1; j++) {
			substrings.push(string.substring(i, j));
		}

	}
	return substrings
}

// console.log(substrings("test"))

function range(start, end)
{
	if (end - start == 1)
	{
		return [start, end] 
	}
	else 
	{
		return [start].concat(range(start+1, end)) 
	}
}

//console.log(range(1,10))

function sum_recursive(array)
{
	if (array.length == 1 )
		return array[0]
	else
		return array[0] + sum_recursive(array.slice(1,array.length))
}

function sum_iterative(array) {
	return array.my_inject(0,sum)
}
// console.log(sum_recursive([1,2,3,4]))
// console.log(sum_iterative([1,2,3,4]))

function exponent_version_2(base, exp)
{
	if(exp == 0) 
		{return 1;}
	else if(exp % 2 == 0) 
		{return square(exponent_version_2(base, exp / 2));}
	else 
		{return base * square(exponent_version_2(base, (exp - 1) / 2));}
};

function square(num) { return num * num};

// console.log(exponent_version_2(4,3));

function exponent(base, exp)
{
	if(exp == 0) {return 1;}
	else {return base * exponent(base, exp - 1); };
}

//console.log(exponent(4,4));

function fibonacci_iter(n)
{
	array = [1, 1]
	if(n <= 2) {return array.slice(0,n); }

	for(i = 2; i < n; i++)
		{ 
			array.push(array[i-1] + array[i-2]);
		}

	return array
}

// console.log(fibonacci_iter(6));

function fibonacci_recur(n)
{
	if (n <= 2) 
		{
			return [1,1].slice(0,n)
		}
	else 
		{
			fib = fibonacci_recur(n-1)
			return fib.concat( fib[fib.length-1] + fib[fib.length-2] )
		}
}

// console.log(fibonacci_recur(6));

function bsearch(array, target)
{ 
	if (array.length == 1 && array[0] != target) {
		return null;
	}
	var midpoint = Math.floor(array.length/2)
	var difference = array[midpoint] - target; 

		// console.log(difference);
		// console.log(Math.floor(array.length/2)) 
		if(difference == 0) 
		{
			return midpoint;
		} else if(difference > 0) 
		{
			return bsearch(array.slice(0, midpoint), target);
		} else if(difference < 0) 
		{
			return midpoint + bsearch(array.slice(midpoint, array.length), target);
		}
	//console.log(array)
}

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
//console.log(bsearch(array, 16));

Array.prototype.merge_sort = function() 
{
	if(this.length == 1)
		return this;
	else 
	{
		var midpoint = Math.floor(this.length/2);
		var left = this.slice(0, midpoint).merge_sort();
		var right = this.slice(midpoint).merge_sort();

		arr = this.merge(left,right);
		return arr	
	}
};

Array.prototype.merge = function(array1, array2)
{
	var newArray = [];

	while (array1.length != 0 && array2.length != 0)
	{
		if(array1[0] > array2[0]){
			newArray.push(array2.shift());
		}
		else
		{
			newArray.push(array1.shift());
		}
	}
	return newArray.concat(array1).concat(array2);
};

console.log([1,4,5].merge_sort());

