class Balance
{   constructor()
    {   this.x = canvas.width/2;
        this.radius = canvas.width/2;
        this.y = canvas.height-this.radius;
        this.angle = 0;
        this.massCenter;
        this.torqueTotal = 0;
    }
    draw()
    {   context.fillStyle = "Cyan";
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0+(Math.PI/180*this.angle), Math.PI+(Math.PI/180*this.angle), 0)
        context.closePath();
        context.fill();
    }
    update()
    {   this.centerMass();
        if(this?.massCenter)
        {   let limitador = 2;
            if(Math.abs(Math.trunc(this.angle)) == Math.abs(Math.trunc(this.torqueTotal*limitador)) && Math.sign(this.angle) == Math.sign(this.torqueTotal))
            {   this.angle = this.torqueTotal*limitador;
            }
            else
            {   if(Math.abs(this.angle) < Math.abs(this.torqueTotal*limitador))
                {   this.angle += this.torqueTotal/20;
                }
                else
                {   if(Math.sign(this.angle) == Math.sign(this.torqueTotal))
                    {   this.angle -= this.torqueTotal/20;
                    }
                    else
                    {   this.angle += this.torqueTotal/20;
                    }
                }
            }
        }
        else
        {   if(Math.trunc(this.angle) != 0)
            {   this.angle += this.angle*-1/20;    
            }
            else
            {   this.angle = 0;
            }
        }
        if(Math.abs(this.angle) > 35)
        {   window.location.reload();
        }
    }
    centerMass() {
        this.torqueTotal = 0;
        for (let i = 0; i < pieces.length; i++) {
            if(pieces[i].state)
            {   let totalMass = 0;
                for(let j = 0; (j < pieces[i].squares.length); j++)
                {   let distance = Math.ceil((pieces[i].squares[j].x + pieces[i].squares[j].size/2) / (canvas.width / gridS)) - Math.ceil(gridS/2);
                    totalMass += pieces[i].squares[j].mass * distance  * gravity;
                }
                this.torqueTotal += totalMass;
            }
        }
        this.massCenter = this.torqueTotal;
    }
    
}
