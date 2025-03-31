# THETA TEAM Website


python3 -m http.server 8000 --bind 127.0.0.1 & echo $!

A static website for the THETA TEAM research group focused on AI + Medicine for Real-World Therapy Development.

## Project Structure

```
theta_website/
├── css/
│   └── styles.css
├── images/
│   └── theta-logo.svg
├── js/
│   └── main.js
├── index.html
├── server.py
└── README.md
```

## Running the Website Locally

There are several ways to run the website locally:

### Using the Python HTTP Server

1. Ensure you have Python 3 installed
2. Run the included server script:
   ```
   ./server.py
   ```
   or
   ```
   python3 server.py
   ```
3. Open your browser and navigate to: http://localhost:8000

### Using the Python Module

Alternatively, you can use Python's built-in HTTP server:

```
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Features

- Responsive design that works on desktop and mobile devices
- Interactive navigation items
- Animated gradient text effects
- Dark-themed modern interface

## Development

This is a static HTML/CSS/JavaScript website that doesn't require any build steps. 
Simply edit the files and refresh your browser to see changes.

## Customization

- Change colors in the CSS file
- Modify the logo SVG in the images directory
- Add content to the sections as needed 