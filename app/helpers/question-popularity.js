import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>');
  } else if (question.get('answers').get('length') >= 4) {
    return Ember.String.htmlSafe('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>');
  } else if (question.get('answers').get('length') >= 3) {
    return Ember.String.htmlSafe('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>');
  } else if (question.get('answers').get('length') >= 2) {
    return Ember.String.htmlSafe('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>');
  } else if (question.get('answers').get('length') >= 1) {
    return Ember.String.htmlSafe('<i class="fa fa-star" aria-hidden="true"></i>');
  } else {
    return Ember.String.htmlSafe('<i class="fa fa-frown-o" aria-hidden="true"></i>');
  }
}
export default Ember.Helper.helper(questionPopularity);
