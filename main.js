
const canvas = document.getElementById("myCanvas");

canvas.width = 200;

const ctx = canvas.getContext("2d"); // ctx means "context"
const road = new Road(canvas.width/2, canvas.width* 0.9)
const car = new Car(100, 100, 30, 50);

function animate () {
    car.update();

    canvas.height = window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}

animate();