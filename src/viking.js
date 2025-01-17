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

    armyAttacker(attackerArmy, defenderArmy){
        let attacker = attackerArmy[Math.floor(Math.random()*attackerArmy.length)]
        let defenderInd = Math.floor(Math.random()*defenderArmy.length)
        let defender = defenderArmy[defenderInd]
        let r = defender.receiveDamage(attacker.attack())
        if (defender.health <= 0){
            defenderArmy.splice(defenderInd)
        }
        return r
    }

    vikingAttack(){
        return this.armyAttacker(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack(){
        return this.armyAttacker(this.saxonArmy, this.vikingArmy);
    }

    // vikingAttack(){
    //     let r = ''
    //     this.saxonArmy.map(e => r = e.receiveDamage(this.vikingArmy[0].attack()))
    //     this.saxonArmy = this.saxonArmy.filter(element => element.health > 0)
    //     return r
    // }

    // saxonAttack(){
    //     let r = ''
    //     this.vikingArmy.map(e => {return r = e.receiveDamage(this.saxonArmy[0].attack())})
    //     this.vikingArmy = this.vikingArmy.filter(element => element.health > 0)
    //     return r
    // }

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
