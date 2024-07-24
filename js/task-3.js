const nameInput = document.querySelector('#name-input');
    const nameOutput = document.querySelector('#name-output');

    nameInput.addEventListener('input', () => {
      const trimmedValue = nameInput.value.trim();
      if (trimmedValue ===  false ) {
        nameOutput.textContent = 'Anonymous';
      } else {
        nameOutput.textContent = trimmedValue;
      }
    });