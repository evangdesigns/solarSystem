import $ from 'jquery';
import pd from '../planetDisplay/planetDisplay';
import printToDom from '../../helpers/utilities';
import './planetCards.scss';

const toggleHide = (e) => {
  const planet = e.currentTarget.id;
  const planetTitle = `#${planet}-title`;
  const planetImg = `#${planet}-image`;
  if ($(planetTitle).hasClass('hide')) {
    $(planetTitle).removeClass('hide');
    $(planetImg).addClass('hide');
  } else if ($(planetImg).hasClass('hide')) {
    $(planetTitle).addClass('hide');
    $(planetImg).removeClass('hide');
  }
};

const cardPrinter = (planets) => {
  let domString = '';
  planets.forEach((planet) => {
    domString += `<div class="card bg-transparent planetCard" id="${planet.name}">
      <div class="card-body">
        <div class="planetImage hide" id="${planet.name}-image">
          <center>
            <img src="${planet.imageUrl}" alt="${planet.name}">
          </center>
        </div>
        <div class="planetName" id="${planet.name}-title">
          <h2 class="text-center">${planet.name}</h2>
        </div>
      </div>
    </div>
    `;
  });
  printToDom.printToDom('planets', domString);
  $('.planetCard').hover(toggleHide);
  $('.planetCard').click(pd.printPlanet);
};

export default { cardPrinter };
