class UpdateScore extends cc.Component{
    constructor(){
        super();
        this.setName("UpdateScore");
        this.owner = this.getOwner();
    }

    update(dt){
        let score = this.owner.score;
    }
}