function reverseArr(arr, i, n) {
	if (i >= (n - 1) / 2) return;
	swap(i, n - i - 1, arr);
	reverseArr(arr, i + 1, n);
	return arr;
}
function swap(a, b, arr) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}
// console.log(reverseArr([1, 2, 3, 4, 5, 6], 0, 6));

function checkPalendrone(str1, i, n) {
	if (!n) n = str1.length;
	if (!i) i = 0;
	//string on reversal returns true
	if (i >= n / 2) return true;
	if (str1[i] !== str1[n - i - 1]) return false;
	return checkPalendrone(str1, i + 1, n);
}
console.log(checkPalendrone("nittin"));
