function updateMap() {
    console.log("Map has beem Updated");
    fetch("./data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp);
            rsp.data.forEach(element => {
                // console.log(element)
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;
                if (cases > 255) {
                    color = "rgb(255,0,0)";
                }
                else {
                    color = `rgb(0,${cases},0)`;
                }
               
                // mark on the map
                new mapboxgl.Marker({
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });
        })
}

let interval = 2000;
setInterval(updateMap, interval);
