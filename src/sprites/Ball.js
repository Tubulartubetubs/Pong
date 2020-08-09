class Ball extends cc.DrawNode{

    constructor(radius){
        super();
        // this.width = width;
        // this.height = height;
        this.radius = radius
    }
    onEnter(){
        super.onEnter();
        let size = this.getParent().getContentSize();
        this.drawDot(cc.p(0, 0), this.radius, cc.color(255,255,255,255));
        this.x = size.width/2;
        this.y = size.height/2 + 200;
        // this.x = 380;
        // this.y = 65;
    }

}   