class Dog{
    constructor(){

    }
    getCount(){
        var dogCountRef = database.ref('dogCount');
        dogCountRef.on("value",function(data){
            dogCount = data,val();
        })
    }
    updateCount(){
        database.ref('ref').update({
            dogCount:count
        })
    }
    update(name){
        var dogIndex = "dog" + playerCount;
        database.ref(dogIndex).set({
            name:name
        })
    }
}