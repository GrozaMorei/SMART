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
				const newsItem = document.createElement('li');
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

				// Создаем контентный блок
				const newsContent = document.createElement('div');
				newsContent.classList.add('news-content');

				// Загружаем описание
				const newsText = document.createElement('p');
				newsText.classList.add('news-text');
				newsText.textContent = news.description;
				newsContent.appendChild(newsText);

				// Загружаем изображение (если оно есть)
				if (news.image != 'none') {
					const newsImage = document.createElement('img');
					newsImage.classList.add('news-image');
        				newsImage.src = news.image;
        				newsContent.appendChild(newsImage);
				};
				
				newsItem.appendChild(newsContent);

				// Создаем кнопку
				const newsButton = document.createElement('button');
				newsButton.classList.add('news-button');
				newsButton.textContent = 'Подробнее...';
				newsItem.appendChild(newsButton);

				// Создаем разделяющую полосу
				const newsHr = document.createElement('hr');
				newsHr.classList.add('news-hr');
				newsItem.appendChild(newsHr);
				
				newsList.appendChild(newsItem);
				
			});
		});
});
