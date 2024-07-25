// Ждем, пока разметка страницы загрузится
document.addEventListener('DOMContentLoaded', function () {
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

					const modelTop = document.createElement('div');
					modelTop.classList.add('model-top');
					modelItem.appendChild(modelTop);

					const modelBottom = document.createElement('div');
					modelBottom.classList.add('model-bottom');
					modelItem.appendChild(modelBottom);

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

					modelList.appendChild(modelItem);
					
				}
			});
		});
});
