import './planetDisplay.scss';

const printPlanet = (e) => {
  const planet = e.currentTarget.id;
  console.log(planet);
};

export default { printPlanet };
