// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const {Fighter} = require('./src/Fighter.js');

const heracles = new Fighter("🧔", "Heracles", 20, 6);
const lion = new Fighter("🦁", "Nemean Lion", 11, 13);

console.log(`${heracles.avatar}${heracles.name}\t${lion.heart} ${heracles.life}`);
console.log(`${lion.avatar}${lion.name}\t${lion.heart} ${lion.life}`);
console.log('\n⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️\n');
let round = 1;
const intervalID = setInterval(() => {
    console.log(`🕛 Round ${round} 🔔`);
    heracles.fight(lion);
    if (!lion.isAlive()) {
        console.log('\n⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️\n');
        console.log(`💀 ${lion.avatar}${lion.name} is dead`);
        console.log(`🏆 ${heracles.avatar}${heracles.name} wins! (${heracles.heart}${heracles.life})`);
        if (lion.life < 0) {
            console.log('💀💀💀 FATALITY 💀💀💀');
        }
        clearInterval(intervalID);
    } else {
        lion.fight(heracles);
        if (!heracles.isAlive()) {
            console.log('\n⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️➖⚔️\n');
            console.log(`💀 ${heracles.avatar}${heracles.name} is dead`)
            console.log(`🏆 ${lion.avatar}${lion.name} wins! (${lion.heart}${lion.life})`)
            if (heracles.life < 0) {
                console.log('💀💀💀 FATALITY 💀💀💀')
            }
            clearInterval(intervalID);
        } else {
            console.log('');
        }
    }
    round++;


}, 600);

// In the index.js file, create a loop for performing a fight to the death! As long as one of the two enemies has a health > 0, the combat therefore continues.

// In each "round" 🕛, Heracles attacks the lion, then the lion attacks Heracles. You have to display the round number, who attacks who, and the remaining life points.

// When one of the two is defeated, you must then display the winner 🏆 and the loser 💀. The screenshot below gives you a summary of what to expect.
