var Calculator = function(){
	this.result = 0;

	this.add   = function(arguments){
		this.result += arguments;
	}

	this.minus = function(arguments){
		this.result = this.result - arguments;
	}

	this.divide = function(arguments){
		this.result = this.result / arguments;
	}

	this.multiply = function(arguments){
		this.result = this.result * arguments;
	}

}