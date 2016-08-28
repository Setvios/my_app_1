import { Template } from 'meteor/templating';
import '../../client/layouts/homeLayout.html';
import './testTemplate.html'; 

Template.homeLayout.helpers({
	tests: [
		{ text: 'Test 1' },
		{ text: 'Test 2' },
		{ text: 'Test 3' },
		{ text: 'Test 4' },
		{ text: 'Test 5' },
		{ text: 'Test 6' },
		{ text: 'Test 7' },
	],
});
