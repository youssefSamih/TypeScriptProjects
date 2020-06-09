import axios from "axios";

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'YOUR_KEY_GO_HERE';

// declare var google: any;

type GoogleGeocodingResponse = {
  results: {geometry: {location: {lat: number, lng: number}}}[];
  status: 'OK' | 'ZERO_RESULTS';
}

function searchAddressHandler(event: Event) {
  event?.preventDefault();
  const enetrredAddress = addressInput.value;

  axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
    enetrredAddress
  )}&key=${GOOGLE_API_KEY}`).then(res => {
    if (res.data.status !== 'OK') {
      throw new Error('Could not fetch location!');
    }
    const coordinate = res.data.results[0].geometry.location;

    const map = new google.maps.Map(document.getElementById('map') as Element, {
      center: coordinate,
      zoom: 16
    });

    new google.maps.Marker({position: coordinate, map: map});
  }).catch(err => {
    alert(err.message);
    console.log(err);
  });
}

form.addEventListener('submit', searchAddressHandler);