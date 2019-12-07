import $ from 'jquery';
import p2d from '../../helpers/utilities';
import cp from '../planetCards/planetCards';
import p from '../../helpers/data/planets';
import './search.scss';

const planets = p.getPlanets();

const searchBar = (e) => {
  const y = e.target.id;
  const input = $(`#${y}`).val();
  const planetSearch = planets.filter((planet) => planet.name.includes(input) || planet.description.includes(input));
  cp.cardPrinter(planetSearch);
};

const printSearch = () => {
  const domString = `
  <div class="search bg-transparent">
  <form>
  <div class="form-group">
    <input type="text" class="form-control" id="searchBar" placeholder="SEARCH">
  </div>
  </form>
  </div>`;
  p2d.printToDom('searchContainer', domString);
  $('#searchBar').keyup(searchBar);
};

export default { searchBar, printSearch };
