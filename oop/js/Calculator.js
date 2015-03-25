var Calculator = function(){
	this.result = 0;

	this.add   = function(number){
		if(arguments.length >2 || isNaN(number))
			throw "Le paramètre passé à la méthode n'est pas correct";
		else
			this.result += number;
	}

	this.minus = function(number){
		if(arguments.length >2 || isNaN(number))
			throw "Le paramètre passé à la méthode n'est pas correct";
		else
			this.result = this.result - number;
	}

	this.divide = function(number){
		if(arguments.length >2 || isNaN(number))
			throw "Le paramètre passé à la méthode n'est pas correct";
		else
			this.result = this.result / number;
	}

	this.multiply = function(number){
		if(arguments.length >2 || isNaN(number))
			throw "Le paramètre passé à la méthode n'est pas correct";
		else
			this.result = this.result * number;
	}

}