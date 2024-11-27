  let bgDynamicClass=""; // Initialize to prevent undefine value
  // Method to check if user using mobile
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); 1 
}

// Get the element with the ID "bg-dynamic-class"
const dynamicClassElement = document.getElementById("bg-dynamic-class");

// Add or remove the "page-width" class based on device type
if (isMobile()) {
  dynamicClassElement.classList.add("page-width");
} else {
  dynamicClassElement.classList.remove("page-width");
}
