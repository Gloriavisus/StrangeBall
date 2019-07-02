function main() {

    var mainElement = document.querySelector('#site-main');
  
    function buildDom(html) {
      mainElement.innerHTML = html;
      return mainElement;
    };
  