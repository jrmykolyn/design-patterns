// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node

// Vendor

// Project

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------

// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
class Subject {
	constructor() {
		this.observers = [];
	}

	// INSTANCE METHODS
	subscribe( callback ) {
		let observer = {
			id: new Date().getTime(),
			callback,
		};

		this.observers.push( observer );

		return observer.id;
	}

	publish( data ) {
		this.observers.forEach( ( o ) => {
			if ( o && typeof o.callback === 'function' ) {
				o.callback( data );
			}
		} );
	}
}

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = Subject;
