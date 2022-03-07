darkModeButton = document.getElementById("dark-mode-button")
const originalBody = document.body.style.backgroundColor;
handleButtonClick = function () {
    if(document.body.style.backgroundColor === originalBody){
    console.log("button clicked")
    // change the background colour and text
    body = document.body
    body.style.backgroundColor = "#091d1e"
    body.style.color = "#aaaaaa"

    // change the border of the title

    title = document.getElementById("title-section")
    title.style.border = "1px solid #aaaaaa"

    // change the border and headings on the posts

    posts = document.getElementsByClassName("post")
    for (post of posts){
        post.style.border = "1px solid #aaaaaa"
    }

    postHeadings = document.getElementsByTagName("h3")
    for (heading of postHeadings){
        heading.style.color = "#466876"
    }

    } else {
        console.log("button clicked")
    // change the background colour and text
    body = document.body
    body.style.backgroundColor = "#d0efff"
    body.style.color = "#000000"

    // change the border of the title

    title = document.getElementById("title-section")
    title.style.border = "1px solid #000000"

    // change the border and headings on the posts

    posts = document.getElementsByClassName("post")
    for (post of posts){
        post.style.border = "1px solid #000000"
    }

    postHeadings = document.getElementsByTagName("h3")
    for (heading of postHeadings){
        heading.style.color = "#000000"
    }
    }
}

darkModeButton.addEventListener("click", handleButtonClick)
