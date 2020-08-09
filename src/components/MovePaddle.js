class MovePaddle extends cc.Component{
    constructor(){
        super();
        this.setName("MovePaddle");
    }
    
    onEnter(){
        super.onEnter();
        this.listener = cc.EventListener.create({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: this.onKeyPressed,
            onKeyReleased: this.onKeyReleased
        });
        cc.eventManager.addListener(this.listener, this.getOwner());

        //this.getOwner.setContentSize(cc.winSize);
    }

    onKeyPressed(key, event){
        if(key == 39){
            event.getCurrentTarget().paddleRight = true;
        }
        if(key == 37){
            event.getCurrentTarget().paddleLeft = true;
        }
    }

    onKeyReleased(key, event){
        if(key == 39){
            event.getCurrentTarget().paddleRight = false;
        }
        if(key == 37){
            event.getCurrentTarget().paddleLeft = false;
        }
    }
}