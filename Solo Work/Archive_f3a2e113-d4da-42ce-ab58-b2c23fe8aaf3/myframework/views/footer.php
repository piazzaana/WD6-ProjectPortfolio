      <!-- FOOTER -->
      <footer class="bg-dark">
          Ana Cristina Piazza - Full Sail University
      </footer>

    </div> <!-- END CONTAINER -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/assets/js/main.js"></script>
    <script type="text/javascript">
      console.log("script tag running");
      $("#ajaxbutton").click(function(){
        $.ajax({
          method:"POST",
          url:"/welcome/ajaxPars",
          data:{"email":$("#email").val(),
                "password":$("#password").val()},
          success:function(msg) {
            if (msg=="welcome") {
              alert("welcome");
            }else {
              alert("PROBLEM!");
            }
          }
        })
      })
    </script>
  </body>
  <!-- END BODY -->
</html>
