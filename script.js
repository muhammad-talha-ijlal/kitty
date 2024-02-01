function fetchRandomImage() {
    // Generate random width and height
    const width = getRandomNumber(200, 800); // Adjust the range as needed
    const height = getRandomNumber(200, 600); // Adjust the range as needed

    // Construct the image URL based on the generated width and height
    const imageUrl = `https://placekitten.com/${width}/${height}`;

    // Display the image on the webpage
    displayImage(imageUrl);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayImage(imageUrl) {
    // Create an image element
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = 'Cattyyyyy';

    // Get the result div and append the image element
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous content
    resultDiv.appendChild(imageElement);
}
