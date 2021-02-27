class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.shade = 200;
  }
display(){
console.log(this.body.speed)
if(this.body.speed< 3){
super.display();

}
else{
World.remove(world,this.body)
push()
this.shade= this.shade-7
tint(255,this.shade)
image(this.image,this.body.position.x,this.body.position.y)
pop()


}





}
};