
let num1 = 999;
let num2 = 999;
let arr = [];

function check(x, y)
{
	if(String(x*y) == String(x*y).split("").reverse().join(""))
	{
		return true;
	}
return false;
}

for(let i=0; i<1000000; i++)
{
	if(check(num1, num2))
	{
		arr.push(num1*num2);
		num1--;
		num2 = num1+1;
	}
num2--;
}

console.log(arr.sort((x, y) => y-x)[0]);