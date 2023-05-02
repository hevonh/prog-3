//`grassHelper` object@ snvume bolor objectnerov baci `grass` ic
//erb `energy` in havasarvume 0 i ayn veracvum e `grassi`
class GrassHelper {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.energy = 10;
    this.directions = [];
  }

  chooseCell(character) {
    this.getNewCoordinates();
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
      [this.x + 1, this.y + 1],
    ];
  }
  move() {
    if (this.energy > 0) {
      this.energy--;
      let emptyCells = this.chooseCell(0);
      let oneEmptyCell = random(emptyCells);
      if (oneEmptyCell) {
        matrix[this.y][this.x] = 0;
        this.x = oneEmptyCell[0];
        this.y = oneEmptyCell[1];
        matrix[this.y][this.x] = 4;
      }
    } else {
      this.die();
    }
  }
  eat() {
    this.getNewCoordinates();
    let eaterCells = this.chooseCell(2 && 3 && 5);
    var newCell = random(eaterCells);
    if (newCell) {
        matrix[this.y][this.x] =0
        this.x = newCell[0]
        this.y = newCell[1]
        matrix[this.y][this.x] = 4
        
      this.energy--;
      for (var i in predatorArr) {
        if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
          predatorArr.splice(i, 1);
          break;
        }
      }
      for (var i in grassEaterArr) {
        if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
          grassEaterArr.splice(i, 1);
          break;
        }
      }
    } else {
      this.move();
    }
  }
  die() {
    var newGrass = new Grass(this.x, this.y, this.index);
    grassArr.push(newGrass);
    matrix[this.y][this.x] = 1;

    for (var i in grassHelperArr) {
      if (this.x == grassHelperArr[i].x && this.y == grassHelperArr[i].y)
        grassHelperArr.splice(i, 1);
      break;
    }
  }
}
