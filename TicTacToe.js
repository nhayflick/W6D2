var game = {
	this.board = [["", "", ""],
								["", "", ""],
								["", "", ""]];

	this.place_piece = function(letter, loc) {
		if this.valid_loc(loc){
			this.at(loc) = letter;
			return true;
		}
		else 
			return false; 
	};

	this.turn = "X";

	this.valid_loc = function(loc){
		loc[0] >= 0 && loc[0] <= 2 && loc[1] >= 0 && loc[1] <= 2 && this.at(loc) == ""; 
	};
	this.at = function(loc){
		return board[loc[0]][loc[1]];
	};

	this.check_win = function() {
		// HORIZONTALS && VERTICALS. 
		for(i = 0; i <= 2; i ++) {
			if (this.at(i,0) == this.at(i, 1) && this.at(i, 2) == this.at(i, 1) && this.at(i, 0) != "")
				return true;
			if (this.at(0, i) == this.at(1, i) && this.at(2, i) == this.at(i, 1) && this.at(0, i) != "")
				return true;
		}
		// DIAGONALS.
		if (this.at(0,0) == this.at(1, 1) && this.at(1, 1) == this.at(2, 2) && this.at(0, 0) != "")
				return true;
		if (this.at(0,2) == this.at(1, 1) && this.at(1, 1) == this.at(2, 0) && this.at(0, 2) != "")
				return true;
		
		return false;
	}:
};