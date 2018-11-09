$( document ).ready( readyNow );

function addItem(){
    console.log( 'in addItem' );
} // end addItem

function filterList(){
    console.log( 'in filterList' );
} // end filterList

function readyNow(){
    console.log( 'in readyNow' );
    $( '#addItemButton' ).on( 'click', addItem );
    $( '#filterListButton' ).on( 'click', filterList );
} // readyNow