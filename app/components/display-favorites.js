import Ember from 'ember';

export default Ember.Component.extend({
    favoriteQuestions: Ember.inject.service(),

    sortBy: ['point:asc'],
    sortedFavoriteQuestions: Ember.computed.sort('favoriteQuestions.questions', 'sortBy'),
});
