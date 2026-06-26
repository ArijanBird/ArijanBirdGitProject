function changeText() {
  const title = document.getElementById('title');

  if (title.innerText === 'Hello World') {
    title.innerText = 'You clicked the button!';
    title.style.color = 'green';
  } else {
    title.innerText = 'Hello World';
    title.style.color = 'black';
  }
}

// Optional: log page loaded
console.log('App loaded successfully');
