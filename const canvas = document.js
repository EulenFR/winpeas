const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

context.fillStyle = 'green';
context.fillRect(0, 0, canvas.width, canvas.height);
