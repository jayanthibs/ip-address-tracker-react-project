<h1 align="center">IP Address Tracker</h1>

A responsive React application that allows users to search for any IP address and view detailed location information along with an interactive map. The app fetches geolocation data from the Geo.IPify API and automatically shows the user’s current IP and location on initial load.

## Live Demo:

## Overview

The IP Address Tracker lets users enter an IP address and instantly retrieve information such as:
- Geographic location (city, region, postal code)
- Timezone
- Internet Service Provider (ISP)
The location is also displayed on an interactive map using Leaflet. The app is fully responsive for mobile, tablet, and desktop devices.

## Installation & setup

### Clone the repository:
````bash
git clone https://github.com/jayanthibs/ip-address-tracker-react-project.git
````
### Navigate to the project folder:
````bash
cd ip-address-tracker-react-project
````
### Install dependencies:
````bash
npm install
````
### Run the development server:
````bash
npm run dev
````
## Features
- Search for any IP address 
- Display IP address, location, timezone, and ISP
- Interactive map showing the IP location
- Shows user's current IP and location on initial load
- Input validation for IP address format
- Loading and error handling
- Responsive design
- Clean, modular component-based architecture

## Built With
- React
- Vite
- Tailwind CSS
- React Leaflet
- Leaflet
- Geo.IPify API

## Project Structure
````text
src/
├─ assets/
│  └─ images/
│     ├─ pattern-bg-desktop.png
│     └─ pattern-bg-mobile.png
├─ components/
│  ├─ SearchIpAddress.jsx      # Main search input and form
│  ├─ DisplayIpAddress.jsx     # Card showing IP, location, timezone, ISP
│  └─ MyMap.jsx                # Interactive map component
├─ hooks/
│  ├─ useFetch.js              # Custom hook for API fetching
│  └─ useValidateIPAddress.js  # Custom hook for input validation
├─ App.jsx
└─ main.jsx
````
## How It Works

- On initial load, the app fetches the user’s current IP address and location.
- The user can enter any valid IP address in the search field.
- Input is validated via a custom hook to ensure correct IP format.
- The app requests data from the Geo.IPify API.
- Results are displayed in the information card and plotted on the map.

## Key Concepts Demonstrated

- Custom Hooks: useFetch and useValidateIPAddress
- API Integration: Fetching geolocation data from Geo.IPify
- State Management: Using React’s useState and useEffect
- Responsive UI: Tailwind CSS layout with mobile, tablet, and desktop breakpoints
- Map Integration: Displaying markers dynamically on a Leaflet map

## Environment Variables

Create a .env file in the root directory and add the Geo.IPify API key:
````bash
VITE_API_KEY=api_key_here
````

## Reflections

During the development of the IP Address Tracker, I aimed to build a responsive React app that lets users search for any IP address and view detailed location information along with an interactive map. I structured the project into three main components: SearchIpAddress for handling input, DisplayIpAddress for showing IP details, and MyMap for the map. I also created custom hooks, useFetch for API requests and useValidateIPAddress for input validation, which kept the code modular and clean.

One of the main challenges was handling layout and data fetching simultaneously. The information card initially overlapped the map on smaller screens due to absolute positioning, and I also needed to display the user’s current IP on initial load. I solved this by centering the card with left-1/2 -translate-x-1/2, adjusting the grid with grid-cols-1 lg:grid-cols-4, and fetching the user’s IP immediately when the app loads. Input validation prevented invalid IPs from triggering API calls, ensuring smooth functionality.

Potential improvements include adding search history, saving favorite IPs, enhancing map interactivity, and implementing dark mode. Overall, the project strengthened my skills in React hooks, API integration, state management, and responsive UI design while teaching me practical techniques for building clean, user-friendly interfaces.