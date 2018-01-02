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
class PubSub {
	constructor() {
		this.topics = {};
	}

	// INSTANCE METHODS
	subscribe( topic, callback ) {
		if ( !this.topics[ topic ] ) {
			this.topics[ topic ] = [];
		}

		let observer = {
			id: new Date().getTime(),
			callback,
		};

		this.topics[ topic ].push( observer );

		return observer.id;
	}

	publish( topic, data ) {
		if ( this.topics[ topic ] ) {
			this.topics[ topic ].forEach( observer => observer.callback( data ) );
		}
	}

	unsubscribe( id ) {
		let removedObserver = false;

		// NOTE: Since we cannot use break/continue within `forEach()`, `removedObserver` allows us to proceed or skip subsequent checks.
		Object.keys( this.topics ).forEach( topic => {
			if ( !removedObserver ) {
				this.topics[ topic ].forEach( ( observer, index ) => {
					if ( !removedObserver ) {
						if ( observer.id === id ) {
							removedObserver = true;
							this.topics[ topic ].splice( index, 1 );
						}
					}
				} );
			}
		} );
	}
}

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = PubSub;
