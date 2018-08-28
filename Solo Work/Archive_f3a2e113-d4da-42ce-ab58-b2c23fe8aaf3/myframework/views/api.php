<div class="container" style="min-height: 600px;">
    <div class="starter-template">
        <h1>Bootstrap starter template</h1>
        <?
            //looping through the data and echoing the volume info and title of the book
            foreach ($data as $item)
            {
                echo $item["volumeInfo"]["title"]." <br> \n";
            }
        ?>
    </div>
</div>