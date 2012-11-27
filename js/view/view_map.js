// Input 0
function MapView() {
  this.onCreate = function() {
    this.divElement = document.createElement("div");
    this.divElement.id = "MapView";
    this.divElement.style.display = "none";
    this.divElement.style.width = "100%";
    this.divElement.style.height = "100%";
    document.querySelector("body").appendChild(this.divElement);
    googleMapInitialize()
  };
  this.onResume = function() {
    document.querySelector("#view").style.display = "none";
    this.divElement.style.display = "block"
  };
  this.onPause = function() {
    document.querySelector("#view").style.display = "block";
    this.divElement.style.display = "none"
  }
}
MapView.prototype = new View;