 var modal = null
  function pop() {
    if(modal === null) {
      document.getElementById("box").style.display = "block";
      modal = true
    } else {
      document.getElementById("box").style.display = "none";
      modal = null
    }
  }