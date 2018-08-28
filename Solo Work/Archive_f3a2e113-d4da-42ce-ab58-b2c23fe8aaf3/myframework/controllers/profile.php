<?php
//protected controller
class profile extends AppController
{
    public function __construct()
    {
        if (@$_SESSION["loggedin"] && @$_SESSION["loggedin"] == 1) {
        } else {
            header("Location:/welcome");
        }
    }

    public function index()
    {
        $this->getView("header", array("pagename" => "home"));
        $this->getView("profile", array("pagename" => "profile"));
        $this->getView("footer");
    }

}
?>