<?php
class auth extends AppController{
    public function __construct($parent)
    {
        $this->parent = $parent;
    }

    public function login(){

        //check if username and password exists
        if($_REQUEST["username"] && $_REQUEST["password"]){

            $data = $this->parent->getModel("users")->select("select * from users where email = :email and password = :password",array(":email"=>$_REQUEST["username"],":password"=>sha1($_REQUEST["password"])));

            if ($data){
                $_SESSION["loggedin"] = 1;
                header("location:/welcome?msg=logged in");
            }else{
                header("location:/welcome?msg=bad login");
            }

        }

    }

    public function logout(){
        //destroy the session
        session_destroy();
        //go to welcome page
        header("Location:/welcome");
    }
}
?>