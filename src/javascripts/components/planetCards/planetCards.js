import $ from 'jquery';
import printToDom from '../../helpers/utilities';
import './planetCards.scss';

const toggleHide = (e) => {
  const planet = e.currentTarget.id;
  console.log(planet);
  $(`#${planet}`).toggle('hide');
  $(`#${planet.split('-title')[0]}-image`).toggle('hide');
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
  $('.planetName').hover(toggleHide);
};

export default { cardPrinter };
