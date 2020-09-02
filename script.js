const fs=require('fs');

fs.readFile('./script.txt',(err,data)=>{
	if(err){
		console.log(err);
	}
	else{
		console.log('async',data.toString('utf8'));
	}
})

const file=fs.readFileSync('./script.txt');
console.log('sync',file.toString('utf8'));


fs.appendFile('./script.txt',' hi',(err,data)=>{
	if(err){
		console.log(err);
	}
})
