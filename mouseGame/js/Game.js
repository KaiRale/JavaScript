class Game {
    constructor(player, enemies) {
        this._player = player;
        this._enemies = enemies;
        this._fieldGenerator = new FieldGenerator();
    }


    initStartPos(elemId){
        this.fieldGenerator.createCanvas(elemId);
        this.fieldGenerator.generateImage(this.player);
        for(let enemy in this.enemies){
            this.fieldGenerator.generateImage(this.enemies[enemy]);
            setInterval(this.fieldGenerator.clearImage.bind(this.fieldGenerator, this.enemies[enemy]), this.enemies[enemy].interval);
            setInterval(this.enemies[enemy].regenerateCoord.bind(this.enemies[enemy], this.enemies[enemy]), this.enemies[enemy].interval);
            setInterval(this.fieldGenerator.generateImage.bind(this.fieldGenerator, this.enemies[enemy]), this.enemies[enemy].interval);
        }

    }

    start(){
        document.body.addEventListener('keypress',
            this._initGameProc.bind(this));
    }
    isCollision(enemy){
        let XColl=false;
        let YColl=false;

        if ((this.player.coord[0]+5 + 40 >= enemy.coord[0]) && (this.player.coord[0]+5 <= enemy.coord[0] + 40)) XColl = true;
        if ((this.player.coord[1] + 40 >= enemy.coord[1]) && (this.player.coord[1] <= enemy.coord[1] + 40)) YColl = true;

        if (XColl&YColl){
            let playerCenter = { x: this.player.coord[0] + 40 / 2, y: this.player.coord[1] + 40 / 2 };
            let enemyCenter = { x: enemy.coord[0] + 40 / 2, y: enemy.coord[1] + 40 / 2 };
            return { x: playerCenter.x - enemyCenter.x, y: playerCenter.y - enemyCenter.y };
        }
        return false;
    }
    isEnemy(){
        for (let mouse in this.enemies){
            let collision = this.isCollision(this.enemies[mouse]);
            if (collision) {
                if (!this.enemies[mouse].eaten){
                    this.enemies[mouse].path = this.enemies[mouse].deth;
                    this.fieldGenerator.clearImage(this.enemies[mouse]);
                    this.fieldGenerator.generateImage(this.enemies[mouse]);
                    this.enemies[mouse].eaten = true;
                }
                return collision;
            }

        }
        return false;
    }


    _initGameProc(evt){
        let keyCode = evt.code;
        if (keyCode === "KeyW") { // w
            if(!(this.isEnemy().y > 0)){
                this.fieldGenerator.clearImage(this.player);
                this.player.coord[1] -= 5;
                this.fieldGenerator.generateImage(this.player);
            }
        } else if (keyCode === "KeyA") { // a

            if(!(this.isEnemy().x > 0)){
                this.fieldGenerator.clearImage(this.player);
                this.player.coord[0] -= 5;
                this.fieldGenerator.generateImage(this.player);
            }
        } else if (keyCode === "KeyD") { // d
            if(!(this.isEnemy().x < 0)){
                this.fieldGenerator.clearImage(this.player);
                this.player.coord[0] += 5;
                this.fieldGenerator.generateImage(this.player);
            }
        } else if (keyCode === "KeyS") { // s
            if(!(this.isEnemy().y < 0)){
                this.fieldGenerator.clearImage(this.player);
                this.player.coord[1] += 5;
                this.fieldGenerator.generateImage(this.player);
            }
        } else {
            console.log(evt);
        }

    }

    // getters and setters
    get player() {
        return this._player;
    }

    set player(value) {
        this._player = value;
    }

    get enemies() {
        return this._enemies;
    }

    set enemies(value) {
        this._enemies = value;
    }

    get fieldGenerator() {
        return this._fieldGenerator;
    }

    set fieldGenerator(value) {
        this._fieldGenerator = value;
    }




}