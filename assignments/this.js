/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding occurs by default if none othe other cases apply to the 'this' keyword. 
* 2. Implicit Binding is when a function is ivoked and there is a dot to the left of it, what is in front of that dot gives the context of what 'this' is.
* 3. Explicit Binding is when you are stating that 'this' points to a specific value bu using call, apply, or bind.
* 4. New Binding is when the 'new' keyword is used to create a new object; in these cases 'this' points specifically to it.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function opp(){
    console.log (`You down with O.P.P.? ${this.answer}...yea it's probaly best to not answer that.`);
}
opp();
const answer = 'Yea you know me!';

// Principle 2
// code example for Implicit Binding
let daGreatest = {
    name: 'Muhammad Ali',
    occupation: 'boxer',
    hometown: 'Louisville, KY',
    saying: 'float like a butterfly and sting like a bee',
    rememberedAs: function(){
        console.log(`${this.name} is the greatest ${this.occupation} there has been and ever will be. He could ${this.saying}; rumble young man rumble!`)
    }
}
daGreatest.rememberedAs();

// Principle 3
// code example for New Binding
function bond(){
    console.log(`${this.name} is the true 007.`);
}

let goldfinger = {
    name: 'Sean Connery',
    movies: 7
}

let skyfall = {
    name: 'Daniel Craig',
    movies: 5
}
 
let octopussy = {
    name: 'Roger Moore',
    movies: 7
}

bond.call(skyfall);

// Principle 4
// code example for Explicit Binding
function Throne(heir){
    this.name = heir.name,
    this.house = heir.house
}

Throne.prototype.claim = function(){
    return `I am ${this.newName} of House ${this.newHouse} and I am the rightful ruler of the seven Kingdoms!`;
}

const motherOfDragons = new Throne ({
    name: 'Daenerys',
    house: 'Targaryen',
});

const iDontWantIt = new Throne ({
    name: 'John',
    house: '...I am a bastard...no I am a Stark...fine I will be a Targaryen',
});

const crazyAF = new Throne ({
    name: 'Cersai',
    house: 'Lannister',
});

console.log(motherOfDragons.claim());