export default class BgVisualizer {
    constructor(canvas, logo, button) {
        this.canvas = canvas;
        this.logo = logo;
        this.button = button;
        this.ctx = this.canvas.getContext("2d");
        this.size = {
            width: this.canvas.width,
            height: this.canvas.height
        };
        this.gradient = this.ctx.createLinearGradient(0, 100, this.size.width, 0);
        this.gradient.addColorStop("0", "#AA076B");
        this.gradient.addColorStop("1.0", "#61045F");
    }
    draw(spectrum) {
        let average = this.average(spectrum);
        average = average / 100;
        if(average < 0.05) return;
        this.logo.style.transform = `scale(${(average + 0.2) > 0.5 ? average : average + 0.2})`;
        this.logo.style.filter = `drop-shadow(0 0 50px rgba(210, 108, 192, ${average})`;
        this.button.style.filter = `drop-shadow(0 0 50px rgba(210, 108, 192, ${average})`;
    }

    average(data) {
        let sum = 0;
        let average = 0;
        let lower = data.slice(200, 512);
        for(let i = 0; i < lower.length; i++) {
            sum += lower[i];
        }
        average = sum / lower.length;
        if(average > 100) average = 100;
        if(average < 0) average = 0;
        if(average > 49) average = average / 1.2;
        return average;
    }
}