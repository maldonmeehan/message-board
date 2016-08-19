import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  content: DS.attr()
});

// This file is essentially a 'blueprint' listing out the attributes each of our rentals should contain. The DS in this file stands for "data store". .attr() stands for 'attribute'. This is a list of object attributes we want to save to our store for each question we add. When a DS.Model is exported, as we see in the line export default DS.Model.extend({ ... it is added to the data store. That is, it's being saved to our database.
