<?
    class api extends AppController{
        //construct function
        public function __construct($parent)
        {
            $this->parent = $parent;
        }

        //method to show books requested
        public function showApi()
        {
            //getting the api view
            $this->getView("header", array("pagename"=>"api"));
            //defining the books to be showed
            $data = $this->parent->getModel("apiModel")->googleBooks("Henry David Thoreau");
            //showing the books on the api page
            $this->getView("api",$data);
            //getting the footer view
            $this->getView("footer");
        }
    }
?>