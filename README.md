# Shout-out Generator Kit

A shout-out image generation API template.

It generates an image with a thank your message and a contour background. Each contour is unique and derived from the username.

![image demo](https://user-images.githubusercontent.com/42671/107864759-8b9f7900-6e2d-11eb-8325-b54c4111d1f7.png)

## Usage

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/storybookjs/shout-out-kit)

Click in the Deploy to Netlify button above to create your own site directly and push this repository to your own account.

Once deployed, try navigating to `https://your_app.netlify.app/image?id=GITHUB_USERNAME`.

## Architecture

The whole thing is powered by an image generation API. The shout-out image is implemented as a React component. A Netlify Functions handles the requests, spins-up a headless browser with Playwright to screenshot the DOM 📸 And returns an image.

![shout-out-generator-workflow](https://user-images.githubusercontent.com/42671/108220726-0950d680-7105-11eb-889c-555837b996e2.jpg)

It's a pared back version of Christopher Biscardi's wonderful [Building an OpenGraph image generation API](https://egghead.io/playlists/building-an-opengraph-image-generation-api-with-cloudinary-netlify-functions-and-react-914e) course.

The build setup is configured via the `Makefile`.

### Run it locally

```bash
$ cd image-component
$ npm i
$ npm run storybook
```
