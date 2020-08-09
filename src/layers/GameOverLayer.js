class GameOverLayer extends cc.Layer{
    constructor(){
        super();

        let size = cc.winSize;
        let gameOverLabel = new cc.LabelTTF("Game Over", 'Pixel', 64);
        gameOverLabel.x = size.width / 2;
        gameOverLabel.y = size.height / 2;
        this.addChild(gameOverLabel);

        let reStartLabel = new cc.LabelTTF("press any key to start", 'Pixel', 32);
        reStartLabel.x = size.width / 2;
        reStartLabel.y = size.height / 2 - 200;
        this.addChild(reStartLabel);
        let toMainScene = new ToMainScene();
        this.addComponent(toMainScene);
    }
}