// Ждем, пока разметка страницы загрузится
document.addEventListener('DOMContentLoaded', function () {
	// Запрос к json-файлу
	fetch('data/news/news.json')
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText);
			}
			return response.json();
		})

		.then(data => {
			// Получаем контейнер из разметки
			const newsList = document.getElementById('news__list');

			// Перебираем все элементы
			data.forEach(news => {
				const newsItem = document.createElement('a');
				newsItem.href = 'news.html';
				newsItem.classList.add('news-item');

				// Загружаем дату
				const newsDate = document.createElement('p');
				newsDate.classList.add('news-date');
				newsDate.textContent = news.date;
				newsItem.appendChild(newsDate);

				// Загружаем название
				const newsTitle = document.createElement('h3');
				newsTitle.classList.add('news-title');
				newsTitle.textContent = news.title;
				newsItem.appendChild(newsTitle);

				// Загружаем описание
				const newsText = document.createElement('p');
				newsText.classList.add('news-text');
				let newsTextTransform = news.description;
				if (newsTextTransform.length > 80) {
					newsTextTransform = newsTextTransform.slice(0,80) + '...';
					console.log(newsTextTransform);
				}
				newsText.textContent = newsTextTransform;
				newsItem.appendChild(newsText);

				// Добавляем горизонтальную линию после каждого блока новости
                    		const newsHr = document.createElement('hr');
				newsHr.classList.add('news-hr');
                    		newsItem.appendChild(newsHr);

				newsList.appendChild(newsItem);
			});
		});
});
