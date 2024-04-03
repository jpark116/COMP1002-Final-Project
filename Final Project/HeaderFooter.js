const header = document.getElementById("header");

header.innerHTML = `  
<header> 
<div class="pageheader">
<a href="home.html" class="active">Placeholder for img</a>

<!--Header links for website navigation -->
<div id="linkheader">
    <a href="Product.html">Product</a>
    <a href="Contact.html">Contact</a>
    <a href="About.html">About</a>
</div>

<!--"Hamburger function to toggle links"-->
<a href="javascript:void(0);" class="icon" onclick="myFunction()">
<i><div></div><div></div><div></div></a>
<script src="Hamburger.js"></script>

</div>
<header>
    `
    function myFunction()
    {
        var x = document.getElementById("linkheader");
        if (x.style.display === "block") {
            x.style.display = "none";
        }
        else {
            x.style.display = "block";
        }
    }

    const footer = document.getElementById("footer")

    footer.innerHTML=`<footer>
    <p class=footernote> Nintendo rights reserved 1989. </p> 
    </footer>
    `
