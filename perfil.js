const inputFilePerfil = document.querySelector(".picture__input_perfil");
const pictureImagePerfil = document.querySelector(".picture__image_perfil");

const pictureImageTxt = "Selecione uma imagem";
pictureImagePerfil.innerHTML = pictureImageTxt;



inputFilePerfil.addEventListener('change', function(e) {
	const inputTarget = e.target;
	const file = inputTarget.files[0];

	if(file) {
		const reader = new FileReader();
		reader.addEventListener('load', function(e) {
			const readerTarget = e.target;

			const img = document.createElement('img');

			img.src = readerTarget.result;
			img.classList.add('picture__img_perfil');

			pictureImagePerfil.innerHTML = '';

			pictureImagePerfil.appendChild(img);	
		})
		reader.readAsDataURL(file)
	} else {
		pictureImagePerfil.innerHTML = pictureImageTxt;
	}

});