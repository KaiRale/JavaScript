class FieldGenerator {
    createCanvas(elemId){
        let field = document.getElementById(elemId);
        this.canvas = document.createElement('canvas');
        this.canvas.height = 966;
        this.canvas.width = 966;
        this.canvas_context = this.canvas.getContext('2d');
        field.appendChild(this.canvas);
    }

    generateImage(image){
       if (image.eaten) {
           return;
       }
        let img = new Image();
        img.src = image.path;

        let self = this;
        img.onload = function () {
            self.canvas_context.drawImage(img,
                image.coord[0],
                image.coord[1],
                40, 40
            );
        }
    }

    clearImage(image){
        if (image._eaten) {
            return;
        }
        this.canvas_context.fillStyle = "#fff";
        this.canvas_context.fillRect(
            image.coord[0],
            image.coord[1],
            40, 40
        );
    }

    
}