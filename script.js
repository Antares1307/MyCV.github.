'use strict';
 
 const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
const displayEmail = function(msg){
    document.querySelector('.error').textContent = msg;
}

const iii = document.querySelector('#iiiii');
const sha = document.querySelector('#shadow');
document.querySelector('.btn').addEventListener('click', function(){
    const email = document.querySelector('.email').value;
    if(email.length == 0){
        displayEmail('⚠ Enter your email!')
    } else if (!regex.test(email)){
        displayEmail('⚠ Email hong dung dinh dang!')
    } else{
        //hien thi cai vung thong tin chi tiet
        iii.classList.remove('hid');
        // an form
        sha.classList.add('hid');
    } 
})


// View More
const viewMoreBtns = document.querySelectorAll(".viewmore");
      viewMoreBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const jobContent = btn.nextElementSibling;
          if (jobContent.classList.contains("hide-ex")) {
            jobContent.classList.remove("hide-ex");
            btn.textContent = "View Less";
          } else {
            jobContent.classList.add("hide-ex");
            btn.textContent = "View More";
          }
        });
      });

