import './index.css'
class Test {
	constructor (name){
    	this.name = name
    }
  	logger() {
    	console.log('hello')
    }
}

@annotation
class Myclass{}

function annotation(target){
	target.annotated = true
}
