const fileForm = document.getElementById('file-form');
const fileInput = document.getElementById('file-input');
const searchInput = document.getElementById('search-input');
const pdfList = document.getElementById('pdf-list');

fileForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const files = fileInput.files;
  for (const file of files) {
    const pdfItem = document.createElement('div');
    pdfItem.classList.add('pdf-item');

    const pdfName = document.createElement('p');
    pdfName.textContent = file.name;
    pdfItem.appendChild(pdfName);

    const pdfLink = document.createElement('a');
    pdfLink.textContent = 'Visualizar';
    pdfLink.href = URL.createObjectURL(file);
    pdfLink.target = '_blank';
    pdfItem.appendChild(pdfLink);

    pdfList.appendChild(pdfItem);
  }
});

searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  const pdfItems = document.querySelectorAll('.pdf-item');

  pdfItems.forEach((item) => {
    const pdfName = item.querySelector('p').textContent.toLowerCase();
    if (pdfName.includes(searchText)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
