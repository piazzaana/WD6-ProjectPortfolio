<div class="container" style="min-height: 600px;">
  <div class="starter-template">
      <h1>Bootstrap starter template</h1>
      <p><a href="/about/showAddForm">Add New</a></p>
      <?php
        foreach ($data as $fruit)
        {
            $name = $fruit["name"];
            $id = $fruit["id"];
            echo $name."<a href='/about/showUpdateForm/".$id."'> EDIT</a> <a href='/about/deleteAction/".$id."'>DELETE</a><br>";
        }
      ?>
  </div>
</div>