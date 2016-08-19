import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    showAnswerForm() {
      this.set('addAnswer', true);
    },
    saveAnswer() {
      var params = {
        name: this.get('name') ? this.get('name'):"",
        content: this.get('content') ? this.get('content'):"",
        question: this.get('question')
      };
      this.set('addAnswer', false);
      this.sendAction('saveAnswer', params)
    }
  }
});
