var matrix 

function matrixGenerator(sideX,sideY,countG,countGE,predator,grHelp,predKiller){
    arr=[]
    for(let x=0;x<sideX;x++){
        arr.push([])
        for(let y=0;y<sideY;y++){
            arr[x].push(0)
            
        }
    }
    for(let i=0;i<countG;i++){
        let x = Math.floor(Math.random()*sideX)
        let y = Math.floor(Math.random()*sideY)
        arr[y][x]=1
    }
    for(let i=0;i<countGE;i++){
        let x = Math.floor(Math.random()*sideX)
        let y = Math.floor(Math.random()*sideY)
        arr[y][x]=2
    }
    for(let i=0;i<predator;i++){
        let x = Math.floor(Math.random()*sideX)
        let y = Math.floor(Math.random()*sideY)
        arr[y][x]=3
    }
    for(let i=0;i<grHelp;i++){
        let x = Math.floor(Math.random()*sideX)
        let y = Math.floor(Math.random()*sideY)
        arr[y][x]=4
    }
    for(let i=0;i<predKiller;i++){
        let x = Math.floor(Math.random()*sideX)
        let y = Math.floor(Math.random()*sideY)
        arr[y][x]=5
    }
    return arr

}
 var side = 50;
 var grassArr = []
 let grassEaterArr= []
 let predatorArr= []
 //my characters
 let grassHelperArr=[]
 let predKillerArr=[]
 function setup() {
    matrix = matrixGenerator(
        10, /*chaps */
        10,/*chaps */
        30,/*grass*/
        3,/*grassEater*/
        10,/*predator*/
        10,/*grassHelper*/
        8)/* predKiller*/
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#aca cac');
         	
    for(var y = 0; y < matrix.length; ++y){
        for(var x = 0; x < matrix[y].length; ++x){        
        if(matrix[y][x] == 1){
        
        var gr = new Grass(x,y,1);
        
        grassArr.push(gr);
        
        }
        
        else if(matrix[y][x] == 2){
        let grassEaterObj = new GrassEater(x,y)
        grassEaterArr.push(grassEaterObj)
        }
        else if(matrix[y][x] == 3){
            let predatorObj = new Predator(x,y)
            predatorArr.push(predatorObj)
            }
            else if(matrix[y][x] == 4){
        let grassHelperObj = new GrassHelper(x,y)
                grassHelperArr.push(grassHelperObj)
                }
                else if(matrix[y][x] == 5){
                    let predKillerObj = new PredKiller(x,y)
                            predKillerArr.push(predKillerObj)
                            }
        }
        
        }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
 
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("orange");
            }
            else if (matrix[y][x] == 5) {
                fill("pink");
            }
            rect(x * side, y * side, side, side);
        }
    }
    for(var i  in grassArr){
        grassArr[i].mul();
        }
        for(var i =0 ; i <grassEaterArr.length; i++){
            grassEaterArr[i].eat();
            }     
            for(var i =0 ; i <predatorArr.length; i++){
                predatorArr[i].eat();
                } 
                for(var i=0; i< grassHelperArr.length;i++){
                    grassHelperArr[i].eat()
                }   
                for(var i=0; i< predKillerArr.length;i++){
                    predKillerArr[i].eat()
                }
 }