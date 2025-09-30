let ul = document.querySelector('ul');
const articleIds = ['article-1', 'article-2', 'article-3', 'article-4'];

function removeHighlight() {
  let highlighted = document.querySelector('.highlight');
  if (highlighted) {
    highlighted.classList.remove('highlight');
  }
}

ul.addEventListener('click', (event) => {
  event.stopPropagation();
  removeHighlight();
  let articleId = "article-" + event.target.textContent.slice(-1);
  let article = document.getElementById(articleId);
  article.classList.add('highlight');
});

document.addEventListener('click', (event) => {
  removeHighlight();
  let target = event.target;
  let article = articleIds
    .map(id => document.getElementById(id))
    .filter(article => article.contains(target));
  if (article.length === 0) {
    document.querySelector('main').classList.add('highlight');
  } else {
    article[0].classList.add('highlight');
    article[0].scrollIntoView();
  }
});


