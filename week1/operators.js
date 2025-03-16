/*Assignment Operators in JavaScript
Assignment operators in JavaScript are used to assign values to variables. Here are the main ones:

Operator	Example	Equivalent To	Description
=	x = 5	x = 5	Assigns 5 to x.
+=	x += 3	x = x + 3	Adds 3 to x and assigns the result to x.
-=	x -= 2	x = x - 2	Subtracts 2 from x and assigns the result to x.
*=	x *= 4	x = x * 4	Multiplies x by 4 and assigns the result to x.
/=	x /= 2	x = x / 2	Divides x by 2 and assigns the result to x.
%=	x %= 3	x = x % 3	Assigns the remainder of x / 3 to x.
**=	x **= 2	x = x ** 2	Raises x to the power of 2 and assigns the result to x.
<<=	x <<= 1	x = x << 1	Left shifts x by 1 bit and assigns the result.
>>=	x >>= 1	x = x >> 1	Right shifts x by 1 bit and assigns the result.
>>>=	x >>>= 1	x = x >>> 1	Zero-fill right shifts x by 1 bit and assigns the result.
&=	x &= y	x = x & y	Performs bitwise AND and assigns the result to x.
`	=`	`x	= y`
^=	x ^= y	x = x ^ y	Performs bitwise XOR and assigns the result to x.*/


//Example Usage
let x = 10;

x += 5;  // x = x + 5 → x = 15
x -= 3;  // x = x - 3 → x = 12
x *= 2;  // x = x * 2 → x = 24
x /= 4;  // x = x / 4 → x = 6
x %= 5;  // x = x % 5 → x = 1
x **= 3; // x = x ** 3 → x = 1 (1^3)
