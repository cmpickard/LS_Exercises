// Without changing the behavior of the following code, remove the call to
// event.stopPropagation and refactor the result.

document.querySelector('html').addEventListener('click', (event) => {
  let container = document.querySelector('#container');
  if (!container.contains(event.target)) {
    document.querySelector('#container').style = 'display: none';
  }
});