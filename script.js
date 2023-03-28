<script>
    var myVar;

    function myFunction() {
      myVar = setTimeout(showPage, 1);
    }

    function showPage() {
      document.getElementById("placeOne").style.display = "none";
      document.getElementById("placeTwo").style.display = "block";
    }
</script>
