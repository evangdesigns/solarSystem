// import $ from 'jquery';
import printToDom from '../../helpers/utilities';
import './planetCards.scss';

const cardPrinter = (planets) => {
  let domString = '';
  planets.forEach((planet) => {
    domString += `
      <div id="cardBody ${planets.name}">
          <center>
            <img src="${planet.imageUrl}" alt="${planet.name}">
          </center>
      </div>
    `;
  });
  printToDom.printToDom('planets', domString);
};

export default { cardPrinter };
