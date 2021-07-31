class rope{
	constructor(body1,body2, offsetX ,offsetY)
	{


	this.offsetX=offsetX
	this.offsetY=offsetY

	var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.offsetX,y:this.offsetY}
	}
		//create rope constraint here
		this.rope=Constraint.create(options)
		World.add(world,this.rope)

	}

	   


    //create display() here 
	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2)
	}

}
