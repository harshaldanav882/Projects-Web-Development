let toastBox = document.getElementById('toastBox');   // We are onsidering the DIV toastbox bcoz all the styling properties are present inside this div.
let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error!';
let invalidsMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';



function showToast(msg){                             // Onclick function
    let toast = document.createElement('div');    //creating new div
    toast.classList.add('toast');                 //creating new class indide the div
    toast.innerHTML =  msg;                  // writing text inside the class
    toastBox.appendChild(toast);                  //tostBox is a parent of the toast

    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=> {
        toast.remove();
    },6000);
}