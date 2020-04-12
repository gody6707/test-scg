const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyClj2KJqTXGR-9K0gshE99cy86_BHnNS98'
});

googleMapsClient.directions({
  origin: 'Central World',
  destination: 'SCG Bangsue',
  mode: "driving",
}, function (err, response) {
  if (!err) {
    console.log(response);
  }
  console.error("Exception", err);
})

