
function Save() {
    var myStorage = document.getElementById("textarea").value;
    localStorage.setItem("storage", myStorage);

    
  }

function Load() {
    var myStorage = localStorage.getItem("storage");
    document.getElementById("textarea").value = myStorage;
}
Load();