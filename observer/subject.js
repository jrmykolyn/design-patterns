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
		if ( typeof callback !== 'function' ) {
			throw new Error( 'Whoops, the `subscribe()` method must be invoked with a valid callback function.' );
			return;
		}

		let observer = {
			id: new Date().getTime(),
			callback,
		};

		this.observers.push( observer );

		return observer.id;
	}

	publish( data ) {
		if ( typeof data === 'undefined' ) {
			throw new Error( 'Whoops, the `publish()` method must be invoked with a valid `data` argument.' );
			return;
		}

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
