
//Given Array
let array=[1,1,2,3,4,5,6,6,7];

const noDuplicates=array.filter(function(item,pos,return1){
return return1.indexOf(item)==pos;
});


console.log(noDuplicates);