const planets = [
  {
    name: 'Mercury',
    imageUrl: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/2_mercury_480x320_new.jpg',
    description: 'Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth\'s Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: null,
  },
  {
    name: 'Venus',
    imageUrl: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/3_480x320_venus.png',
    description: 'Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargesMoon: null,
  },
  {
    name: 'Earth',
    imageUrl: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/4_earth_480x320.jpg',
    description: 'Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It\'s also the only planet in our solar system with liquid water on the surface.',
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargesMoon: 'bubba',
  },
  {
    name: 'Mars',
    imageUrl: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/6_mars_480x320.jpg',
    description: 'Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.',
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargesMoon: 'phobos',
  },
  {
    name: 'Jupiter',
    imageUrl: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/9_jupiter_480x320_new.jpg',
    description: 'Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet\'s Great Red spot is a centuries-old storm bigger than Earth.',
    isGasPlanet: true,
    numberOfMoons: 79,
    nameOfLargesMoon: 'ganymede',
  },
  {
    name: 'Saturn',
    imageUrl: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/38_saturn_480x320.jpg',
    description: 'Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn\'s.',
    isGasPlanet: true,
    numberOfMoons: 82,
    nameOfLargesMoon: 'titan',
  },
  {
    name: 'Uranus',
    imageUrl: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/69_uranus_480x320.jpg',
    description: 'Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.',
    isGasPlanet: false,
    numberOfMoons: 27,
    nameOfLargesMoon: 'titania',
  },
  {
    name: 'Neptune',
    imageUrl: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/90_neptune_480x320.jpg',
    description: 'Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations.',
    isGasPlanet: false,
    numberOfMoons: 13,
    nameOfLargesMoon: 'triton',
  },
];

const getPlanets = () => planets;

export default { getPlanets };
