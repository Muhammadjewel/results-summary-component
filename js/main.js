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

  const elStatsList = document.querySelector('.stats-list');
  const elStatsContentFragment = document.createDocumentFragment();
  const elStatsListItemTemplate = document.querySelector('#stats-list-item-template').content;

  data.forEach(function (item) {
    const elStatsItem = elStatsListItemTemplate.cloneNode(true);

    elStatsItem.querySelector('.stats-list__item').classList.add(`stats-list__item--${item.category.toLowerCase()}`);
    elStatsItem.querySelector('.stats-list__item-icon').src = item.icon;
    elStatsItem.querySelector('.stats-list__item-title').textContent = item.category;
    elStatsItem.querySelector('.stats-list__item-result').textContent = item.score;

    elStatsContentFragment.appendChild(elStatsItem);
  });

  elStatsList.appendChild(elStatsContentFragment);
});
