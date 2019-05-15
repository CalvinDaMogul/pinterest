import boardsData from '../../helpers/data/boardsData';
import util from '../../helpers/utils';

const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('you clicked a button', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  console.error('allButtons', allButtons);
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

const boardBuilder = (boardName) => {
  let domString = '';
  boardName.forEach((board) => {
    domString += '<div class=" col-3">';
    domString += `<div id="${board.id}" class="card p-2">`;
    domString += `<h5 class="card-title">${board.name}</h5>`;
    domString += '<button class="btn btn-warning see-pins">pins</button>';
    domString += '<p class="card-text"></p>';
    domString += '<p class="card-text"></p>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
  bindEvents();
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
