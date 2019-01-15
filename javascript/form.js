/* JS for order_online.html - Displays dialouge box when "submit order" is clicked, and form is properly filled out*/

window.onload = setForm;

function setForm() {
   document.getElementById("order2").onsubmit = function() {
      if (this.checkValidity()) alert("Order successfully placed. Thank you for choosing Backyard Burgers!");
   }
}
