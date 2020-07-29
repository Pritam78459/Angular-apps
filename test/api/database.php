<?php

session_start();

$user = $_SESSION['user'];

if ($user == 'admin') {
    echo '{
        "message" : "This is a Secret message only for the admin",
        "success" : true

    }';
}
else {
    echo '{
        "message" : "Who are you???",
        "success" : false

    }';
}



?>