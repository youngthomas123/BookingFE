const GOOGLE_MAPS_API_KEY = 'AIzaSyDfBrts8onyrs60leHMVa2Z6T5DI4jLeJo';

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

export function initializeGoogleMaps() {
  if (!document.querySelector('#google-maps')) {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
      document.querySelector('head'),
      'google-maps',
    );
  }
}

export function getAutocompleteService() {
  if (!autocompleteService.current && window.google) {
    autocompleteService.current =
      new window.google.maps.places.AutocompleteService();
  }
  return autocompleteService.current;
}


