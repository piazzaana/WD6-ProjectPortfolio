<?php
//public controller
class welcome extends AppController
{
    public function __construct()
    {

    }

    public function index(){
        $this->getView("header", array("pagename"=>"home"));
        $this->getView("welcome");
        $this->getView("footer");
    }

    public function contact(){
        $this->getView("header", array("pagename"=>"contact"));
        $random = substr( md5(rand()), 0, 7);
        $_SESSION["captcha"] = $random;
        $this->getView("contact",array("cap"=>$random));
        $this->getView("footer");
    }

    public function contactRecv(){
        $this->getView("header", array("pagename"=>"contact"));

        if ($_SERVER["REQUEST_METHOD"] == "POST") {

            //variables
            $email = $_POST["email"];
            $password = $_POST["password"];
            $select = $_POST["select"];
            $checkbox = "Checkbox is checked";
            $gender = $_POST["gender"];
            $comments = $_POST["comments"];
            $captcha = $_POST["captcha"];

            //error variables
            $emailErr = "<span class='alert-danger'>Invalid format</span>";
            $emailEmpty = "<span class='alert-danger'>Email is required</span>";
            $passwordErr = "<span class='alert-danger'>Password is required</span>";
            $checkboxErr = "<span class='alert-danger'>Checkbox is not checked</span>";
            $commentsErr = "<span class='alert-danger'>No comments were entered</span>";

            //if captcha validates, go ahead and validate the rest of the form
            if ($captcha == $_SESSION["captcha"]) {

                echo "<span class='alert-success'>Captcha valid<br></span>";

                //validate email
                if (empty($email)) {
                    echo $emailEmpty;
                    echo "<br>";
                }else{
                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        echo $emailErr;
                        echo "<br>";
                    }
                }

                //validate password
                if (empty($password)) {
                    echo $passwordErr;
                    echo "<br>";
                }

                //validate checkbox
                if (!(isset($_POST["checkbox"]) && $_POST["checkbox"]!="")) {
                    echo $checkboxErr;
                    echo "<br>";
                }

                //validate comments
                if (empty($comments)) {
                    echo $commentsErr;
                }

                //if everything is ok with the form display success message
                if (filter_var($email, FILTER_VALIDATE_EMAIL) && !(empty($password)) && isset($_POST["checkbox"]) && $_POST["checkbox"]!="" && !(empty($comments))) {
                    echo "<span class='alert-success'>Form submitted successfully</span>";
                }

                echo "<br><a href='/welcome/contact'>Click here to go back</a>";

            }else {
                echo "<span class='alert-danger'>Captcha validation failed</span>";
                echo "<br><a href='/welcome/contact'>Click here to go back</a>";
            }

        }

        $this->getView("footer");
    }


    public function ajaxPars(){
        if (@$_REQUEST["email"]!=="" && @$_REQUEST["password"]!=="") {
            echo "welcome";
        }else {
            echo "bad login";
        }
    }
}
?>