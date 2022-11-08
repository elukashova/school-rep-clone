import './index.scss';
import Header from './components/header/index';
import upperSection from './pages/game-page/section-01/index';
import gameSection from './pages/game-page/section-02/index';
import Footer from './components/footer/index';

const body = document.getElementById('body');

body.append(Header);
body.append(upperSection);
body.append(gameSection);
body.append(Footer);