var funcaoRecursivo =function (n){
	if(n<=0){
		return 'Fim da Execução';
	};
	if(n%3!==0&&n%5!==0){
			console.log(n)
		return funcaoRecursivo(n-1)

	}
	if(n%3===0&&n%5===0){
		console.log('FizzBuzz')
		return funcaoRecursivo(n-1)
	}
	if(n%3===0){
	  console.log('Fizz')
		return funcaoRecursivo(n-1)
	}if(n%5===0){
		console.log('Buzz')
		return funcaoRecursivo(n-1)
	}

	
}
console.log(funcaoRecursivo(30))