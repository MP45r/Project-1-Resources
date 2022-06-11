let isDark = true;
const body = document.body
const lightBulb = document.getElementById('light-bulb')
const lightBulbState = document.getElementById('light-bulb-state')
const header = document.getElementById('header-id-1')
const blogPosts = document.getElementById('blog-posts')
const about = document.getElementById('about')
const changeTheme = () => {
    isDark ? (isDark = false) : (isDark = true)
    isDark ? (localStorage.setItem('isDark', true)) : (localStorage.setItem('isDark', false))
    let theme = localStorage.getItem('isDark') == 'true' ? true : false
    themeT(theme)
}

const themeT = (t) => {
    let addC = t ? 'dark-theme' : 'light-theme'
    let removeC = t ? 'light-theme' : 'dark-theme'
    //
    let addHeaderC = t ? 'header-dark' : 'header-light'
    let removeHeaderC = t ? 'header-light' : 'header-dark'
    //
    let lightBulbTitle = t ? 'Dark Mode is On' : 'Light Mode is On'
    //
    let addBlogC = t ? 'blog-posts-dark' : 'blog-posts-light'
    let removeBlogC = t ? 'blog-posts-light' : 'blog-posts-dark'
    //
    let addAboutC = t ? 'about-dark' : 'about-light'
    let removeAboutC = t ? 'about-light' : 'about-dark'
    //
    let addLightBulbC = t ? 'light-bulb-dark' : 'light-bulb-light'
    let removeLightBulbC = t ? 'light-bulb-light' : 'light-bulb-dark'
    //remove
    body.classList.remove(removeC)
    lightBulb.classList.remove(removeLightBulbC)
    header.classList.remove(removeHeaderC)
    blogPosts.classList.remove(removeBlogC)
    about.classList.remove(removeAboutC)
    //add
    body.classList.add(addC)
    lightBulb.classList.add(addLightBulbC)
    header.classList.add(addHeaderC)
    blogPosts.classList.add(addBlogC)
    about.classList.add(addAboutC)

    lightBulbState.textContent = lightBulbTitle
}

window.onload = (e) => {
    let theme = localStorage.getItem('isDark')
    theme = theme == 'true' ? true : false
    themeT(theme)
}
