var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function cats(){
  kittens;
  return kittens;
}
cats();

function destructivelyAppendKitten() {
kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(){
kittens.unshift('Bob');
  return kittens
}


function destructivelyRemoveLastKitten(){
kittens.pop();
  return kittens;
}


function destructivelyRemoveFirstKitten(){
    kittens.shift();
  return kittens;
}

  //var name = 'Broom';
function appendKitten(name){
kittens.push(name);
  return kittens;
}
//appendKitten("Broom");


//var kittens = ["Milo", "Otis", "Garfield"];
function prependKitten(name){
kittens.unshift(name);
  return kittens;
}

function removeLastKitten(){
var kittens = ["Milo", "Otis", "Garfield"];
var cat;
cat = kittens.pop();
return kittens;
}



function removeFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"];
var cat;
cat =  kittens.shift();
  return kittens;
}
