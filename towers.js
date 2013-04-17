

 // Creating a Single Tower 

function Tower(disks)
 {
 	this.disks = disks
 }

 	Tower.prototype.peek = function(){
 		return this.disks[this.disks.length-1];
 	},

 	Tower.prototype.valid = function(tower)  {
 		return this.disks.length == 0 || tower.peek() < this.peek()  ;   /// QUESTION
 	}

// Game with multiple towers 
var game = {

	towers: [ new Tower([4,3,2,1]), new Tower([]), new Tower([]) ],
				  				
	move: function(from, to) {
		if (this.towers[to].valid(this.towers[from]))
		{
			console.log("true")
			this.towers[to].disks.push(this.towers[from].disks.pop());
			return true; 
		}
		else {
			console.log("false")
			return false;
		}
	},

	win: function(){
		return this.towers[0].disks.length == 0 && (this.towers[1].disks.length == 0 || this.towers[2].disks.length == 0)
	},

	print: function(){
		console.log(this.towers[0])
		console.log(this.towers[1])
		console.log(this.towers[2])
	}
}
};


game.move(0,1);
game.print();
game.move(0,2);
game.print();
game.move(1,2);
game.print();
game.move(0,1);
game.print();

// game.print()
// console.log(game.win())
