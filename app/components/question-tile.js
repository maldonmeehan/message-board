import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  fullQuestion: Ember.computed('question.name', 'question.content', function() {
  return this.get('question.name') + ' wants to know ' + this.get('question.content');
  }),

  actions: {
      addToFavorite(question) {
        console.log(question);
        this.get('favoriteQuestions').add(question);
      }
    }
});
