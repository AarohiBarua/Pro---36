class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Virtual Pet");
        title.position(130,0);
        var input = createInput("dog name");
        var button = createButton('play');
        var greeting = createElement('h3');
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            dogCount = dogCount + 1;
            dog.update(name);
            dog.updateCount(dogCount);
            greeting.html("Hello" + name);
            greeting.position(130,160)
        })
    }
}