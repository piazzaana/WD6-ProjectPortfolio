<!-- CONTACT FORM -->
<form action="/welcome/contactRecv" method="post">

    <!-- EMAIL FIELD -->
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" name="email" class="form-control" id="email" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <!-- PASSWORD FIELD -->
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" class="form-control" id="password" placeholder="Password">
    </div>

    <!-- SELECTION FIELD -->
    <div class="form-group">
        <label for="selectcontrol">Select one from the options</label>
        <select class="form-control" id="select" name="select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
        </select>
    </div>

    <!-- CHECKBOX FIELD -->
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="checkbox" name="checkbox">
        <label class="form-check-label" for="checkbox">
            Checkbox
        </label>
    </div>
    <br>

    <!-- RADIO BUTTONS -->
    <div class="form-check">
        <p>Gender</p>
        <input class="form-check-input" type="radio" name="gender" id="female" value="female" checked>
        <label class="form-check-label" for="radio1">
            Female
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="gender" id="male" value="male">
        <label class="form-check-label" for="radio2">
            Male
        </label>
    </div>
    <div class="form-group">
        <label for="textarea">Comments</label>
        <textarea class="form-control" id="textarea" name="comments" rows="3"></textarea>
    </div>

    <!-- CAPTCHA FUNCTIONALITY -->
    <?
    function create_image($cap)
    {
        unlink("./assets/image1.png");
        global $image;
        $image = imagecreatetruecolor(200, 50) or die("Cannot Initialize new GD image stream");
        $background_color = imagecolorallocate($image, 255, 255, 255);
        $text_color = imagecolorallocate($image, 0, 255, 255);
        $line_color = imagecolorallocate($image, 64, 64, 64);
        $pixel_color = imagecolorallocate($image, 0, 0, 255);
        imagefilledrectangle($image, 0, 0, 200, 50, $background_color);
        for ($i = 0; $i < 3; $i++) {
            imageline($image, 0, rand() % 50, 200, rand() % 50, $line_color);
        }
        for ($i = 0; $i < 1000; $i++) {
            imagesetpixel($image, rand() % 200, rand() % 50, $pixel_color);
        }
        $text_color = imagecolorallocate($image, 0, 0, 0);
        ImageString($image, 22, 30, 22, $cap, $text_color);
        imagepng($image, "./assets/image1.png");
    }
    create_image($data["cap"]);
    echo "<img src='/assets/image1.png'>";
    ?>

    <!-- CAPTCHA -->
    <div style="margin:20px 0;">
        <label for="captcha">Enter Captcha</label>
        <input name="captcha" type="captcha" id="captcha">
    </div>

    <!-- SUBMIT BUTTON -->
    <button type="submit" class="btn btn-primary">Submit</button>

    <!-- SUBMIT AJAX -->
    <input type="button" class="btn btn-primary" id="ajaxbutton" value="Ajax Submit">
</form>