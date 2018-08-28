<?
    class apiModel{
        //construct
        public function __construct($parent)
        {
            $this->db = $parent->db;
        }

        //method for connecting to the api
        public function googleBooks($term='')
        {
            //including the google api php client
            require_once './google-api-php-client/src/Google/autoload.php';

            $client = new Google_Client();

            //passing in the credentials
            $client->setApplicationName("sslapi");
            $client->setDeveloperKey("AIzaSyCYP_pga4Hmc3vWqrp8Jeqyzw5MxXG7O0g");

            //requesting the service passing in the credentials
            $service = new Google_Service_Books($client);
            //filtering the books to return
            $optParams = array("filter"=>"free-ebooks");
            //getting the books
            $result = $service->volumes->listVolumes($term, $optParams);
            //returning the books so it can be viewed
            return $result;
        }
    }
?>