# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - GitHub user search app solution](#frontend-mentor---github-user-search-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![](/img/github-app-sc.png)

Active States
![](/img/active-states.png)

### Links

- [Solution](https://www.frontendmentor.io/solutions/github-user-search-app-using-sass-bem-api-and-js-3R-PYPb9k)
- [Live Site](https://danyglez94.github.io/Github-User-Search-App/)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- BEM Methodology
- JavaScript

### What I learned

I learned how to consume APIs, how to get permissions to work with different APIs, also, how to catch errors when the connection is not successful.

This is my first project using Sass and I learned a lot, what I like the most about it is that it allows me to nest classes, also the use of mixins, and the way you can apply a style deppending if a parent has a class, for example: 

If the body has the light class, apply different colors than when it does not have that class.
```css
.attribution {
    a {
        color: $Grey-Blue;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    body.light & {
        color: $Grey-Blue;
        a {
            color: $Light-Blue;
        }
    }
}
```
I also learned how to know with JS if the users prefers dark or light mode based on their device preferences:
```js
const darkOrLight = () => {
    const dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; 
    if (dark === true) {
        console.log('User prefers dark mode');
    } else {
        console.log('User prefers light mode');
        document.body.classList.add('light');
    }
}
```
### Continued development

I want to practice more with Sass, specially with the use of mixins, because I feel like I didn't take full advantage of its potential, also, next projects I will use modular Sass in order to better organize my code.

### Useful resources

- [Dark Mode](https://www.youtube.com/watch?v=2Nmi1sXu12U) - This video helped me to know how to apply dark mode in a webpage.
- [How to connect to an API](https://www.example.com) - This video helped me to unerstand how to catch errors when a petition to the server is not successful.

## Author

- GitHub - [DanyGlez94](https://github.com/DanyGlez94)
- Frontend Mentor - [@DanyGlez94](https://www.frontendmentor.io/profile/DanyGlez94)
- Twitter - [@DanielGlez94](https://twitter.com/DanielGlez94)