/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var timeout = 0;

function addBlock()
{
    var block_name = document.getElementById("block_name").value;
    var block_id = document.getElementById("block_id").value;

    if (block_name == '' || block_id == '')
    {
        alert("Nevyplnil jste všechna pole.");
        return;
    }

    var new_block = document.createElement("li");
    new_block.classList.add("list-group-item");
    new_block.classList.add("list-group-item-action");
    new_block.classList.add("list-group-item-success");
    new_block.classList.add("flex-column");
    new_block.onclick = function(){this.remove(); timeout -= 1000;};

    var new_block_header = document.createElement("h5");
    new_block_header.classList.add("mb-1");
    new_block_header.innerHTML = "Výběr bloku " + block_name + " s ID " + block_id;

    var new_block_p = document.createElement("p");
    new_block_p.classList.add("mb-1");
    new_block_p.innerHTML = "<code>setTimeout(vyberBloku, " + timeout + ", '" + block_id + "');</code>";
    timeout += 1000;

    new_block.appendChild(new_block_header);
    new_block.appendChild(new_block_p);

    document.getElementById("result_list").appendChild(new_block);

    document.getElementById("block_name").value = "";
    document.getElementById("block_id").value = "";
    toast("Přidán nový výběr bloku");
}

function addSubject()
{
    var subject_block_name = document.getElementById("subject_block_name").value;
    var subject_name = document.getElementById("subject_name").value;
    var subject_semester_name = document.getElementById("subject_semester_name").value;
    var subject_category = document.getElementById("subject_category").value;

    if (subject_block_name == '' || subject_name == '' || subject_semester_name == '' || subject_category == '')
    {
        alert("Nevyplnil jste všechna pole.");
        return;
    }

    var new_block = document.createElement("li");
    new_block.classList.add("list-group-item");
    new_block.classList.add("list-group-item-action");
    new_block.classList.add("list-group-item-primary");
    new_block.classList.add("flex-column");
    new_block.onclick = function(){this.remove(); timeout -= 500;};

    var new_block_header = document.createElement("h5");
    new_block_header.classList.add("mb-1");
    new_block_header.innerHTML = "Výběr předmětu " + subject_name + " v bloku " + subject_block_name;

    var new_block_p = document.createElement("p");
    new_block_p.classList.add("mb-1");
    new_block_p.innerHTML = "<code>setTimeout(vyberPredmetu, " + timeout + ", '" + subject_block_name + "', '" + subject_name + "', '" + subject_semester_name + "', '" + subject_category + "');</code>";
    timeout += 500;

    new_block.appendChild(new_block_header);
    new_block.appendChild(new_block_p);

    document.getElementById("result_list").appendChild(new_block);

    document.getElementById("subject_block_name").value = "";
    document.getElementById("subject_name").value = "";
    document.getElementById("subject_category").value = "";
    toast("Přidán nový výběr předmětu");
}

function addClass()
{
    var class_name = document.getElementById("class_name").value;
    var class_id = document.getElementById("class_id").value;

    if (class_name == '' || class_id == '')
    {
        alert("Nevyplnil jste všechna pole.");
        return;
    }

    var new_block = document.createElement("li");
    new_block.classList.add("list-group-item");
    new_block.classList.add("list-group-item-action");
    new_block.classList.add("list-group-item-info");
    new_block.classList.add("flex-column");
    new_block.onclick = function(){this.remove(); timeout -= 500;};

    var new_block_header = document.createElement("h5");
    new_block_header.classList.add("mb-1");
    new_block_header.innerHTML = "Výběr hodiny " + class_name + " s ID " + class_id;

    var new_block_p = document.createElement("p");
    new_block_p.classList.add("mb-1");
    new_block_p.innerHTML = "<code>setTimeout(function() {var lessons = document.querySelectorAll(\"input[value='" + class_id + "']\"); for (var i = 0; i < lessons.length; i++) {lessons[i].click();} ulozitZmeny();}, " + timeout + ");</code>";
    timeout += 500;

    new_block.appendChild(new_block_header);
    new_block.appendChild(new_block_p);

    document.getElementById("result_list").appendChild(new_block);

    document.getElementById("class_name").value = "";
    document.getElementById("class_id").value = "";
    toast("Přidán nový výběr hodiny");
}

function generate()
{
    var result_code = "";
    var result_list_children = document.getElementById("result_list").children;
    for (var i = 0; i < result_list_children.length; i++)
    {
        var code = result_list_children[i].children[1].children[0].innerHTML;
        result_code += code + "<br>";
    }
    document.getElementById("result_code").innerHTML = result_code;
}

function copy() 
{
    var copyText = document.getElementById("result_code");
    copyText = copyText.innerHTML.replace(/<br>/g, '\n');
    navigator.clipboard.writeText(copyText.replace(/&lt;/g, '<'));
    toast("Zkopírováno do schránky");
}

function toast(text)
{
    var x = document.getElementById("snackbar");
    x.innerHTML = text;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}