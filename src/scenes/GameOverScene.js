class GameOverScene extends cc.Scene{    
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
        
        let gameOverLayer = new GameOverLayer();
        this.addChild(gameOverLayer)
    }
}