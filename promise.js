if(typeof Promise == 'undefined'){
	window.Promise = function(callback){
		this.callback = callback;
		this.resolve = null;
		this.reject = null;
		this.catch_callback = null;
		this.func = function(){};
		this.init();
		return this;
	}

	Promise.prototype = {
		init: function(){
			setTimeout((function(){
				try {
					this.callback.apply(null, [this.resolve || this.func , this.reject || this.func]);
				} catch (error){
						(this.catch_callback || this.func)(error.message || error, error);
				}
			}).bind(this), 0);
			return this;
		},
		then: function(){
			this.resolve = arguments[0];
			this.reject = arguments[1];
			return this;
		},
		catch: function(){
			this.catch_callback = arguments[0];
			return this;
		}
	};
}