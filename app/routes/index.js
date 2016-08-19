import Ember from 'ember';

export default Ember.Route.extend({
  model() {  //model hook returns a hard-coded array of questions
    return this.store.findAll('question');
  },

// route handler adds the new question to the Ember Data store
  actions: {
    save3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },

    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});


//this.store refers to the firebase date store
// findAll method with the argument question instructs Ember Data to find all records of the type question in the store, and return them to our application.


// We use the params to create a new question record in the store and then save it. We transition back to our index page and see our new question in the list.

// the route handler is the only portion of our application that should directly access model data.

//update code in plain english:
// For each key in the params,
// if it is NOT undefined,
// take the rental and set the property that matches the current key, to the value of the current key,
// after looping through all of the keys, save the rental,
// transition to the index route.
