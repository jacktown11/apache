window.onload = function(){
	main();
};

function main(){
	var oDiv = document.getElementById('drop_list');
	var oH1 = oDiv.getElementsByTagName('h1')[0];
	var oUl = oDiv.getElementsByTagName('ul')[0];
	oH1.onclick = function(){
		toggleDrop(oH1,oUl);
	}
}

function toggleDrop(obj1,obj2){
	if(obj2.style.display === 'none'){
		obj1.className = 'up';
		obj2.style.display = 'block';
	}else{
		obj1.className = 'down';
		obj2.style.display = 'none';
	}
}


