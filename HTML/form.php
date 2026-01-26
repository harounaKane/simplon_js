<?php
    $sexe = "femme";
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            margin-bottom: 10px;
        }
        input[type="reset"]{
            background-color: red;
        }
    </style>
</head>
<body>

    <form action="">
        <div>
            <label for="">Prénom</label>
            <input type="text" placeholder="Prénom" >
        </div>

        <div>
            <label for="">Nom</label>
            <input type="text" name="nom">
        </div>

        <div>
            <label for="">Âge</label>
            <input type="number" value="20" readonly disabled>
        </div>

        <fieldset>
            <legend>Sexe</legend>
             <div>
                <input <?= ($sexe == 'femme') ? 'checked' : '' ?> type="radio" name="sexe" id="femme" value="femme" >
                <label for="femme">Femme</label>
            </div> <div>
                <input <?= ($sexe == 'homme') ? 'checked' : '' ?> type="radio" name="sexe" id="homme" value="homme">
                <label for="homme">Homme</label>
            </div>
        </fieldset>

        <fieldset>
            <legend>Langages</legend>
            <div>
                <input type="checkbox" value="JS" id="js" checked>
                <label for="js">JavaScript</label>
                <input type="checkbox" value="HTML" id="html">
                <label for="html">HTML</label>
                <input type="checkbox" value="CSS" id="css">
                <label for="css">CSS</label>
                <input type="checkbox" value="PHP" id="php">
                <label for="php">PHP</label>
            </div>
        </fieldset>

        <select name="" id="">
            <option value="Fr">France</option>
            <option value="Bl">Belgique</option>
            <option value="Sd">Soudan</option>
            <option value="Mx" selected>Mexique</option>
            <option value="Ng">Nigéria</option>
        </select>


        <div>
            <textarea name="" id="" cols="90" rows="5"></textarea>
        </div>

        <div>
            <input type="submit">
           <!-- <input type="reset">
            <button>Soumettre</button>-->
        </div>
    </form>
    
</body>
</html>