import $ from 'jquery';
import printToDom from '../../helpers/utilities';
import p from '../../helpers/data/planets';
import './planetDisplay.scss';

const planets = p.getPlanets();
const toggleHide = () => {
  if ($('#planet').hasClass('hide')) {
    $('#planet').removeClass('hide');
    $('#planets').addClass('hide');
  } else if ($('#planets').hasClass('hide')) {
    $('#planet').addClass('hide');
    $('#planets').removeClass('hide');
  }
};

const printPlanet = (e) => {
  const input = e.currentTarget.id;
  const planetFilter = planets.filter((x) => x.name === input);
  const planet = planetFilter[0];
  const domString = `<div class="bg-transparent planetDisplay align-items-center" id="${planet.name}-jumbo">
  <a href="#" class="closePlanet bg-transparent">X</a>
    <h1 class="text-center">${planet.name}</h1>
    <center>
      <img src="${planet.imageUrl}" alt="${planet.name}">
    </center>
    <p class="text-center">${planet.description}</p>
  </div>
  `;
  printToDom.printToDom('planet', domString);
  $('.closePlanet').click(toggleHide);
  toggleHide();
};

export default { printPlanet };
