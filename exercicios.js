function helloWorld() {
	console.log('Hello World')
}
helloWorld()
function helloName(nome) {
	console.log('Hello ' + nome)
}
helloName('Caio')

let somaNumero= function (a, b) {
	resultado = a + b;
	console.log(resultado)
}
somaNumero(2,3)
function somaString(a, b) {
const number1=Number(a);
const number2=Number(b);
	if (typeof number1==='number'&&typeof number2==='number'){
		soma =Number(a) + Number(b)
	}
	 if(number1==='NaN'||number2!=='NaN'){
		soma = null
	}
	console.log(soma)
}
somaString(2,'4')