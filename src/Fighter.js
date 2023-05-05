/* Fighter class definition */
MAX_LIFE = 30;

class Fighter {
    constructor (avatar, name, strength, dexterity) {
        this.avatar = avatar;
        // name: name of the fighter.
        this.name = name;
        // strength: will be used to calculate the damage points during an attack.
        this.strength = strength;
        // dexterity: will be used to calculate the defense points that will limit the damage received.
        this.dexterity = dexterity;
        // life: initialized to MAX_LIFE, so they all start with 100 life points.
        this.life = MAX_LIFE;
        this.heart = '💚';
    }

    fight(defender) {
        const attack = (this.strength * Math.random()).toFixed(0);

        // attack = (0 | 1) --> FUMBLE
        if (attack - defender.dexterity <= (1 - defender.dexterity)) {
            this.life -= 1
            this.colorHeart()
            console.log(`${this.avatar}${this.name} missed, stumbled and lost 1 life point 😵‍💫💔 [FUMBLE] ${this.avatar}${this.heart}${this.life}`)
        } 

        // attack <= half the defender's dexterity --> def DODGE
        else if (attack - defender.dexterity <= -(defender.dexterity/2)) {
            console.log(`${this.avatar}${this.name} 🗡️ ${defender.avatar}${defender.name} ➖ ${defender.name} dodged the attack 💨 ${defender.avatar}${defender.heart}${defender.life}`)
        }

        // attack <= defender's dexterity --> def DEFEND (thick skin | shield)
        else if (attack - defender.dexterity <= 0) {
            console.log(`${this.avatar}${this.name} 🗡️ ${defender.avatar}${defender.name} ➖ ${defender.avatar} defended 🛡️ ${defender.avatar}${defender.heart}${defender.life}`)
        }

        // attack > defender's dexterity --> DAMAGE
        else {
            defender.life -= attack - defender.dexterity;
            defender.colorHeart();
            console.log(`${this.avatar}${this.name} 🗡️ ${defender.avatar}${defender.name} ➖ Ouch! ${defender.avatar}${defender.heart}${defender.life > 0 ? defender.life : 0}`);
        }
        // console.log(`💚💛🧡❤️`)
        // console.log(`${defender.life < 20 ? '❤️' : '💛'}`)
    }

    isAlive() {
        if (this.life > 0) {
            return true;
        } else {
            return false;
        }
    }

    colorHeart() {
        this.heart = this.life > MAX_LIFE * 0.75 ? '💚' :  this.life > MAX_LIFE * 0.5 ? '💛' :  this.life > MAX_LIFE * 0.2 ? '🧡' : '❤️';
    }
}


module.exports = {Fighter}