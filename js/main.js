const data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "img/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "img/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "img/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "img/icon-visual.svg"
  }
];

document.addEventListener("DOMContentLoaded", function () {

  const elsStatsListItem = document.querySelectorAll('.stats-list__item');

  elsStatsListItem.forEach(function (elStatsItem, index) {
    elStatsItem.classList.add(`stats-list__item--${data[index].category.toLowerCase()}`);
    elStatsItem.querySelector('.stats-list__item-icon').src = data[index].icon;
    elStatsItem.querySelector('.stats-list__item-title').textContent = data[index].category;
    elStatsItem.querySelector('.stats-list__item-result').textContent = data[index].score;
  });

});
