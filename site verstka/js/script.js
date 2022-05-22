function SlideShow() {
	//html кнопки (над фото)
	const btn_1 = document.getElementById('btn_Rostov_on_Don_Admiral')
	const btn_2 = document.getElementById('btn_Sochi_Thieves')
	const btn_3 = document.getElementById('btn_Rostov_on_Don_Patriotic')

	//html img
	const imgTeg = document.getElementById('section2_SlideShow')

	//html контент
	const city = document.querySelector('.city_Content')
	const repair_time = document.querySelector('.repair_time_Content')
	const apartment_area = document.querySelector('.apartment_area_Content')
	const repair_cost = document.querySelector('.repair_cost_Content')

	//html кнопки (стрелки)
	const pointer_left = document.querySelector('.btn_pointer_left')
	const pointer_right = document.querySelector('.btn_pointer_right')

	//html кнопки (точки между стрелками)
	const point_1 = document.querySelector('.point_1')
	const point_2 = document.querySelector('.point_2')
	const point_3 = document.querySelector('.point_3')

	//Массив кнопок
	const btnArray = [btn_1, btn_2, btn_3]
	const pointArray = [point_1, point_2, point_3]

	// переменная для определение значение i
	let num = 0

	//Обнуление стилей
	function styleNull() {
		btnArray.forEach(function (index) {
			index.style.cssText = `
			border-bottom:0px;
		`
		})

		pointArray.forEach(function (index) {
			index.style.opacity = 0.5
		})
	}


	// Массив объектов с контентом
	const arr = [
		//первая фото
		{
			city: 'Rostov-on-Don <br> LCD admiral',
			apartment_area: '81 m2',
			repair_time: '3.5 months',
			repair_cost: 'Upon request',
			url: '../img/fotoSlide_1(1).png'
		},

		//вторая фото
		{
			city: 'Sochi <br> Thieves',
			apartment_area: '105 m2',
			repair_time: '4 months',
			repair_cost: 'Upon request',
			url: '../img/fotoSlide_1(2).png'
		},

		//третья фото
		{
			city: 'Rostov-on-Don <br> Patriotic',
			apartment_area: '93 m2',
			repair_time: '3 months',
			repair_cost: 'Upon request',
			url: '../img/fotoSlide_1(3).png'
		}
	]

	//Функция для проеоброзование контента
	function Foto(i) {
		imgTeg.src = arr[i].url
		city.innerHTML = arr[i].city
		repair_time.textContent = arr[i].repair_time
		apartment_area.textContent = arr[i].apartment_area
		repair_cost.textContent = arr[i].repair_cost
		pointArray[i].style.opacity = 1
		btnArray[i].style.cssText = `
			border-bottom: 2px;
			border-style: solid;
			border-color: rgba(227, 184, 115, 1);
			padding-bottom: 10px;
		`
	}

	// События клика на ссылки над фотографиями
	btn_1.addEventListener('click', function () {
		styleNull()
		Foto(0)
		num = 0
	})
	btn_2.addEventListener('click', function () {
		styleNull()
		Foto(1)
		num = 1
	})
	btn_3.addEventListener('click', function () {
		styleNull()
		Foto(2)
		num = 2
	})


	//События клика на стрелки
	pointer_left.addEventListener('click', function () {
		function a() {
			if (num == 0) {
				return num = 2
			} else {
				return num--
			}
		}
		a()
		styleNull()
		Foto(num)
		console.log(num)
	})
	pointer_right.addEventListener('click', function () {
		styleNull()
		function b() {
			if (num == 2) {
				return num = 0
			} else {
				return num++
			}
		}
		b()
		Foto(num)
		console.log(num)
	})

	//Эффект клика
	pointer_left.addEventListener('mousedown', function () {
		pointer_left.style.opacity = 1
	})

	pointer_left.addEventListener('mouseup', function () {
		pointer_left.style.opacity = 0.5
	})

	pointer_right.addEventListener('mousedown', function () {
		pointer_right.style.opacity = 1
	})

	pointer_right.addEventListener('mouseup', function () {
		pointer_right.style.opacity = 0.5
	})

	//События клика на точки между стрелками
	point_1.addEventListener('click', function () {
		styleNull()
		Foto(0)
		num = 0
	})
	point_2.addEventListener('click', function () {
		styleNull()
		Foto(1)
		num = 1
	})
	point_3.addEventListener('click', function () {
		styleNull()
		Foto(2)
		num = 2
	})
}



document.addEventListener('DOMContentLoaded', SlideShow)