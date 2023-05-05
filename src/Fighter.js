/* Fighter class definition */
MAX_LIFE = 100;

class Fighter {
    constructor (name, strength, dexterity) {
        // name: name of the fighter.
        this.name = name;
        // strength: will be used to calculate the damage points during an attack.
        this.strength = strength;
        // dexterity: will be used to calculate the defense points that will limit the damage received.
        this.dexterity = dexterity;
        // life: initialized to MAX_LIFE, so they all start with 100 life points.
        this.life = MAX_LIFE;
    }

    fight(defender) {
        const attack = (this.strength * Math.random()).toFixed(0);

        // attack = (0 | 1) --> FUMBLE
        if (attack - defender.dexterity <= (1 - defender.dexterity)) {
            this.life -= 1
            console.log(`${this.name} missed, stumbled and lost 1 life point 😵‍💫💔 [FUMBLE] 💛${this.life}`)
        } 

        // attack <= half the defender's dexterity --> def DODGE
        else if (attack - defender.dexterity <= -(defender.dexterity/2)) {
            console.log(`${this.name} 🗡️ ${defender.name} ➖ ${defender.name} dodged the attack 💨 💛${defender.life}`)
        }

        // attack <= defender's dexterity --> def DEFEND (thick skin | shield)
        else if (attack - defender.dexterity <= 0) {
            console.log(`${this.name} 🗡️ ${defender.name} ➖ ${defender.name} defended 🛡️ 💛${defender.life}`)
        }

        // attack > defender's dexterity --> DAMAGE
        else {
            defender.life -= attack;
            console.log(`${this.name} 🗡️ ${defender.name} ➖ Ouch! ${defender.name} 💛${defender.life > 0 ? defender.life : 0}`);
        }
    }

    isAlive() {
        if (this.life > 0) {
            return true;
        } else {
            return false;
        }
    }
}


module.exports = {Fighter}