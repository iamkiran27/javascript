
function deleteRows() {
    var rowCount = document.getElementsByClassName("table-content")[0].rows.length
    console.log(rowCount)
    for (var i = rowCount - 1; i > 0; i--) {
        document.getElementsByClassName("table-content")[0].deleteRow(i);
        console.log(document.getElementsByClassName("table-content")[0])
    }
}

var btnClose = document.getElementById("modal-button");
        btnClose.addEventListener("click", () => {
            var id = sessionStorage.getItem("id");
            console.log("Table selected id is ,", id);
            document.getElementById(id).style.backgroundColor = ""
            deleteRows();
        });


        
function openModal(e) {


    // console.log(e.path)
    sessionStorage.setItem("id", e.path[1].id);


    document.getElementById(e.path[1].id).style.backgroundColor = "orange"

    console.log(document.getElementById(e.path[1].id))
    var items = JSON.parse(sessionStorage.getItem(e.path[1].id));
    document.getElementsByClassName("title")[0].innerHTML = `${e.path[1].getElementsByTagName("h2")[0].innerHTML} | Order Details`
    document.getElementsByClassName("title")[0].style = "color : white";
    console.log("Length ", items)

    generateRows(items);
    // console.log(document.getElementById("total").getElementsByTagName("strong").innerHTML)

}


function generateRows(items) {
    var total = 0
    let sNo = 1;
    if (items != null) {
        for (let i = 0; i < items.length; i++) {

            let name = items[i].item;
            let price = items[i].price;
            console.log("price is ", price)
            let itemCount = items[i].count;

            let sNo_td = createTd();
            sNo_td.textContent = sNo;
            sNo++;

            let name_td = createTd();
            name_td.innerHTML = name;

            let price_td = createTd();
            price_td.textContent = parseInt(price) * parseInt(itemCount);

            let itemCount_td = createTd();
            let itemCount_input = document.createElement('input');
            itemCount_input.setAttribute("oninput", "changeQuantity(event)")
            itemCount_input.setAttribute('class', 'no-of-servings');
            itemCount_input.type = "number";
            // itemCount_input.setAttribute("oninput","this.value = Math.abs(this.value)");
            itemCount_input.min = 1;
            // itemCount_input.max = 10;
            itemCount_input.value = itemCount;
            itemCount_td.appendChild(itemCount_input);
            //itemCount_td.textContent = itemCount;


            let delete_td = createTd();

            let trash_span = document.createElement('span');
            trash_span.setAttribute("onclick", "deleteItem(event)")
            let trash_image = document.createElement('img');
            trash_image.src = './trash.png';
            trash_span.appendChild(trash_image);
            delete_td.appendChild(trash_span);

            let table_row = document.createElement('tr');
            table_row.appendChild(sNo_td);
            table_row.appendChild(name_td);
            table_row.appendChild(price_td);
            table_row.appendChild(itemCount_td);
            table_row.appendChild(delete_td);
            table_row.setAttribute('class', 'table-row');

            let table = document.querySelector('.table-content');
            table.appendChild(table_row);
        }



        items.forEach((item) => {
            total += item.price * item.count;
        })

        console.log("total is ", total)

        if (total == 0) {
            document.getElementById("generateBill").setAttribute("disabled", "true");
        }
        else {
            document.getElementById("generateBill").removeAttribute("disabled");
        }


    }
    else {
        document.getElementById("generateBill").setAttribute("disabled", "true");
    }
    document.getElementById("total").innerHTML = `Total : Rs.${total}`;
}



function changeQuantity(e) {

    if (e.target.value == 0 || e.target.value == NaN) {
        e.target.value = 1
    }
    // e.target.value = Math.abs(e.target.value) 
    console.log("Change", e.path[2].children[1].innerHTML)
    var id = sessionStorage.getItem("id");
    var data = JSON.parse(sessionStorage.getItem(id))
    data.forEach((d) => {
        if (d.item == e.path[2].children[1].innerHTML.trim()) {
            d.count = parseInt(e.target.value);
            return;
        }
    })

    console.log("Data is ", data)
    sessionStorage.setItem(id, JSON.stringify(data));
    deleteRows();
    generateRows(data);
    var total = 0;
    data.forEach((data) => {
        total += data.price * data.count;

    });



    document.getElementById(id).getElementsByTagName("h5")[0].innerHTML = `Rs.${total} | Total items : ${data.length}`;


}




function deleteItem(event) {
    console.log("Trash icon clicked!!", event.path[3].children[1].innerHTML);
    var id = sessionStorage.getItem("id");
    console.log(id)
    var data = JSON.parse(sessionStorage.getItem(id))
    var datab = data.filter((food) => {


        return food.item != event.path[3].children[1].innerHTML;
    })
    console.log("Filtered data ", datab)

    sessionStorage.setItem(id, JSON.stringify(datab));
    // document.getElementsByClassName("table-content")[0].deleteRow(event.path[3].rowIndex)
    deleteRows();
    generateRows(datab);
    var total = 0;
    datab.forEach((data) => {
        total += data.price * data.count;

    });
    console.log(datab.length)
    document.getElementById(id).getElementsByTagName("h5")[0].innerHTML = `Rs.${total} | Total items : ${datab.length}`;



}

function createTd() {
    return document.createElement('td');
}