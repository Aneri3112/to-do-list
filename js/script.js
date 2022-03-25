function newItem() {

    //Add a new item to list:
    let li = $('<li></li>');
  
    let inputValue = $("input").val();
    li.append(inputValue);
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(li);
      $("input").val(''); 
    }
  
    function crossOut() {
      li.toggleClass("strike");
    }
  
    li.on("dblclick", crossOut);
  
    //Delete button 
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);
  
    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
      li.addClass("delete")
    }
    //Reordering the items:
    $('#list').sortable();
  
}