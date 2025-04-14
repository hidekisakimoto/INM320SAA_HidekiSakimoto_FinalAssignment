async function loadCardData() {
  const response = await fetch('./data.json');
  const data = await response.json();

  // Select all stat cards
  const statCards = document.querySelectorAll('.stats-card');

  data.cards.forEach((item, index) => {
    // console.log(`📝 Updating card ${index + 1}:`, item);
    if (statCards[index]) {
      const label = statCards[index].querySelector('.stats-label');
      const value = statCards[index].querySelector('.stats-value');

      label.textContent = item.title;
      value.textContent = item.value;
    }
  });
}

loadCardData();