require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gabrielebagabe2001:Tsc8rePwe25IURLE@api-learn.eyefxvu.mongodb.net/test?retryWrites=true&w=majority&appName=api-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let Person;

Person = mongoose.model('Person', {
  name: String,
  age: Number,
  favoriteFoods: [String]
}, 'Person');

function createAndSavePerson(done) {
  var janeFonda = new Person({ name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"] });

  janeFonda.save((err, person) => {
    if (err) {
      console.error(err);
      if (done) done(err);
      return
    }

    console.log('Person saved:', person);
    if (done) done(null, person);
  });
}

createAndSavePerson(() => console.log('Operation completed'));

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
