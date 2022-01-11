const getProfile = async() => {

    try {
        const response = await fetch(`https://api.github.com/users/danyglez94`);
        console.log(response);

        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            let profilePic = `<img src="${data.avatar_url}">`;
            let profileName = `${data.name}`;
            let profileUsername = `<a href="https://github.com/${data.login}">@${data.login}</a>`;
            let joinedDate = new Date(data.created_at);
            let dayMonth = joinedDate.toLocaleDateString('en-US', {
                day: '2-digit',
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
                document.getElementById('location').style.opacity = '75%';
                document.getElementById('locationSVG').style.opacity = '75%';
            } else {
                document.getElementById('location').innerHTML = location;
            }
            let blog = data.blog;
            if (blog === "") {
                document.getElementById('blog').innerHTML = 'Not Available';
                document.getElementById('blog').style.opacity = '75%';
                document.getElementById('blogSVG').style.opacity = '75%';
            } else {
                document.getElementById('blog').innerHTML = `<a href="${blog}">${blog}</a>`;
            }
            let twitter = data.twitter_username;
            if (twitter === null) {
                document.getElementById('twitter').innerHTML = 'Not Available';
                document.getElementById('twitter').style.opacity = '75%';
                document.getElementById('twitterSVG').style.opacity = '75%';
            } else {
                document.getElementById('twitter').innerHTML = `<a href="https://twitter.com/${twitter}">${twitter}</a>`;
            }
            let company = data.company;
            if (company === null) {
                document.getElementById('company').innerHTML = 'Not Available';
                document.getElementById('company').style.opacity = '75%';
                document.getElementById('companySVG').style.opacity = '75%';
            } else {
                document.getElementById('company').innerHTML = company;
            }
            document.getElementById('cardImg').innerHTML = profilePic;
            document.getElementById('profileName').innerHTML = profileName;
            document.getElementById('profileUser').innerHTML = profileUsername;
            document.getElementById('joinedDate').innerHTML = `Joined ${dayMonth} ${year}`;
            document.getElementById('repos').innerHTML = repos;
            document.getElementById('followers').innerHTML = followers;
            document.getElementById('following').innerHTML = following;

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