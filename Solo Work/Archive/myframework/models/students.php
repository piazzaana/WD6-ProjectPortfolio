<?php
class students{
    public function __construct($parent)
    {
        $this->db = $parent->db;
    }

    public function select($sql, $value=array()){
        $this->sql = $this->db->prepare($sql);
       // $result = $this->db->execute($value);
        $data = $this->sql->fetchAll();
        return $data;
    }

    public function add($sql, $value=array()){

    }

    public function delete(){

    }

    public function update(){

    }
}