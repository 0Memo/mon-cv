<?php

    $array = array("name" => "", "company" => "", "email" => "", "phone" => "", "message" => "", "nameError" => "", "companyError" => "", "emailError" => "", "phoneError" => "", "messageError" => "", "isSuccess" => false);
    
    $emailTo = "guillaume.mehats@gmail.com";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $array["name"] = verifyInput($_POST["name"]);
        $array["company"] = verifyInput($_POST["company"]);
        $array["email"] = verifyInput($_POST["email"]);
        $array["phone"] = verifyInput($_POST["phone"]);
        $array["message"] = verifyInput($_POST["message"]);
        $array["isSuccess"] = true;
        $emailText = "";


        if(empty($array["name"])) {
            $array["nameError"] = "À qui ai-je l'honneur &#127925 ?";
            $array["isSuccess"] = false;            
        }
        else {
            $emailText .= "Nom, Prénom: {$array["name"]}\n";
        }

        if(empty($array["company"])) {
            $array["companyError"] = "Pour qui travailles-tu &#128075 ? ";
            $array["isSuccess"] = false;            
        }
        else {
            $emailText .= "Société: {$array["company"]}\n";
        }

        
        if(!isEmail($array["email"])) {
            $array["emailError"] = "Ne sois pas timide et donne-moi ton e-mail &#128231 !";
            $array["isSuccess"] = false;            
        }
        else {
            $emailText .= "E-mail: {$array["email"]}\n";
        }
        
        if(!isPhone($array["phone"])) {
            $array["phoneError"] = "Donne-moi les bons chiffres pour te contacter &#128241 !";
            $array["isSuccess"] = false;            
        }
        else {
            $emailText .= "Tél: {$array["phone"]}\n";
        }

        if(empty($array["message"])) {
            $array["messageError"] = "C'est bien plus sympa avec un petit message &#128172 !";
            $array["isSuccess"] = false;            
        }
        else {
            $emailText .= "Message: {$array["message"]}\n";
        }

        if($array["isSuccess"]){
            $headers = "From: {$array["name"]} {$array["company"]} <{$array["email"]}>\r\nReply-To: {$array["email"]}";
            mail($emailTo, "^^ Un recruteur t'a remarqué !! ^^", $emailText, $headers);
        }

        echo json_encode($array);

    }

    function isPhone($var) {
        return preg_match("/^[0-9 ]*$/", $var);
    }

    function isEmail($var) {
        return filter_var($var, FILTER_VALIDATE_EMAIL);
    }

    function verifyInput($var) {
        $var = trim($var);
        $var = stripslashes($var);
        $var = htmlspecialchars($var);

        return $var;
    }

?>
