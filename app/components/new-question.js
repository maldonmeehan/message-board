import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
// behavior for the button, set addNewQuestion to true or false. When true, the form will show. When false, the button will show. we will toggle what is displayed using the addNewQuestion property
    save1() {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        note: this.get('note'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});

// The save1 action collects all of the data that was entered in the input fields and sets them as values in a hash of keys with the same names. So, this.get('name') collects the value entered in the name input field and assigns it to the variable key name. After each field's value is collected, the form is hidden again by setting the addNewQuestion property to false.
// Finally, the component emits the action save2 sending with it the params hash that we just made. Remember that the component received save 2 from the index template (and this was set to "save3" which we will name the route handler's action for saving.)

// Still to be added: For fields that may be undefined, add a conditional that sets them to "" or null. Example: owner: this.get('owner') ? this.get('owner') : ""
