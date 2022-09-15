function fibonacii(n) {
	//find nth fibonacci number
	if (n <= 1) return n;
	let last = fibonacii(n - 1);
	let slast = fibonacii(n - 2);
	let result = last + slast;
	return result;
}

console.log(fibonacii(7));

//0 1 1 2 3 5 8
