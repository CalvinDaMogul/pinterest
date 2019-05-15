import boardsData from '../../helpers/data/boardsData';
import util from '../../helpers/utils';

const boardBuilder = (boardName) => {
  let domString = '';
  boardName.forEach((board) => {
    domString += '<div class="card col-3">';
    domString += `<div class="card-body" id=${board.id}>`;
    domString += `<h5 class="card-title">${board.name}</h5>`;
    domString += '<p class="card-text"></p>';
    domString += '<p class="card-text"></p>';
    domString += '<p class="card-text"></p>';
    domString += '<p class="card-text"></p>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
};


const initBoards = () => {
  boardsData.loadBoards()
    .then((resp) => {
      console.error('resp', resp.data.boards);
      boardBuilder(resp.data.boards);
    })
    .catch(err => console.error('error from loadboards', err));
};

export default { initBoards, boardBuilder };
