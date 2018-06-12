$(document).ready(()=>{
  $("#available-div ul").on("click","li button",function(){
    const clickedId = $(this).attr("burgerId");
    $.post("/api/burgers/devour",
      {id:clickedId},
      data=>{
        location.reload();
      }
    );
  });

  $("#create-burger-form").submit(e=>{
    e.preventDefault();
    console.log(e.currentTarget[0].value);

    $.post("/api/burgers",
      {name:e.currentTarget[0].value},
      data => {
        location.reload();
        // $("#available-div ul").append(
        //   $(`<li>${e.currentTarget[0].value} <button burgerId=${data.id}>Devour</button></li>`);
        // );
      }
    );
  });
})