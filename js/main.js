const getProfile = async() => {

    try {
        const response = await fetch(`https://api.github.com/users/octocat`);
        console.log(response);

        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            let profilePic = `<img src="${data.avatar_url}">`;
            document.getElementById('cardImg').innerHTML = profilePic;

        } else if (response.status === 404){
            console.log('Usuario no encontrado');
        } else {
            console.log('Hubo un error desconocido');
        }

    } catch (error) {
        console.log(error);
    }

}

getProfile();