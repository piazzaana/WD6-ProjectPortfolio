<div class="container">
    <div class="starter-template">
        <form action="/about/updateAction" method="POST" id="updateForm">
            <?
            $uriParts = explode("/", $_SERVER["REQUEST_URI"]);
            $id = $uriParts[3];
            $name = $this->parent->getModel("fruits")->select("select name from fruit_table where id=".$id);
            ?>
            <input type="text" name="update" value="<?php echo $name[0][0] ?>">
            <button type="submit" name="updatebtn">Update</button>
        </form>
    </div>
</div>