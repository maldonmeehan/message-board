import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});


// the question-tile component will also have to pass the action upward in order for this action to eventually reach the appropriate route. question-tile will need its own update action to do this:
// To review, the update() action in question-tile is triggered when the child component, update-question calls this.sendAction('update', question, params);. This action simply takes the question and params objects and continues to pass them upwards to the index template.
// Within our index template, we'll include a line to map the update() action passed upwards from rental-tile to the corresponding update() action defined in our index route
