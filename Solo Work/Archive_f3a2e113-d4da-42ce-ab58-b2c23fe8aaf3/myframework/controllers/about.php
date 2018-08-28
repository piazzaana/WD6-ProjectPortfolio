<?
    class about extends AppController{

        public function __construct($parent)
        {
            $this->parent = $parent;
            $this->showList();
        }

        public function showList()
        {
            $data = $this->parent->getModel("fruits")->select("select * from fruit_table");
            $this->getView("header",array("pagename"=>"about"));
            $this->getView("about",$data);
            $this->getView("footer");
        }

        public function showAddForm()
        {
            $this->getView("header",array("pagename"=>"about"));
            $this->getView("addForm");
        }

        public function addAction()
        {
            $data = $this->parent->getModel("fruits")->add("insert into fruit_table (name) values(:name)",array(":name"=>$_REQUEST["name"]));

            header("location:/about");
        }

        //add updateForm view
        public function showUpdateForm()
        {
            $this->getView("header",array("pagename"=>"about"));
            $this->getView("updateForm");
        }

        public function updateAction(){

            $this->parent->getModel("fruits")->update("update fruit_table set name=".@$_REQUEST["update"],array(":name"=>@$_REQUEST["update"]));
            $this->getView("about");
        }

        public function deleteAction(){
            $uriParts = explode("/", $_SERVER["REQUEST_URI"]);
            $data = $this->parent->getModel("fruits")->delete("delete from fruit_table where  id =".$uriParts[3]);
        }
    }
?>