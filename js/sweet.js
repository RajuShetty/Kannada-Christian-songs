(function($) {
  "use strict";

// SweetAlert

document.querySelector('#sa-basic').onclick = function(){
    swal("Here's a message!");
};
document.querySelector('#sa-success').onclick = function(){
    swal("Good job!", "You clicked the button!", "success")
};
document.querySelector('#sa-confirm').onclick = function(){
    swal({   
        title: "Are you sure?",
        text: "You will not be able to recover this file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function(isConfirm){
    if (isConfirm){
      swal("Deleted!", "Your file has been deleted!", "success");
    } else {
      swal("Cancelled", "Your file is safe!", "error");
    }
    });
};
document.querySelector('#sa-error').onclick = function(){
    swal("Oops...", "Something went wrong!", "error");
};

document.querySelector('#sa-test').onclick = function(){
    swal({   
        title: "Are you sure?",
        text: "You will not be able to recover this file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function(isConfirm){
    if (isConfirm){
      swal("Deleted!", "Your file has been deleted!", "success");
    } else {
      swal("Cancelled", "Your file is safe!", "error");
    }
    });
};

})(jQuery);