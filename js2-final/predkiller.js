//Predtor Killer
//snvum e predator nerov, kyanqi tevoxutyun@ shat karch e


class PredKiller{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    move() {
        if (this.energy > 0) {
            this.energy--
            let emptyCells = this.chooseCell(0)
            var newCell = random(emptyCells);
            if (newCell) {
                var x = newCell[0]
                var y = newCell[1]
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 5
                this.y = y
                this.x = x
            }
        }
        else {
            this.die();
        }
    }
   

    eat(){
        this.getNewCoordinates();
        let eaterCells = this.chooseCell(3)
        var newCell = random(eaterCells);
        if (newCell) {
            this.energy = 3;
            var x = newCell[0]
            var y = newCell[1]
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 5;
            this.y = y
            this.x = x
            for (var i in predatorArr) {
                if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
        }
        else{
            this.move();
        }
    }


    die() {
        matrix[this.y][this.x] = 0;
        for (var i in predKillerArr) {
            if (this.x == predKillerArr[i].x && this.y == predKillerArr[i].y)
                predKillerArr.splice(i, 1);
                break;
        }
    }
}