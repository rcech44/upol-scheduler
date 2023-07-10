/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("result_div").addEventListener("contextmenu", e => e.preventDefault());

function showCode(block)
{
    block.children[1].style.display = "block";
}

function hideCode(block)
{
    block.children[1].style.display = "none";
}

function handleMouseClick(e, block)
{
    e.preventDefault();
    switch (e.button)
    {
        // Move up
        case 0:
            var items = {...document.getElementById("result_list").children};
            var items_array = Object.keys(items).map((key) => [items[key]]);
            document.getElementById("result_list").innerHTML = "";
            for (var i = 0; i < items_array.length; i++)
            {
                if (i > 0)
                if (items_array[i][0] == block)
                {
                    const temp = items_array[i-1][0];
                    items_array[i-1][0] = items_array[i][0];
                    items_array[i][0] = temp;
                    break;
                }
            }
            for (var i = 0; i < items_array.length; i++)
            {
                document.getElementById("result_list").append(items_array[i][0]);
            }
            break;

        // Remove
        case 1:
            block.remove();
            break;

        // Move down
        case 2:
            var items = {...document.getElementById("result_list").children};
            var items_array = Object.keys(items).map((key) => [items[key]]);
            document.getElementById("result_list").innerHTML = "";
            for (var i = 0; i < items_array.length; i++)
            {
                if (i < items_array.length - 1)
                if (items_array[i][0] == block)
                {
                    const temp = items_array[i+1][0];
                    items_array[i+1][0] = items_array[i][0];
                    items_array[i][0] = temp;
                    break;
                }
            }
            for (var i = 0; i < items_array.length; i++)
            {
                document.getElementById("result_list").append(items_array[i][0]);
            }
            break;
    }
}

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
    new_block.setAttribute("type", "block");
    new_block.onmousedown = function(e){handleMouseClick(e,this);};
    new_block.onmouseenter = function(e){showCode(this);};
    new_block.onmouseleave = function(e){hideCode(this);};

    var new_block_header = document.createElement("h5");
    new_block_header.classList.add("mb-1");
    new_block_header.innerHTML = "Výběr bloku " + block_name + " s ID " + block_id;

    var new_block_p = document.createElement("p");
    new_block_p.classList.add("mb-1");
    new_block_p.style.display = "none";
    new_block_p.innerHTML = "<code>setTimeout(vyberBloku, " + "XYZ" + ", '" + block_id + "');</code>";

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
    new_block.setAttribute("type", "subject");
    new_block.onmousedown = function(e){handleMouseClick(e,this);};
    new_block.onmouseenter = function(e){showCode(this);};
    new_block.onmouseleave = function(e){hideCode(this);};

    var new_block_header = document.createElement("h5");
    new_block_header.classList.add("mb-1");
    new_block_header.innerHTML = "Výběr předmětu " + subject_name + " v bloku " + subject_block_name;

    var new_block_p = document.createElement("p");
    new_block_p.classList.add("mb-1");
    new_block_p.style.display = "none";
    new_block_p.innerHTML = "<code>setTimeout(vyberPredmetu, " + "XYZ" + ", '" + subject_block_name + "', '" + subject_name + "', '" + subject_semester_name + "', '" + subject_category + "');</code>";

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
    var checked = "";
    if (document.getElementById("checkbox").checked) checked = "ulozitZmeny();";

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
    new_block.setAttribute("type", "class");
    new_block.onmousedown = function(e){handleMouseClick(e,this);};
    new_block.onmouseenter = function(e){showCode(this);};
    new_block.onmouseleave = function(e){hideCode(this);};

    var new_block_header = document.createElement("h5");
    new_block_header.classList.add("mb-1");
    new_block_header.innerHTML = "Výběr hodiny " + class_name + " s ID " + class_id;
    if (document.getElementById("checkbox").checked) new_block_header.innerHTML += " (a uložení)"

    var new_block_p = document.createElement("p");
    new_block_p.classList.add("mb-1");
    new_block_p.style.display = "none";
    new_block_p.innerHTML = "<code>setTimeout(function() {var lessons = document.querySelectorAll(\"input[value='" + class_id + "']\"); for (var i = 0; i < lessons.length; i++) {lessons[i].click();} " + checked + "}, " + "XYZ" + ");</code>";

    new_block.appendChild(new_block_header);
    new_block.appendChild(new_block_p);

    document.getElementById("result_list").appendChild(new_block);

    document.getElementById("class_name").value = "";
    document.getElementById("class_id").value = "";
    toast("Přidán nový výběr hodiny");
}

function generate()
{
    var timeout = 0;
    var result_code = "";
    var result_list_children = document.getElementById("result_list").children;
    for (var i = 0; i < result_list_children.length; i++)
    {
        var block = result_list_children[i];
        var code = block.children[1].children[0].innerHTML;
        code = code.replace("XYZ", timeout);
        switch (block.getAttribute("type"))
        {
            case "block":
                timeout += 1000;
                break;
            case "subject":
                timeout += 500;
                break;
            case "class":
                timeout += 500;
                break;
            default:
                timeout += 500;
                break;
        }
        result_code += code + "<br>";
    }
    document.getElementById("result_code").innerHTML = result_code;
}

function copy() 
{
    generate();
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

function download()
{
    generate();
    var copyText = document.getElementById("result_code");
    copyText = copyText.innerHTML.replace(/<br>/g, '\n');
    copyText = copyText.replace(/&lt;/g, '<');
    const link = document.createElement("a");
    const file = new Blob([copyText], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "script.txt";
    link.click();
    URL.revokeObjectURL(link.href);
}