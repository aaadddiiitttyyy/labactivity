// Player Constructor
function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

// Method to gain experience points and level up if needed
Player.prototype.gainXp = function(xp) {
    if (xp < 1 || xp > 10) {
        console.log("XP should be between 1 and 10.");
        return;
    }
    this.points += xp;
    while (this.points >= 10) {
        this.points -= 10;
        this.lvl += 1;
    }
};

// Method to describe player's stats
Player.prototype.describe = function() {
    console.log(`Player: ${this.name}, Level: ${this.lvl}, Points: ${this.points}`);
};

// Testing Q1
let player1 = new Player("Alex");
player1.describe();
player1.gainXp(5);
player1.describe();
player1.gainXp(10); // Level up
player1.describe();
