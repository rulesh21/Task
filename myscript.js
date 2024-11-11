function toggleExpand(header) {
    const box = header.parentElement;
    const allBoxes = document.querySelectorAll('.box');
  
    allBoxes.forEach(b => {
      if (b !== box) {
        b.classList.remove('expanded');
        b.querySelector('.options')?.classList.remove('show');
        const radio = b.querySelector('input[type="radio"]');
        if (radio) {
          radio.checked = false;
        }
      }
    });
    box.classList.toggle('expanded');
    const options = box.querySelector('.options');
    if (options) {
      options.classList.toggle('show');
    }
    const radio = box.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = true;
    }
  }
  