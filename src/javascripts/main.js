import '../styles/main.scss';
import cP from './components/planetCards/planetCards';
import p from './helpers/data/planets';

const init = () => {
  const planets = p.getPlanets();
  cP.cardPrinter(planets);
};

init();
