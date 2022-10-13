const inputFile = document.querySelector(".picture__input");
const pictureImage = document.querySelector(".picture__image");

const pictureImagePreview = document.querySelector(".picture__image-preview");
const pictureImageTxt = "Selecione uma imagem";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function(e) {
	const inputTarget = e.target;
	const file = inputTarget.files[0];

	if(file) {
		const reader = new FileReader();
		reader.addEventListener('load', function(e) {
			const readerTarget = e.target;

			const img = document.createElement('img');
			const imgPreview = document.createElement('img');

			img.src = readerTarget.result;
			img.classList.add('picture__img');
			img.classList.add('picture__image-preview');			

			imgPreview.src = readerTarget.result;
			imgPreview.classList.add('picture__img');
			imgPreview.classList.add('picture__image-preview');

			pictureImage.innerHTML = '';
			pictureImagePreview.innerHTML = '';

			pictureImage.appendChild(img);	
			pictureImagePreview.appendChild(imgPreview);
		})
		reader.readAsDataURL(file)
	} else {
		pictureImage.innerHTML = pictureImageTxt;
	}

});


function firstname(name) {
	document.getElementById('titulo').innerText = name.value;
};

function secundname(name) {
	document.getElementById('valor').innerText = 'R$ ' + name.value;
};