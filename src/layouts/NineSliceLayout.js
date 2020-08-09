class NineSliceLayout extends ccui.Layout{
    constructor(){
        super();
        this.setContentSize(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());

        //this.createPopup();
        //this.createButton();
        this.createPauseButton();
        
    }

    createPauseButton(){
        let popUp1 = new ccui.RelativeBox();
        this.popUp1 = popUp1;
        popUp1.setAnchorPoint(cc.p(0,0));
        popUp1.setPositionType(ccui.Widget.POSITION_PERCENT);
        popUp1.setPositionPercent(cc.p(.5,.5));
        popUp1.setSizeType(ccui.Widget.SIZE_PERCENT);
        popUp1.setSizePercent(cc.p(.5,.5));

        // popUp1.setBackGroundImageScale9Enabled(true);
        // popUp1.setBackGroundImage(res.button9slicePng, ccui.Widget.LOCAL_TEXTURE);
        // popUp1.setBackGroundImageCapInsets(cc.rect(20,20,20,20))

        this.addChild(popUp1);

        let button1 = new ccui.Button(res.button9slicePng, res.button9sliceSelectedPng);

        button1.setScale9Enabled(true);
        button1.setCapInsets(cc.rect(20,20,20,20));
        button1.setContentSize(cc.size(50, 50));

        button1.setTitleFontSize(26);
        button1.setTitleFontName("Pixel");
        button1.setTitleText("||");

        let layoutParameter1 = new ccui.RelativeLayoutParameter();
        layoutParameter1.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_RIGHT);
        layoutParameter1.setMargin(0,0,0,20);
        button1.setLayoutParameter(layoutParameter1);

        button1.addClickEventListener(this.onClick1.bind(this));
        popUp1.addChild(button1);
    }

    createPopup(){
        let popUp = new ccui.RelativeBox();
        this.popUp = popUp;
        popUp.setAnchorPoint(cc.p(.5,.5));
        popUp.setPositionType(ccui.Widget.POSITION_PERCENT);
        popUp.setPositionPercent(cc.p(.5,.5));
        popUp.setSizeType(ccui.Widget.SIZE_PERCENT);
        popUp.setSizePercent(cc.p(.5,.5));

        popUp.setBackGroundImageScale9Enabled(true);
        popUp.setBackGroundImage(res.button9slicePng, ccui.Widget.LOCAL_TEXTURE);
        popUp.setBackGroundImageCapInsets(cc.rect(20,20,20,20))

        this.addChild(popUp);
    }

    createButton(){
        let popUp = this.popUp;
        let button = new ccui.Button(res.button9slicePng, res.button9sliceSelectedPng);

        button.setScale9Enabled(true);
        button.setCapInsets(cc.rect(20,20,20,20));
        button.setContentSize(cc.size(100, 50));

        button.setTitleFontSize(26);
        button.setTitleFontName("Pixel");
        button.setTitleText("Close");

        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_BOTTOM_CENTER_HORIZONTAL);
        layoutParameter.setMargin(0,0,0,20);
        button.setLayoutParameter(layoutParameter);

        button.addClickEventListener(this.onClick.bind(this));
        popUp.addChild(button);
    }

    onClick(){
        let scaleTo = new cc.ScaleTo(.2, 0);
        let callFunc = new cc.CallFunc(this.onFinish, this);
        scaleTo = new cc.EaseBackIn(scaleTo)
        this.popUp.runAction(new cc.sequence(scaleTo, callFunc));
    }

    onClick1(){
        // let scaleTo = new cc.ScaleTo(.2, 0);
        // let callFunc = new cc.CallFunc(this.onFinish, this);
        // scaleTo = new cc.EaseBackIn(scaleTo)
        // this.popUp.runAction(new cc.sequence(scaleTo, callFunc));
        // let callFunc = new cc.CallFunc(this.pauseScreen, this);
        // let scaleTo = new cc.ScaleTo(.2, 0);
        // scaleTo = new cc.EaseBackIn(scaleTo);
        // this.popUp1.runAction(new cc.sequence(scaleTo, callFunc));

        //this.pauseScreen();
        //let callFunc = new cc.CallFunc(this.getParent().pauseGame())
        this.getParent().allChildren[0].pauseGame();
        this.pauseScreen();
    }

    pauseScreen(){
        this.createPopup();
        this.createButton();
    }

    onFinish(){
        this.getParent().allChildren[0].contGame();
        this.getParent().removeChild(this.popUp);
    }
}