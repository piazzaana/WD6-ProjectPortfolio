<?php

class Welcome extends AppController {
    public function __construct($parent)
    {
        $this->parent = $parent;
        $this->showList();
    }

    public function showList(){
        //$data = parent::getModel('students')->select("select * from students");
        $data = $this->parent->getModel('students')->select("select * from students");
        $this->getView('welcome', $data);
    }
}