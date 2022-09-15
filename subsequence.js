// [3, 1, 2];
//[], 3,1,2,[3,1],[3,2],[1,2],[3,2],[3,1,2]
// function printSubsequence(i, arr, out = [], n) {//using recursion
// 	if (!n) n = arr.length;

// 	if (i >= n) {
// 		console.log(out);
// 		return;
// 	}
// 	// take
// 	out.push(arr[i]);
// 	printSubsequence(i + 1, arr, out, n);

// 	//not take
// 	out.pop();
// 	printSubsequence(i + 1, arr, out, n);
// }

// printSubsequence(0, [3, 1, 2]);



/* ============Power Set================ */
/* subsequence of "abc" are a,b,c,ab,ac,bc,abc,""  i.e 2^n=8   */

/* if ith bit is set in number n then we will get (n & 1<<i)!=0 */
/* for 3 (011) 0th and 2nd bit are set so  */
/* 
for abc  a =0 , b= 1 c =2

0      0 0 0   ""
1      0 0 1   "a"
2      0 1 0   "b"
3      0 1 1   "ab"
4      1 0 0   "c"
5      1 0 1   "ac"
6      1 1 0   "bc"
7      1 1 1   "abc"

powerset using bit representation
*/

function findSubSeq(str, n) {
	if (!n) n = str.length;
	let result = [];
	for (let i = 0; i < 1 << n; i++) {
        let sub = "";
		//1<<n represents 2^n
		for (let j = 0; j < n; j++) {
			if ((i & (1 << j)) != 0) {
                sub += str[j]
            }
		}
        result.push(sub);
	}
	return result;
}
console.log(findSubSeq("abc"));
