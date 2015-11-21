/**
 * Created by alemjc on 11/21/15.
 */
var counter = 0;
$(document).ready(initializer);

function initializer(){
    console.log("initializer!!!!!!");
    $("#footerRow").children().children().on("click",addToBody);
}

function addToBody(){

    var element = $("<"+$(this).prop("tagName")+">");
        element.dblclick(deleteFromBody);
        element.hover(addAncestors,clearNavBar);
    console.log("here");
    if(counter === 0){
        console.log("here1");
        var row = $("<div class='row-fluid'>");
        var col = $("<div class='col-md-3'>");
        col.append(element);
        row.append(col);
        $("#body").append(row);
    }
    else{
        console.log("here2");
        $("#body").children().last().append($("<div class='col-md-3'>").append(element));

    }

    counter++;
    counter%=3;

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