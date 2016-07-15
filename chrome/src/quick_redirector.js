try{
  if(document.getElementsByTagName("meta")[0].httpEquiv == "refresh" && document.getElementById("f") != null){
      location.reload(true)
  }
}catch(e){}
