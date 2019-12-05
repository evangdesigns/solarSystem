import '../styles/main.scss';
import cP from './components/planetCards/planetCards';
import p from './helpers/data/planets';
import pp from './components/planetDisplay/planetDisplay';

const init = () => {
  const planets = p.getPlanets();
  cP.cardPrinter(planets);
  pp.printPlanet(pp.selectedPlanet);
};

init();
