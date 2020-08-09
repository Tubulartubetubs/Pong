class PongLayer extends cc.LayerColor{
    constructor(){
        super(cc.color(0,100,0,255),800,700);
        this.size = this.getContentSize();

        this.score = 0;

        let paddle = new Paddle(150, 25)
        let ball = new Ball(20)
        this.addChild(paddle);
        this.addChild(ball);
        
        
        this.scheduleUpdate();
        
        this.allChildren = this.getChildren();
        
        this.paddleSpeed = 350;
        this.paddleLeft = false;
        this.paddleRight = false;
        
        this.ballSpeed={
            x: 0,//Math.floor(Math.random() * 200) + 100,
            y: 300,
        }
        
        let movePaddle = new MovePaddle();
        this.addComponent(new GameLayerResizer())
        this.addComponent(movePaddle);

        // console.log(this.allChildren[0].x, this.allChildren[1].x)
    }

    update(dt){
        super.update();
        this.ballMove(dt)
        this.paddleMove(dt)
    }

    paddleMove(dt){
        if(this.paddleRight && this.allChildren[0].x < this.size.width/2 + 330)//has not hit right wall
            this.allChildren[0].setPosition(this.allChildren[0].x + this.paddleSpeed * dt, this.allChildren[0].y);
        if(this.paddleLeft && this.allChildren[0].x > 0)//has not hit left wall
            this.allChildren[0].setPosition(this.allChildren[0].x - this.paddleSpeed * dt, this.allChildren[0].y);
    }

    ballMove(dt){
        this.allChildren[1].setPosition(this.allChildren[1].x + (this.ballSpeed.x * dt), this.allChildren[1].y - this.ballSpeed.y * dt)

        if(this.allChildren[1].x >= this.size.width-21 || this.allChildren[1].x <= 21)//change direction if hit side walls
            this.ballSpeed.x *= -1;
        if(this.allChildren[1].y >= this.size.height - 20 ||(this.allChildren[1].y <= 65 && this.allChildren[1].x>=this.allChildren[0].x && this.allChildren[1].x <= this.allChildren[0].x + 150)){//change direction if ball hits paddle or ceiling
            if((this.allChildren[1].y <= 65 && this.allChildren[1].x>=this.allChildren[0].x && this.allChildren[1].x <= this.allChildren[0].x + 150))
                this.score ++;
            this.ballSpeed.y *= -1;}
        if(this.allChildren[1].y < 0){//if ball hits bottom wall proceed to game over screen
            cc.director.runScene(new PongScene())
        }
    }

    pauseGame(){
        this.currVelocity={
            paddle: this.paddleSpeed,
            ballX: this.ballSpeed.x,
            ballY: this.ballSpeed.y
        }

        this.paddleSpeed = 0;
        this.ballSpeed.x = 0;
        this.ballSpeed.y = 0
    }

    contGame(){
        this.paddleSpeed = this.currVelocity.paddle;
        this.ballSpeed.x = this.currVelocity.ballX;
        this.ballSpeed.y = this.currVelocity.ballY;
    }

    getScore(){
        return this.score;
    }
}