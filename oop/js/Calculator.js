var Calculator = function(){
	this.result = 0;

	this.add   = function(arguments){
		this.result += arguments;
	}

	this.minus = function(arguments){
		this.result = this.result - arguments;
	}

	

}