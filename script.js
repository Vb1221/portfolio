$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 2, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 900, 
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520, 
        settings: {
          slidesToShow: 1 
        }
      }
    ]
  });
});

window.onload = () => {

  let langV = document.querySelector('.checkLang')
  let currentLang = document.querySelector('.currentLang')
  
  
  langV.addEventListener('change', checkLang)
  
  function checkLang(){
    if(langV.checked){
      currentLang.innerHTML = 'ua'
    }
    else if(!langV.checked){
      currentLang.innerHTML = 'en'
    }

    let lang = currentLang.innerHTML
    location.href = window.location.pathname + '#' + lang
    changeLanguage()
  }

  function changeLanguage(){
    let hash = window.location.hash
    hash = hash.substring(1)
    document.querySelector('title').innerHTML = langArr['title'][hash]
    document.querySelector('.myName').innerHTML = langArr['name'][hash]
    document.querySelector('.aboutMeTitle').innerHTML = langArr['aboutMeTitle'][hash]
    document.querySelector('.aboutMeText').innerHTML = langArr['aboutMe'][hash]
    document.querySelector('.skills').innerHTML = langArr['skills'][hash]
    document.querySelector('.myProjects').innerHTML = langArr['projects'][hash]

  }


  
}
