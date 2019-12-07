import '../styles/main.scss';
import cP from './components/planetCards/planetCards';
import p from './helpers/data/planets';
import search from './components/search/search';

const init = () => {
  const planets = p.getPlanets();
  search.printSearch();
  cP.cardPrinter(planets);
};

init();
