function abjad(){
    var data = 'saya ingin belajar bersama';
    data = data.split(" ")
    data.forEach(function(x){
        console.log('Item :'+x+'index ke '+ data.indexOf(x));
    })
}
abjad()