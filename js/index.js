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
				const newsItem = document.createElement('div');
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

				// Добавляем горизонтальную линию после каждого блока новости, кроме последнего
                		if (news.index < data.length - 1) {
                    			const newsHr = document.createElement('hr');
					newsHr.classList.add('news-hr');
                    			newsItem.appendChild(hr);
                		}

				newsList.appendChild(newsItem);
			});
		});
	
	
	// Запрос к json-файлу
	fetch('data/devices/devices.json')
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText);
			}
			return response.json();
		})

		.then(data => {
			// Получаем контейнер из разметки
			const modelList = document.getElementById('model__list');

			// Перебираем все элементы
			data.forEach(model => {
				if (model.demonstration == "true") {
					const modelItem = document.createElement('ul');
					modelItem.classList.add('model-item');

					const modelLeft = document.createElement('div');
					modelLeft.classList.add('model-left');
					modelItem.appendChild(modelLeft);

					const modelRight = document.createElement('div');
					modelLeft.classList.add('model-right');
					modelItem.appendChild(modelRight);

					const modelTop = document.createElement('div');
					modelTop.classList.add('model-top');
					modelLeft.appendChild(modelTop);

					const modelBottom = document.createElement('div');
					modelBottom.classList.add('model-bottom');
					modelLeft.appendChild(modelBottom);

					const modelItemTitle = document.createElement('h3');
					modelItemTitle.classList.add('model-item-title');
					modelItemTitle.textContent = model.title;
					modelTop.appendChild(modelItemTitle);

					const modelItemText = document.createElement('p');
					modelItemText.classList.add('model-item-text');
					modelItemText.textContent = model.description;
					modelTop.appendChild(modelItemText);

					const modelItemButton1 = document.createElement('a');
					modelItemButton1.classList.add('model-item-button');
					modelItemButton1.href = '#footer';
					modelItemButton1.textContent = 'Заказать';
					modelBottom.appendChild(modelItemButton1);

					const modelItemButton2 = document.createElement('a');
					modelItemButton2.classList.add('model-item-button');
					modelItemButton2.href = 'devices.html';
					modelItemButton2.textContent = 'Подробнее';
					modelBottom.appendChild(modelItemButton2);

					const img = document.createElement('img');
					img.classList.add('model-item-img');
					img.src = model.image;
					modelRight.appendChild(img);

					modelList.appendChild(modelItem);
					
				}
			});
		});
});
