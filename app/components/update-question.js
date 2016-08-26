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
        point: parseInt(this.get('point'))
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
