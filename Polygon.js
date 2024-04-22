// Define an array of points for the polygon
const points = [
    { x: 250, y: 50 },
    { x: 350, y: 50 },
    { x: 380, y: 20 },
    { x: 400, y: 10 },
    { x: 300, y: 150 }
];

// Get the polygon element
const polygon = document.getElementById('polygon');

// Function to update the points of the polygon
function updatePolygon(points) {
    // Generate the points attribute string for the polygon
    const pointsAttr = points.map(point => `${point.x},${point.y}`).join(' ');
    // Set the points attribute of the polygon
    polygon.setAttribute('points', pointsAttr);
}

// Update the points of the polygon
updatePolygon(points);
