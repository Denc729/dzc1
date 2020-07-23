function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

const $ = (e) => new jQuery(e);

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}


//метод для возаращения/замены html
jQuery.prototype.html=function(insert=""){
    if(insert==""){
  let HTML_cont="";
  this.each(element =>HTML_cont += element.innerHTML);
  return HTML_cont;
}
else{
    this.each(element =>element.innerHTML=insert);
}
}
//метод для возаращения/замены текста
jQuery.prototype.text=function(insert=""){
    if(insert==""){
  let TXT_cont="";
  this.each(element =>TXT_cont += element.textContent);
  return TXT_cont;
}
else{
    this.each(element =>element.textContent=insert);
}
}

