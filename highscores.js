const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

 
  window.emptyList = function () {
    var ul = document.querySelector('.list');
    var listLength = ul.children.length;
  
    while (ul.children.length !=0){
      ul.removeChild(ul.childNodes[0]);
    }
  
    // this works
    // ul.innerHTML = "";
  
  }