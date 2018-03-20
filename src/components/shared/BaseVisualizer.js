export default class BaseVisualizer {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.size = {
            width: canvas.width,
            height: canvas.height
        };
        this.gradient = this.ctx.createLinearGradient(0, 100, this.size.width, 0);
        this.gradient.addColorStop("0", "#AA076B");
        this.gradient.addColorStop("1.0", "#61045F");
    }
    draw(spectrum) {
        this.ctx.clearRect(0, 0, this.size.width, this.size.height);
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.size.height);
        for(let i = 0; i < spectrum.length; i++) {
            // we dont care about accuracy
            this.ctx.lineTo(i * 2, this.size.height - spectrum[i]);

        }
        this.ctx.fillStyle = this.gradient;
        this.ctx.fill();
        this.ctx.closePath();
    }
}