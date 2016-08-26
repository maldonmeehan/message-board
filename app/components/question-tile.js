import Ember from 'ember';

export default Ember.Component.extend({
  fullQuestion: Ember.computed('question.name', 'question.content', function() {
  return this.get('question.name') + ' wants to know ' + this.get('question.content');
}),

});
