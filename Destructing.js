// Array Destructuring and Object Destructuring

// Array Destructuring
// Array destructuring allows you to unpack values from arrays or iterable objects into distinct variables.

// Example 1: Basic Array Destructuring
const actresses = ['Sreeleela', 'Rashmika Mandana', 'Rashi Khanna', 'Nivetha Thomas', 'Hansika Motwani'];
const [firstActress, secondActress, thirdActress, fourthActress, fifthActress] = actresses;
console.log(firstActress, secondActress, thirdActress, fourthActress, fifthActress);
// Output: Sreeleela Rashmika Mandana Rashi Khanna Nivetha Thomas Hansika Motwani

// Example 2: Ignoring Certain Actresses
const [bestActress, , , , stunningActress] = actresses;
console.log(bestActress, stunningActress);
// Output: Sreeleela Rashi Khanna Hansika Motwani

// Example 3: Default Values
const [popularActress, versatileActress, charmingActress, beautifulActress, newActress = 'Another Actress'] = actresses;
console.log(newActress);
// Output: Hansika Motwani

// Example 4: Swapping Actresses
let famousActress1 = 'Sreeleela', famousActress2 = 'Rashmika Mandana';
[famousActress1, famousActress2] = [famousActress2, famousActress1];
console.log(famousActress1, famousActress2);
// Output: Rashmika Mandana Sreeleela

// Example 5: Destructuring with Rest Parameter
const [leadingActress, ...otherActresses] = actresses;
console.log(leadingActress);
console.log(otherActresses);
// Output: Sreeleela
// Output: [ 'Rashmika Mandana', 'Rashi Khanna', 'Nivetha Thomas', 'Hansika Motwani' ]

// Object Destructuring
// Object destructuring allows you to extract properties from objects and bind them to variables.

// Example 1: Basic Object Destructuring
const actressInfo = {
    name: 'Rashmika Mandana',
    age: 25,
    movies: ['Geetha Govindam', 'Dear Comrade', 'Bheeshma'],
    awards: {
        filmfare: 3,
        siima: 2
    }
};
const { name: actressName, age: actressAge, movies: actressMovies, awards: actressAwards } = actressInfo;
console.log(actressName, actressAge, actressMovies, actressAwards);
// Output: Rashmika Mandana 25 [ 'Geetha Govindam', 'Dear Comrade', 'Bheeshma' ] { filmfare: 3, siima: 2 }

// Example 2: Renaming Variables
const { name: actress1Name, age: actress1Age, movies: actress1Movies, awards: actress1Awards } = actressInfo;
console.log(actress1Name, actress1Age, actress1Movies, actress1Awards);
// Output: Rashmika Mandana 25 [ 'Geetha Govindam', 'Dear Comrade', 'Bheeshma' ] { filmfare: 3, siima: 2 }

// Example 3: Default Values
const { spouse = 'Not Married' } = actressInfo;
console.log(spouse);
// Output: Not Married

// Example 4: Nested Object Destructuring
const actressProfile = {
    personalDetails: {
        height: '5 feet 6 inches',
        weight: '55 kg'
    },
    socialMedia: {
        instagram: '@rashmika_mandanna',
        twitter: '@iamRashmika'
    }
};

const { personalDetails: { height, weight }, socialMedia: { instagram, twitter } } = actressProfile;
console.log(height, weight, instagram, twitter);
// Output: 5 feet 6 inches 55 kg @rashmika_mandanna @iamRashmika

// Example 5: Destructuring Function Parameters
function displayActress({ name, age, movies }) {
    console.log(`Name: ${name}, Age: ${age}, Movies: ${movies.join(', ')}`);
}
displayActress(actressInfo);
// Output: Name: Rashmika Mandana, Age: 25, Movies: Geetha Govindam, Dear Comrade, Bheeshma

// Example 6: Destructuring with Rest Properties
const { name, ...otherInfo } = actressInfo;
console.log(name);
console.log(otherInfo);
// Output: Rashmika Mandana
// Output: { age: 25, movies: [ 'Geetha Govindam', 'Dear Comrade', 'Bheeshma' ], awards: { filmfare: 3, siima: 2 } }
