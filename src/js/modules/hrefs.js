function hrefs() {
  const hrefs = document.querySelectorAll('a');
  hrefs.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });
}

export default hrefs;