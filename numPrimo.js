function ehPrimo(numero) {
	var numero1 = parseInt(numero);
	var divisores = 0;
	const resposta= '';
	for (var count = 1; count <= numero1; count++)
		if (numero1 % count == 0)
			divisores++;

	if (divisores == 2)
		resposta = 'É primo';
	else
		resposta = 'Não é primo';
	return 	resposta;
}
console.log(primo(4))