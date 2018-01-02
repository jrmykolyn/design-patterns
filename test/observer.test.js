// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node

// Vendor
const test = require( 'ava' );

// Project
const { PubSub, Subject } = require( '../observer' );

// --------------------------------------------------
// DECLARE TESTS
// --------------------------------------------------
test( 'Subject: It should be importable.', ( t ) => {
	t.is( typeof Subject, 'function' );
} );

test( 'Subject: It should be instantiable.', ( t ) => {
	let subject = new Subject();

	t.is( subject instanceof Subject, true );
} );

test( 'Subject: Instance should expose the `subscribe()` method.', ( t ) => {
	let subject = new Subject();

	t.is( typeof subject.subscribe, 'function' );
} );

test( 'Subject: `subscribe()` method should return a number.', ( t ) => {
	let subject = new Subject();
	let id = subject.subscribe( console.log );

	t.is( typeof id, 'number' );
} );

test( 'Subject: `subscribe()` method should error if invoked without a `callback` argument.', ( t ) => {
	let subject = new Subject();

	t.throws( () => { subject.subscribe() } );
} );

test( 'Subject: Instance should expose the `publish()` method.', ( t ) => {
	let subject = new Subject();

	t.is( typeof subject.publish, 'function' );
} );

test( 'Subject: `publish()` method should error if invoked without a `data` argument.', ( t ) => {
	let subject = new Subject();
	let id = subject.subscribe( ( data ) => {
		console.log( 'LOGGING OUT THE `data`', data );
	} );

	t.throws( () => { subject.publish() } );
} );

test( 'PubSub: It should be importable.', ( t ) => {
	t.is( typeof PubSub, 'function' );
} );

test( 'PubSub: It should be instantiable.', ( t ) => {
	let pubSub = new PubSub;

	t.is( pubSub instanceof PubSub, true );
} );

test( 'PubSub: It should expose the `subscribe() method`.', ( t ) => {
	let pubSub = new PubSub();

	t.is( typeof pubSub.subscribe, 'function' );
} );

test.todo( 'PubSub: `subscribe()` method should return a number.' );

test.todo( 'PubSub: `subscribe()` method should error if invoked without a `topic` argument.' );

test.todo( 'PubSub: `subscribe()` method should error if invoked without a `callback` argument.' );

test( 'PubSub: It should expose the `publish() method`.', ( t ) => {
	let pubSub = new PubSub();

	t.is( typeof pubSub.publish, 'function' );
} );

test.todo( 'PubSub: `publish()` method should error if invoked without a `topic` argument.' );

test.todo( 'PubSub: `publish()` method should error if invoked without a `data` argument.' );

test( 'PubSub: It should expose the `unsubscribe() method`.', ( t ) => {
	let pubSub = new PubSub();

	t.is( typeof pubSub.unsubscribe, 'function' );
} );

test.todo( 'PubSub: `unsubscribe()` method should error if invoked without an `id` argument.' );
