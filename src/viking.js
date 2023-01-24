// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    
    receiveDamage(damage){
        this.health -= damage
    }

    attack(){
        return this.strength
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        super.receiveDamage(damage)
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else{
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    armyAttacker(attacker, defender){
        let r = ''
        defender.map(e => r = e.receiveDamage(attacker[0].attack()))
        defender = defender.filter(element => element.health > 0)
        return [r, defender]
    }

    vikingAttack(){
        let r = '';
        [r , this.saxonArmy] = this.armyAttacker(this.vikingArmy, this.saxonArmy);
        return r
    }

    saxonAttack(){
        let r = '';
        [r , this.vikingArmy] = this.armyAttacker(this.saxonArmy, this.vikingArmy);
        return r
    }

    showStatus(){
        if (!this.saxonArmy.length){
            return 'Vikings have won the war of the century!'
        }
        else if (!this.vikingArmy.length){
            return 'Saxons have fought for their lives and survived another day...'
        }
        else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
