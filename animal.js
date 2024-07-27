class Animal {
  constructor(breed='red', talkingStyle = 'waau waau waau') {
    this.breed = breed;
    this.talkingStyle = talkingStyle
  }
  
  talk() {
    console.log(this.talkingStyle);
 } 

showUp(whereX = 100, whereY = 100) {
  stroke(this.breed);  
  strokeWeight(10);
  point(whereX,whereY);
}
}
function setup(){
  createCanvas(400,400);
  background('green');
  
  let mrCobie = new Animal('yellow',"waau waau waau")
  mrCobie.talk();
  mrCobie.showUp(100,200);
}