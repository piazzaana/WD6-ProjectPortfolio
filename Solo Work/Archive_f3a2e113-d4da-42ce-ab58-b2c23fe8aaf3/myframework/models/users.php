<?
    class users{

        public function __construct($parent)
        {
            $this->db = $parent->db;
        }

        public function select($sql,$value=array())
        {
            $this->sql = $this->db->prepare($sql);
            $result = $this->sql->execute($value);
            $data = $this->sql->fetchAll();
            return $data;
        }

        public function add($sql, $value=array())
        {
            $this->sql = $this->db->prepare($sql);
            $result = $this->sql->execute($value);
        }

        //add functionality for the view methods
        public function delete()
        {
            echo "users model delete function";
        }

        public function update()
        {
            echo "users model update function";
        }
    }
?>