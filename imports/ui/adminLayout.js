import { Template } from 'meteor/templating';
import { AdminData } from '../imports/api/adminData.js';
import '../../client/layouts/adminLayout.html';

Template.adminLayout.events({
  'submit .data-add'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text1 = target.add-test.value;
    const text2 = target.add-level.value;
    const text3 = target.add-qt.value;

    // Insert a task into the collection
    AdminData.insert({
      test: text1,
      level: text2,
      quantity: text3,
      createdAt: new Date(), // current time
    }); 

    // Clear form
    //target.add-test.value = '';
    //target.add-level.value = '';
    //target.add-qt.value = '';
  },  
});