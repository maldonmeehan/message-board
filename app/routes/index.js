import Ember from 'ember';

export default Ember.Route.extend({
  model() {  //model hook returns a hard-coded array of questions
    return this.store.findAll('question');
  },
});


// Here, we specify this.store to refer to the Firebase data store we've set up for our application. Then the findAll method with the argument rental instructs Ember Data to find all records of the type rental in the store, and return them to our application.


// var questions = [{
//   id: 1,
//   name: "Alex Trebek",
//   question: "Her recording career lasted just eight years, starting in 1955 with A Church, A Courtroom And Then Good-Bye."
//   //patsy cline
// }, {
//   id: 2,
//   name: "Alex Trebek",
//   question: "Other than Q, these two letters appear the least in the names of states, each appearing only once."
//   //J and z
// }, {
//   id: 3,
//   name: "Alex Trebek",
//   question: "One of the top 20, this 1946 film was based on a short story published as The Man Who Was Never Born."
//   //It's a wonderful life
// }];
