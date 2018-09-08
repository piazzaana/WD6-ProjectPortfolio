<h1>STUDENTS GRADES REPORT (Teacher's App)</h1>

<h3 style="color: green">Input your student's name & final grade percentage (%)</h3>

<?php
foreach ($data as $student){
    echo $student['name'].' '.$student['grade']."<a href='#/".$student['id']."'>EDIT</a><br>";
}