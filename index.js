function openpg()
{
    document.getElementById("circle").style.display = "inline-block";
    document.getElementById("info").style.display = "none";
}
function closepg() {
    document.getElementById("circle").style.display = "none";
    document.getElementById("info").style.display = "inline";
}

document.getElementById("feedback-click").addEventListener("click", function()
{
    document.getElementById("feedback-click").style.display = "none";
    document.getElementById("inp-form").style.display = "inline";
    document.getElementById("close_btn_feedback").style.display = "block";
    document.getElementById("close_btn_feedback").addEventListener("click",function()
    {
        console.log("inside");
        document.getElementById("feedback-click").style.display = "inline";
        document.getElementById("inp-form").style.transform = "translateX(-400px)";
        document.getElementById("inp-form").style.transition = "ease 1s";
        setTimeout(function ()
        {
            document.getElementById("inp-form").style.display = "none";
            document.getElementById("inp-form").style.transform = "translateX(0)"; // reset transform property
        },500);
        document.getElementById("close_btn_feedback").style.display = "none";
    });
});