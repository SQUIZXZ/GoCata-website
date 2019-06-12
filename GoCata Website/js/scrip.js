// This identfies that the document is ready for it's iteractional function  
// The window .stellar can be used on specific browsers to allow the jquery plugin that transfers the properties for parallax scolling. We use the $ sign to shorthand the document  
// I haven't used any sort of " <data-stellar-ratio="x"> " to change the speed of the parallex scroll because i feel that it runs at an appropriate speed. 
// By shorthanding the js it will look for any background or specified elements to do with the proccess and then reposition them when the element scrolls. 
// Having done some research, i found that in terms of allowing this parallax scoll to work for moblies, the broswer must support webkit and the js may need a different configuration due to it requiring a touch scrolling library. 
// The properties that also link to this page can be found in the external java script subfolder. The edit the referenced .stellar to edit things like background ratio etc 
// Essentially, the lines below state the order and function of how the process is taken place. Firstly we find the document by shorthanding it "$", then we use .ready as an instructional based piece of code to allow the site 
// understand that the script is once ready. After this we have "function" in brackets because we're referencing the file we want to use and the function java script can be seen below and it details the properties for nice scroll.  
// This operation is then taken place and followed up by .stellar which is a refernced set of java script code that allows for the parallax scroll to take place. 
$(document).ready(function() {
    $(window).stellar();
    
}); 

//Shorthanded document to identify current state as .ready
$(document).ready(
 
 // Then we have the function's properties which lays between openig and closings of sets of brackets. We source the shorthanded html file with .nice scoll, then we continue to detail how we want the fucntion to act. Using z-index 
 // we can change the layering of the elements. Obviosuly, cursor colour has been changed to rbga colour coding and then choosing the speed in which we want the scroll script to do . Adding a few other edits to the cursor border with 
 // 
  function() { 

    $("html").niceScroll({
        cursorcolor:"rgba(30,30,30,.5)",
        zindex:999,
        scrollspeed:100,
        mousescrollstep:50,
        cursorborder:"0px solid #fff",
    });
      

  }

);




