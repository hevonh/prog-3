class GrassEater {

    constructor(x,y,index) {
    
    this.x = x;
    
    this.y = y;
    
    this.energy = 8;
    
    this.index = index;
    
    this.directions = [];
    
    }
    

    getNewCoordinates(){

        this.directions = [
        
        [this.x - 1, this.y - 1],
        
        [this.x , this.y - 1],
        
        [this.x + 1, this.y - 1],
        
        [this.x - 1, this.y ],
        
        [this.x + 1, this.y ],
        
        [this.x - 1, this.y + 1],
        
        [this.x , this.y + 1],
        
        [this.x + 1, this.y + 1]
        
        ];
        
        }

    chooseCell(character) {
    this.getNewCoordinates()
    

        var found = [];
        for (var i in this.directions) {
        
        var x = this.directions[i][0];
        
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
        if (matrix[y][x] == character) {
        
        found.push(this.directions[i]);
       

        }
    }
        }
        
        return found;
        }
        
        eat() {
            let grassesNeighb = this.chooseCell(1)
            let oneGrassN = random(grassesNeighb)
            if(oneGrassN) {
                this.energy++
                let x = oneGrassN[0]
                let y = oneGrassN[1]
                matrix[y][x]  =2
                matrix[this.y][this.x]  =0
                this.y = y
                this.x = x


                for (var i in grassArr) {

                    if (x == grassArr[i].x && y == grassArr[i].y) {
                    
                    grassArr.splice(i, 1);
                    
                    break;
                    
                    }
                    
                    }
            }else  {
                this.move()
            }
        }
        move(){
            if(this.energy>0){
                let emptyCells = this.chooseCell(0)
                let oneEmptyCell = random(emptyCells)
                if(oneEmptyCell) {
                this.energy--;
                matrix[this.y][this.x]=0
                matrix[oneEmptyCell[1]][oneEmptyCell[0]]= 2   
                this.x= oneEmptyCell[0]
                this.y= oneEmptyCell[1]
                }
            }
            else {
                this.die()
            }

        }
        die() {
            matrix[this.y][this.x] = 0
            for (var i in grassEaterArr) {
                if (this.x==grassEaterArr[i].x && this.y==grassEaterArr[i].y) {
                    grassEaterArr.splice(i,1)
                    break;
                }
            }
        }
    }
    
    