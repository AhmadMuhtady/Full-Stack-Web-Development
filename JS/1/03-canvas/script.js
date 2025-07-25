const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

//draw rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

//Draw Circle
ctx.fillStyle = 'red';
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

// draw line
ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 5;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// draw Text
ctx.font = '30px Arial';
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillText('Hello World', 300, 100, 300);
ctx.strokeText('Hello World', 300, 120, 300);
