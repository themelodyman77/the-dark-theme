// Navbar for mobiles
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
menuBtn.addEventListener('click', () => {
    const miniNav = document.getElementById('mini-nav');
    if (miniNav.style.display === 'flex') {
      document.getElementById("mini-nav").style.transform = "translateY(-100%)";
      document.getElementById("mini-nav").style.transition = "ease 0.8s";
      setTimeout(function ()
      {
        miniNav.style.display = 'none';
        document.getElementById("mini-nav").style.transform = "translateY(0)";//reset transform property else error occurs
      },800);
    } else {
      miniNav.style.display = 'flex';
    }
});  


// Aside button
function openpg()
{
    document.getElementById("circle").style.display = "inline-block";
    document.getElementById("info").style.display = "none";
}
function closepg() {
    document.getElementById("circle").style.display = "none";
    document.getElementById("info").style.display = "inline";
}

// Feedback function
document.getElementById("feedback-click").addEventListener("click", function()
{
    document.getElementById("feedback-click").style.display = "none";
    document.getElementById("inp-form").style.display = "inline";
    document.getElementById("close_btn_feedback").style.display = "block";
    document.getElementById("close_btn_feedback").addEventListener("click",function()
    {
        console.log("inside");
        document.getElementById("feedback-click").style.display = "inline";
        document.getElementById("inp-form").style.transform = "translateX(-500px)";
        document.getElementById("inp-form").style.transition = "ease 1s";
        setTimeout(function ()
        {
            document.getElementById("inp-form").style.display = "none";
            document.getElementById("inp-form").style.transform = "translateX(0)"; // reset transform property
        },500);
        document.getElementById("close_btn_feedback").style.display = "none";
    });
});