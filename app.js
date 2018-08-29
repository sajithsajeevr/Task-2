
document.getElementById('bttn').addEventListener('click',removeDuplicates);

const ul=document.getElementById('array');
let array=[1,1,2,3,4,5,6,6,7];
array.forEach(element=>ul.innerHTML+=`<li>${element}</li>`);


function removeDuplicates(e){
    const noduplicatearray=document.getElementById('noduplicate');
    let noDuplicates=array.filter((item,pos,return1)=>{return return1.indexOf(item)==pos;});
    noDuplicates.forEach(element=>noduplicatearray.innerHTML+=`<li>${element}</li>`);
    document.getElementById('bttn').style.display='none';
    document.getElementById('noduplicatearrayhead').innerHTML="<em>Array with no Duplicate Elements<em>";
    e.preventDefault();
}