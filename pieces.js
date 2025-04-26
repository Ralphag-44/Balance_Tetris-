let squareP;
class Square{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = squareP;
        this.mass = 1;
    }
    draw(color)
    {   context.fillStyle = color;
        context.fillRect(this.x, this.y, this.size, this.size);
    }
    translate(dx, dy)     
    {   this.x = Math.round((this.x+dx)*1000)/1000;
        this.y = Math.round((this.y+dy)*1000)/1000;
    }
}

class Piece{
    constructor(type)
    {   this.y = 0;
        this.state = 1;
        this.x = Math.round(squareP*9000)/1000;
        switch(type)
        {   case 0:
                this.x = Math.round(squareP*8000)/1000; 
                this.squares = [new Square(this.x, this.y), new Square(this.x+squareP, this.y), new Square(this.x, this.y+squareP), new Square(this.x+squareP, this.y+squareP)];
                this.color = "yellow";
                this.width = squareP*2;
                this.height = squareP*2;
                grid[grid.length-1][8] = grid[grid.length-1][9] = grid[grid.length-2][8] = grid[grid.length-2][9] = 1;
            break;
            case 1:
                this.squares = [new Square(this.x, this.y), new Square(this.x, this.y+squareP), new Square(this.x, this.y+squareP*2), new Square(this.x, this.y+squareP*3)];
                this.color = "cyan";
                this.width = squareP;
                this.height = squareP*4;
                grid[grid.length-1][9] = grid[grid.length-2][9] = grid[grid.length-3][9] = grid[grid.length-4][9] = 1;
            break;
            case 2:
                this.squares = [new Square(this.x, this.y), new Square(this.x, this.y+squareP), new Square(this.x, this.y+squareP*2), new Square(this.x+squareP, this.y+squareP*2)];
                this.color = "orange";
                this.width = squareP*2;
                this.height = squareP*3;
                grid[grid.length-1][9] = grid[grid.length-2][9] = grid[grid.length-3][9] = grid[grid.length-3][10] = 1;
            break;
            case 3:
                this.squares = [new Square(this.x, this.y), new Square(this.x, this.y+squareP), new Square(this.x, this.y+squareP*2), new Square(this.x-squareP, this.y+squareP*2)];
                this.color = "blue";
                this.width = squareP*2;
                this.height = squareP*3;
                grid[grid.length-1][9] = grid[grid.length-2][9] = grid[grid.length-3][9] = grid[grid.length-3][8] = 1;
            break;
            case 4:
                this.squares = [new Square(this.x, this.y), new Square(this.x, this.y+squareP), new Square(this.x-squareP, this.y+squareP), new Square(this.x+squareP, this.y+squareP)];
                this.color = "purple";
                this.width = squareP*3;
                this.height = squareP*2;
                grid[grid.length-1][9] = grid[grid.length-2][9] = grid[grid.length-2][8] = grid[grid.length-2][10] = 1;
            break;
            case 5:
                this.squares = [new Square(this.x, this.y), new Square(this.x, this.y+squareP), new Square(this.x-squareP, this.y+squareP), new Square(this.x+squareP, this.y)];
                this.color = "green";
                this.width = squareP*3;
                this.height = squareP*2;
                grid[grid.length-1][9] = grid[grid.length-2][9] = grid[grid.length-2][8] = grid[grid.length-1][10] = 1;
            break;
            case 6:
                this.squares = [new Square(this.x, this.y), new Square(this.x, this.y+squareP), new Square(this.x+squareP, this.y+squareP), new Square(this.x-squareP, this.y)];
                this.color = "red";
                this.width = squareP*3;
                this.height = squareP*2;
                grid[grid.length-1][9] = grid[grid.length-2][9] = grid[grid.length-2][10] = grid[grid.length-1][8] = 1;
            break;
        }
    }
    draw()
    {   for(let i = 0; (i < this.squares.length); i++)
        {   this.squares[i].draw(this.color);   
        }
    }
    translate(dx, dy)     
    {   this.x = Math.round((this.x+dx)*1000)/1000;
        this.y = Math.round((this.y+dy)*1000)/1000;
        let posy = [];
        let posx = [];
        for(let i = 0; (i < this.squares.length); i++)
        {   if(dy != 0)
            {   console.log(Math.round(21-this.squares[i].y/squareP))
                posy.push({ y: Math.round(21-this.squares[i].y/squareP),
                            x: Math.round(this.squares[i].x/squareP)});
            }
            if(dx != 0)
            {   posx.push({ y: Math.round(21-this.squares[i].y/squareP),
                            x: Math.round(this.squares[i].x/squareP)});
            }
            this.squares[i].translate(dx, dy);
        }
        if(posy.length > 0)
        {   for(let i = this.squares.length-1; (i >= 0); i--)
            {   [grid[posy[i].y][posy[i].x], grid[posy[i].y-1][posy[i].x]] = [0, 1];
            }
        }
        if(posx.length > 0)
        {   if(dx > 0)
            {   for(let i = this.squares.length-1; (i >= 0); i--)   
                {   [grid[posx[i].y][posx[i].x], grid[posx[i].y][posx[i].x+1]] = [0, 1];
                }
            }
            else
            {   for(let i = 0; (i < this.squares.length); i++)   
                {   [grid[posx[i].y][posx[i].x], grid[posx[i].y][posx[i].x-1]] = [0, 1];
                }
            }
        }
    }
}