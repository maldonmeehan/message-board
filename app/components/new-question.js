import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
        name: this.get('name')  ? this.get('name'): "",
        content: this.get('content')  ? this.get('content'): "",
        note: this.get('note')  ? this.get('note'): "",
        point: this.get('point')  ? this.get('point'): ""
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
