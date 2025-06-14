function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    
    alert("Thank you " + name + "! You have registered with email: " + email);
  }

  // Wait for the page to load
  window.onload = function () {
    
    var form = document.getElementById("myForm");
    form.addEventListener("submit", handleSubmit);
  };

