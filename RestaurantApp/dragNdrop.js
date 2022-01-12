

function allowDrop(ev) {
    ev.preventDefault();

}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {

    var data = [];

    ev.preventDefault();


    var data = ev.dataTransfer.getData("text");
    var name = document.getElementById(data).children[0].children[0].innerHTML

    console.log(ev.path[1].id);

    var price = parseInt(document.getElementById(data).children[0].children[1].textContent.split(".")[1].trim())
    var prevPrice = parseInt(ev.target.children[1].textContent.trim().split(" | ")[0].split(".")[1]);
    var prevTotal = parseInt(ev.target.children[1].textContent.trim().split(" | ")[1].split(":")[1]);
    if (sessionStorage.getItem(ev.path[1].id)) {
        var found = false
        console.log("Already present ", sessionStorage.getItem(ev.path[1].id));
        data = JSON.parse(sessionStorage.getItem(ev.path[1].id))
        console.log(data)

        data.forEach(element => {
            if (element.item == name) {
                found = true;
                element.count += 1;
                return;

            }


        });

        if (!found) {
            data.push({
                item: name,
                price: price,
                count: 1
            });
        }
        console.log("Updated : ", data)
    }
    else {
        data = [];
        data.push({
            item: name,
            price: price,
            count: 1
        });

        console.log(JSON.stringify(data))


    }

    ev.target.children[1].textContent = `Rs.${prevPrice + price} | Total items : ${data.length}`;
    sessionStorage.setItem(ev.path[1].id, JSON.stringify(data))
}