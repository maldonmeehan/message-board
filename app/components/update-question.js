import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        note: this.get('note'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});


// The update action receives the question as an argument. Then, we retrieve information from the form, and package it in a params hash. Once the params are gathered, we hide the form by setting updateQuestionForm back to false, and call this.sendAction('update', question, params); to send the update() action up one level, along with the question object we will alter, and the params we've just gathered.

// Because update-question is nested within another component, question-tile, this.sendAction('update', question, params); only sends the update() action up one level. It is sent from the update-question component to its parent component, question-tile.
