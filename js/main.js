function loadJSON(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

loadJSON('data/data.json',function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  profileData(data.profiles);

})
var mainDiv=document.querySelector(".main");
function profileData(pro){

  for(var i=0;i<pro.length;i++)
  {
    var subDiv=document.createElement("div");
    subDiv.classList.add("subdiv");
    mainDiv.appendChild(subDiv);
    var img=document.createElement("img");
    img.src=pro[i].image;
    img.alt="image";
   subDiv.appendChild(img);
    var name=document.createElement("h2");
    name.textContent=pro[i].name;
    var label=document.createElement("h3");
    label.textContent=pro[i].label;
    var company=document.createElement("h4");
    company.textContent=pro[i].company;
    subDiv.appendChild(name);
    subDiv.appendChild(label);
    subDiv.appendChild(company);
    var link=document.createElement("a");
    link.href="resume.html?id="+pro[i].id;
    link.textContent="View Profile";
    subDiv.appendChild(link);

  }
}
