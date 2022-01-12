
function searchTable() {

    var food = sessionStorage.getItem("food");
    console.log("food is : ,", food)
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search_table');
    filter = input.value.toUpperCase();
    console.log("Input is : ", filter)
    ul = document.getElementById("tableList");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        console.log(li[i].getElementsByTagName("h2")[0].textContent);

        txtValue = (li[i].getElementsByTagName("h2")[0].textContent);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }

}

function searchMenu() {




    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search_food');
    filter = input.value.toUpperCase();
    console.log("Input is : ", filter)
    ul = document.getElementById("foodList");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query

    for (i = 0; i < li.length; i++) {
        console.log(li[i].getElementsByTagName("h2")[0].textContent);
        // txtValue = a.textContent || a.innerText;
        txtValue = (li[i].getElementsByTagName("h2")[0].textContent);
        cusine = (li[i].getElementsByTagName("h3")[0].textContent);
        if (txtValue.toUpperCase().indexOf(filter) > -1 || cusine.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }

    // console.log(document.getElementById("menu-items").children[0]);
}
