/**
 * Created by alemjc on 11/21/15.
 */
$(document).ready(initilizer);

function initilizer(){
    $("#footerRow").children().on("click",addToBody);
}

function addToBody(){
    var element = $("<"+$(this).tagName+">").dblclick(deleteFromBody).hover(addAncestors,clearNavBar);
    $("#body").append(element);

}

function deleteFromBody(){
    var choice = confirm("Are you sure you want to delete?");
    if(choice){
        $(this).remove();
    }


}

function clearNavBar(){

}



function addAncestors(){
    var parents = $(this).parents();
    for(var i = 0; i < parents.length; i++){
        $("#navbar").append(parents[i].tagName);
    }

}