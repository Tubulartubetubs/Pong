class PongScene extends cc.Scene{
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();

        let pongLayer = new PongLayer();
        this.addChild(pongLayer);
        
        
        let landscapeUI = new LandscapeLayout();
        let portraitUI = new PortraitLayout();
        let popup = new NineSliceLayout();
        
        this.allChildren = this.getChildren();
        
        this.addChild(landscapeUI);
        this.addChild(portraitUI);
        this.addChild(popup);
    }
}