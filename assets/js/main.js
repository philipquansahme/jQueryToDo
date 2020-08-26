//Check Off Specific Todos By Clicking 
$("li").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click to Delete
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

//KeyPress Entry
$("input[type='text']").on("keypress", function(e){
    if(e.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        //Appending to List
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

//Plus Toggle
$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle(500);
});