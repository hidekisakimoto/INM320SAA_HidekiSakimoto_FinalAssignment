document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('card-container');
  
        data.forEach(item => {
          const col = document.createElement('div');
          col.className = 'col-md-6 col-lg-4';
  
          col.innerHTML = `
            <div class="card h-100">
              <img src="${item.image}" class="card-img-top" alt="${item.title}">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
              </div>
            </div>
          `;
  
          container.appendChild(col);
        });
      })
      .catch(error => console.error('Error loading JSON:', error));
  });
  