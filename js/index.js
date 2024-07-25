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
			const productList = document.getElementById('product__list');

			// Перебираем все элементы
			data.forEach(product => {
				const productCard = document.createElement('div');
				productCard.classList.add('product-card');

				const productImage = document.createElement('img');
				productImage.src = product.image;
				productImage.classList.add('product-img');
				productCard.appendChild(productImage);

				const productRight = document.createElement('div');
				productRight.classList.add('product__right');
				productCard.appendChild(productRight);

				const productTitle = document.createElement('h2');
				productTitle.textContent = product.title;
				productTitle.classList.add('product-title');
				productRight.appendChild(productTitle);

				const productDescription = document.createElement('p');
				productDescription.textContent = product.description;
				productDescription.classList.add('product-description');
				productRight.appendChild(productDescription);

				productList.appendChild(productCard);
			});
		});
});
