# Dynamic OG Image Generator

This React application allows users to create custom Open Graph (OG) images for social media sharing. Users can input a title, content, and an image URL to generate a preview and downloadable OG image.

## Features

- Dynamic creation of OG images based on user input
- Real-time preview of the post
- Downloadable PNG file of the generated OG image
- Customizable title, content, and image

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v12 or later)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository: `https://github.com/CodeSmasherLight/og-post-generator.git`
2. Navigate to the project directory: `cd og-post-generator`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. Enter a title for your post in the "Title" field.
2. Add content for your post in the "Content" field.
3. Paste an image URL in the "Image URL" field.
4. The preview will update in real-time as you type.
5. When satisfied with your post, click the "Generate PNG" button.
6. The OG image will be generated and downloaded as a PNG file.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Create React App](https://create-react-app.dev/) - Used to bootstrap the project
- [html2canvas](https://html2canvas.hertzen.com/) - Used to generate images from HTML
- [FileSaver.js](https://github.com/eligrey/FileSaver.js/) - Used to save generated images
- [React Helmet](https://github.com/nfl/react-helmet) - Used to manage document head


