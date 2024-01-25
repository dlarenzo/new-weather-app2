const URL_2 = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6473f0a161e34f4eb33c7efc81ae54eb`;

let newsArchive = document.querySelector("#news-Archive");
let headArticle = document.querySelector("#hd-article");
let headerArticle = document.querySelector("#header-article");
let headerDesc = document.querySelector("#header-desc");

//  NEWS ARTICLE

fetch(URL_2)
  .then((response) => response.json())
  .then((jsObject) => {
    let article = document.createElement("article");

    //Create image space then link to source
    let headArticleImg = document.createElement("img");

    let headArticleCaption = document.createElement("div");

    console.log(jsObject);

    //ADD CLASSNAME or ID
    article.className = "article";
    article.setAttribute("id", "hd-article");

    headArticleCaption.className = "head-article-caption";

    //IMAGES
    //headArticleImg.src = jsObject.articles[0].urlToImage || "http://placekitten.com/g/204/115";

    //APPENDING CHILDREN
    headArticle.appendChild(headArticleImg);

    //

    headerArticle.textContent = jsObject.articles[0].title;

    //
    headerDesc.textContent = jsObject.articles[0].description;

    for (let i = 0; i < jsObject.length; i++) {
      const element = array[i];

      let newsArticle = document.createElement("article");

      newsArticle.className = "article";
      newsArticle.className = "article";
    }
  });
