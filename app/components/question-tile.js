import Ember from 'ember';

export default Ember.Component.extend({
  favoriteCart: Ember.inject.service(),

  actions: {
      addToCart(question) {
        this.get('favoriteCart').add(question);
      },

  fullQuestion: Ember.computed('question.name', 'question.content', function() {
  return this.get('question.name') + ' wants to know ' + this.get('question.content');
  }),
});
