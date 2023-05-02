class Predator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.count = 10;
        this.directions = []
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
    chooseCell(character) {  // 
        this.getNewCoordinates()
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

    eat() {
        let grassN = this.chooseCell(1)
        let grassEN = this.chooseCell(2)
        let all = grassN.concat(grassEN)
        let oneN = random(all)
        if (oneN) {
            this.count--
            matrix[this.y][this.x] = 0
            this.x = oneN[0]
            this.y = oneN[1]
            matrix[this.y][this.x] = 3
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break;
                }
            }
            for (var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
               
            }
        } else{
            this.move()
        }
        if(this.count<=0){
            this.die()
        }
    }

    move(){
        let emptyCells = this.chooseCell(0)
        let oneEmptyCell = random(emptyCells)
        if (oneEmptyCell) {
            matrix[this.y][this.x] =0
            this.x = oneEmptyCell[0]
            this.y = oneEmptyCell[1]
            matrix[this.y][this.x] = 3
            
        }
       
    }

die(){
    matrix[this.y][this.x] =0
for (var i in predatorArr) {
        if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
           predatorArr.splice(i, 1)
            break;
        }
    }
}
        
   }