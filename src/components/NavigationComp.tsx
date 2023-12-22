// import React, { useState } from "react";
// import ReactMapGL, { ViewState, Marker } from "react-map-gl";

// export default function MyComponent() {
//   const [viewport, setViewport] = useState({
//     latitude: 43,
//     longitude: -79,
//     zoom: 10,
//   });

//   const [location, setLocation] = useState();

//   const getLocation = () => {
//     // Obtiene la ubicación del usuario
//     navigator.geolocation.getCurrentPosition((position) => {
//       setLocation({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//       });
//     });
//   };

//   useEffect(() => {
//     // Obtiene la ubicación del usuario una vez
//     getLocation();
//   }, []);

//   const marker = new Marker({
//     latitude: location.latitude,
//     longitude: location.longitude,
//     title: "Mi ubicación",
//   });

//   return (
//     <ReactMapGL
//       {...viewport}
//       width="100%"
//       height="500px"
//       mapboxApiAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
//     >
//       {marker}
//     </ReactMapGL>
//   );
// }
export {};
