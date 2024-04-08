const header = document.getElementById("header");

header.innerHTML = `  
<header> 
<div class="pageheader">
<a href="home.html" class="active"><img src=Logo.png class="Logo"></a>

<!--Header links for website navigation -->
<div id="linkheader">
    <a href="Product.html" class="link">Product</a>
    <a href="Contact.html" class="link">Contact</a>
    <a href="About.html" class="link">About</a>
</div>

<!--"Hamburger function to toggle links"-->
<a class="icon" onclick="myFunction()">
<i><div></div><div></div><div></div></i></a>
</header>


</menu>
    `
    function myFunction()
    {
        var x = document.getElementById("linkheader");
        if (x.style.display === "flex") {
            x.style.display = "none";
            
        }
        else {
            x.style.display = "flex";
        }
    }

    const footer = document.getElementById("footer")

    footer.innerHTML=`<footer>
    <p class=footernote> Nintendo rights reserved &#169;1989. </p> 
    <p class=footernote> follow us </p>

    </footer>
    `
