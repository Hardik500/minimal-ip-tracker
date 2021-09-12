## Table of contents

- [Table of contents](#table-of-contents)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### The challenge

Users should be able to:

- Login using SAWO sdk (the passwordless way)
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

#### Mobile Layout:
![image](https://user-images.githubusercontent.com/28431356/132979060-18d10fe2-9677-467a-919f-363de6e0c927.png)

#### Desktop Layout
![image](https://user-images.githubusercontent.com/28431356/132979130-5e6eac57-a00d-4547-bcac-a64f8dead6b9.png)
![image](https://user-images.githubusercontent.com/28431356/132979080-69be09a1-671f-4e5a-9596-23b1d97171f5.png)


### Links

- Live Site URL: [https://hardik500.github.io/minimal-ip-tracker/](https://hardik500.github.io/minimal-ip-tracker/)

## My process

- After going through the resources provided, first I created a mock layout of the design provided
- After creating the dummy layout I added the Maps library and integrated it with the layout
- Since only the mobile-layout was provided so I created a mobile first layout and expected the desktop one to look similar with some changes here and there
- After that I integrated the IPIFY API and linked the function with the input action and useEffect, for fetching the initial user location
- Then I linked the output of IPIFY with that of the Leaflet
- After all of this got completed I started integrating the SAWO login using sawo-react and added the API keys and created a minimal workflow which just stores the current state after logging in
- After this I started the deployment using Github Pages and made the project live !!

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- Leaflet - Maps Library
- Sawo-React - Login library
- Github-Pages - Deployment
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

