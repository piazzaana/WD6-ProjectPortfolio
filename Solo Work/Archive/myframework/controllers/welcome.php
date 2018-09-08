<?php

class Welcome extends AppController {
    public function __construct($parent)
    {
        $this->parent = $parent;
        $this->showList();
    }

    public function showList(){
        $data = $this->parent->getModel('students')->select("select * from students_table");
        $this->getView('welcome', $data);
    }
}