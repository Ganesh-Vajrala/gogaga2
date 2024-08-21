# Skeleton Loading Feature

This project includes web pages with a manually implemented skeleton loader, designed to simulate loading states for images and text content. The skeleton loading effect helps improve the user experience by showing placeholders while the actual content is loading.

## Watch the Demo

[![Watch the Demo](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://drive.google.com/file/d/1ty7jPFU640lfSiWDfBQyABw29lnO0g6p/view)

Click the link above to watch a video demo of the skeleton loading feature.


## How to Test the Skeleton Loading

If you have a fast internet connection, the loading may occur too quickly to notice the skeleton loader. To properly experience the skeleton loading effect, you can reduce your network speed using the following steps:

1. **Open Developer Tools:**
   - Right-click on the page and select "Inspect" or press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac).
   - Navigate to the **Network** tab.

2. **Throttling Network Speed:**
   - In the Network tab, look for the "Throttling" dropdown (usually labeled as "No throttling" by default).
   - Select a slower network speed, such as "Slow 3G" or "Fast 3G".

3. **Reload the Page:**
   - Reload the page to see the skeleton loader in action.

## Description

The skeleton loader is a lightweight placeholder that appears while the actual content is being fetched and rendered. It is designed to match the shape and size of the content that will eventually load, providing a seamless and polished user experience.

### Features:
- **Customizable Timing:** The loader is set to a delay of 1-2 seconds to simulate latency.
- **Responsive Design:** The skeleton loader adapts to different screen sizes and content layouts.
- **Lazy Loading:** Images and text content are loaded lazily, improving overall performance.

### Implementation:
**HTML, CSS, and JavaScript:** The skeleton loader is implemented using basic web technologies with conditional rendering.

Feel free to explore the code and experiment with the skeleton loading feature. If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.
