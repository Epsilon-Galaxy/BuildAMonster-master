class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.LegY = 450;
        this.LegX = 425;
        this.ArmY = 400;
        this.ArmX = 400;

        this.eyeX = 325;
        this.eyeY = 300;
        this.mouthX = 300;
        this.mouthY = 350;

        this.AccX = 350;
        this.AccY = 275;

        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.leftArm = this.add.sprite(this.ArmX-200, this.ArmY, "monsterParts", "arm_darkD.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.ArmX, this.ArmY, "monsterParts", "arm_darkA.png");

        my.sprite.leftLeg = this.add.sprite(this.LegX - 200, this.LegY, "monsterParts", "leg_whiteC.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.LegX- 75, this.LegY + 25, "monsterParts", "leg_redA.png");


        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthE.png");
        my.sprite.mouth2 = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouth2.visible = false;

        my.sprite.acc1 = this.add.sprite(this.AccX, this.AccY, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.acc2 = this.add.sprite(280, 250, "monsterParts", "detail_blue_antenna_large.png")


        
    }


    update() {
        let my = this.my;    // create an alias to this.my for readability

        this.input.keyboard.on("keydown", function(event){
            console.log(event.code);
            if(event.code == "KeyF"){
                my.sprite.mouth2.visible = true;
                my.sprite.mouth.visible = false;
            }
            if(event.code == "KeyS"){
                my.sprite.mouth2.visible = false;
                my.sprite.mouth.visible = true;
            }
        })
       
    }

}