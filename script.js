(function(){
    var container = document.getElementById("root");
    function shuffle() {
        var elementsArray = getElementsAsArray();
        removeChildren(elementsArray);
        shuffleArray(elementsArray);
        addChildren(elementsArray);
    }
    
    function createChildren(num) {
        for(var i = 1; i <= num; i++) {
            var elem = document.createElement('div');
            elem.setAttribute('id', i);
            elem.setAttribute('class', 'shuffleMe' + ' color' +i);
            elem.innerText = i;
            container.appendChild(elem);
        }
    }
    
    function sort() {
        var elementsArray = getElementsAsArray();
        removeChildren(elementsArray);
        elementsArray.sort(function(a, b) {return a.id - b.id});
        addChildren(elementsArray);
    }
    
    function getElementsAsArray (){
        var items = container.getElementsByClassName('shuffleMe')
        var elementsArray = Array.prototype.slice.call(items);
        return elementsArray;
    }
    function removeChildren(elementsArray) {
        elementsArray.forEach(function (element) {
            container.removeChild(element);
        });
    }
    
    function addChildren(elementsArray) {
        elementsArray.forEach(function (element) {
            container.appendChild(element);
        });
    }
    
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    document.onload = function(){createChildren(9)};
    
    document.onload();

    var shuffleBtn = document.querySelector("#shufflebtn");
    shuffleBtn.addEventListener('click', function(){
        shuffle();
    });
    var sortBtn = document.querySelector("#sortbtn");
    sortBtn.addEventListener('click', function(){
        sort();
    });
})()
    

