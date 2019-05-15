import boards from './components/boards/boards';
import 'bootstrap';
import '../styles/main.scss';


const init = () => {
  boards.initBoards();
  boards.boardBuilder();
};

init();
