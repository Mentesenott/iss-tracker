// Function to fetch the ISS position
async function fetchISSPosition() {
  const response = await fetch('http://api.open-notify.org/iss-now.json');
  const data = await response.json();
  
  const latitude = data.iss_position.latitude;
  const longitude = data.iss_position.longitude;

  document.getElementById('latitude').textContent = `Latitude: ${latitude}`;
  document.getElementById('longitude').textContent = `Longitude: ${longitude}`;
}

// Fetch ISS position on page load
fetchISSPosition();

// Refresh position on button click
document.getElementById('refresh-btn').addEventListener('click', fetchISSPosition);
