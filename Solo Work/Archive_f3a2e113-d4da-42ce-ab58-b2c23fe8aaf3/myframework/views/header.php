<!DOCTYPE html>
<html lang="en" dir="ltr">

    <!--  HEAD -->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Navbar Template for Bootstrap</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Bootstrap core CSS -->
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="/assets/css/main.css">
    </head>

    <!-- BODY -->
    <body>

        <!-- CONTAINER -->
        <div class="container">
            <!-- HEADER -->
            <header>
                <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <span class='navbar-brand mb-0 h1'>Assignment 8</span>
                    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span class='navbar-toggler-icon'></span>
                    </button>
                    <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul class='navbar-nav mr-auto'>
                            <li <?=@$data["pagename"]=="home"?'class="active"':''?>>
                            <a class="nav-link" href="/welcome">Home</a>
                            </li>
                            <li><a class="nav-link" href="/about">About</a></li>
                            <li><a class="nav-link" href="/api/showApi">Api</a></li>
                            <li <?=@$data["pagename"]=="contact"?'class="active"':''?>>
                            <a class="nav-link" href="/welcome/contact">Contact</a>
                            </li>
                        </ul>
                        <span style="color:red"><?=@$_REQUEST["msg"]?@$_REQUEST["msg"]:'';?></span>
                        <?php if (@$_SESSION["loggedin"] && @$_SESSION["loggedin"]==1) {?>
                        <form class="navbar-form navbar-right">
                            <a href="/profile">Profile |</a>
                            <a href="/auth/logout"> Logout</a>
                        </form>
                        <?php }else { ?>
                        <form class="navbar-from navbar-right" role="search" action="/auth/login" method="post">
                            <div class="form-group">
                                <input type="text" class="form-control" name="username" placeholder="Username">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" name="password" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-default" name="button">Sing In</button>
                        </form>
                        <?php } ?>
                    </div>
                </nav>

            </header>
