import { Template } from 'meteor/templating';
import { AdminData } from '../api/adminData.js';
import '../../client/layouts/adminLayout.html';

Template.adminLayout.events({
  'submit .data-add'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    const textac = target.second.value;
    const textacz = target.qty.value;

    // Insert a task into the collection
    AdminData.insert({
      text,
      textac,
      textacz,
      createdAt: new Date(), // current time
    }); 

    // Clear form
    target.text.value = '';
    target.second.value = '';
    target.qty.value = '';
  },  
});