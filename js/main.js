const searchButton = document.querySelector('#searchButton'),
      inputSearch = document.querySelector('#inputSearch'),
      noResults = document.getElementById('noResults'),
      switchMode = document.getElementById('switch');

inputSearch.addEventListener('keyup', (e) => { //Se activa cada que el usuario presiona una tecla en el input.
    if (e.keyCode === 13) { //Si la tecla presionada es enter
        let user = inputSearch.value; 
        getProfile(user); //Llama a la función getProfile y le manda como argumento lo que esté escrito en el input.
    } else {
        noResults.style.display = 'none'; //Oculta el mensaje "no results".
    }
});

window.addEventListener('click', (e) => { //Una función para detectar si el click se hace en el botón Search
    if (searchButton.contains(e.target)) { //Si se presiona el botón
        console.log('click en botón');
        let user = inputSearch.value;
        getProfile(user);
    } else { //Si se presiona cualquier otra cosa que no sea el botón
        console.log('click fuera');
        inputSearch.placeholder = 'Search GitHub username...';
        noResults.style.display = 'none';
    }
});

switchMode.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

const darkOrLight = () => { //Función para saber si el usuario prefiere el tema oscuro o claro, basado en las preferencias de su computadora.
    const dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; 
    if (dark === true) {
        console.log('El usuario prefiere tema oscuro');
    } else {
        console.log('El usuario prefiere tema claro');
        document.body.classList.add('light');
    }
}

const getProfile = async(user) => {
    try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        console.log(response);

        if (response.status === 200) { //Si encontró el usuario, entra aquí
            const data = await response.json(); //Le pedimos a response que nos muestre un json
            console.log(data);
            let profilePic = `<img src="${data.avatar_url}" alt="user avatar">`;
            let profileName = `${data.name}`;
            let profileUsername = `<a target="_blank" href="https://github.com/${data.login}">@${data.login}</a>`;
            let joinedDate = new Date(data.created_at); //Obtenemos la fecha de creación de la cuenta
            let day = joinedDate.toLocaleDateString('en-US', { //Obtenemos el día solamente, para después poderlo usar independiente con el formato que nosotros queramos, lo mismo hacemos con month y year.
                day: '2-digit',
            });
            let month = joinedDate.toLocaleDateString('en-US', {
                month: 'short',
            });
            let year = joinedDate.toLocaleDateString('en-US', {
                year: 'numeric',
            });
            let bio = data.bio;
            if (bio === null) {
                document.getElementById('bio').innerHTML = 'This profile has no bio';
                document.getElementById('bio').style.opacity = '75%';
            } else {
                document.getElementById('bio').innerHTML = bio;
            }
            let repos = data.public_repos;
            let followers = data.followers;
            let following = data.following;
            let location = data.location;
            if (location === null) {
                document.getElementById('location').innerHTML = 'Not Available';
                document.getElementById('location').style.opacity = '50%';
                document.getElementById('locationSVG').style.opacity = '50%';
            } else {
                document.getElementById('location').innerHTML = location;
                document.getElementById('location').style.opacity = '1';
                document.getElementById('locationSVG').style.opacity = '1';
            }
            let blog = data.blog;
            if (blog === "") {
                document.getElementById('blog').innerHTML = 'Not Available';
                document.getElementById('blog').style.opacity = '50%';
                document.getElementById('blogSVG').style.opacity = '50%';
            } else {
                document.getElementById('blog').innerHTML = `<a target="_blank" href="${blog}">${blog}</a>`;
                document.getElementById('blog').style.opacity = '1';
                document.getElementById('blogSVG').style.opacity = '1';
            }
            let twitter = data.twitter_username;
            if (twitter === null) {
                document.getElementById('twitter').innerHTML = 'Not Available';
                document.getElementById('twitter').style.opacity = '50%';
                document.getElementById('twitterSVG').style.opacity = '50%';
            } else {
                document.getElementById('twitter').innerHTML = `<a target="_blank" href="https://twitter.com/${twitter}">${twitter}</a>`;
                document.getElementById('twitter').style.opacity = '1';
                document.getElementById('twitterSVG').style.opacity = '1';
            }
            let company = data.company;
            if (company === null) {
                document.getElementById('company').innerHTML = 'Not Available';
                document.getElementById('company').style.opacity = '50%';
                document.getElementById('companySVG').style.opacity = '50%';
            } else {
                document.getElementById('company').innerHTML = company;
                document.getElementById('company').style.opacity = '1';
                document.getElementById('companySVG').style.opacity = '1';
            }
            document.getElementById('cardImg').innerHTML = profilePic;
            document.getElementById('profileName').innerHTML = profileName;
            document.getElementById('profileUser').innerHTML = profileUsername;
            document.getElementById('joinedDate').innerHTML = `Joined ${day} ${month} ${year}`;
            document.getElementById('repos').innerHTML = repos;
            document.getElementById('followers').innerHTML = followers;
            document.getElementById('following').innerHTML = following;
            noResults.style.display = 'none';

        } else if (response.status === 404){
            console.log('Usuario no encontrado');
            noResults.style.display = 'block';
            inputSearch.value = '';
            inputSearch.placeholder = '';
        } else {
            console.log('Hubo un error desconocido');
        }

    } catch (error) {
        console.log(error);
    }

}

darkOrLight();
getProfile("octocat"); //Manda octocat como usuario por defecto cuando la pantalla carga.