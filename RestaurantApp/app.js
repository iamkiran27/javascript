



const addTable = (data) => {
    var table = document.getElementById("table-data");
    const ul = document.createElement("ul");
    ul.setAttribute("id", "tableList");

    data.forEach((table, idx) => {
        const li = document.createElement("li");

        li.setAttribute('onclick', 'openModal(event)')

        const content = `  <div class="row px-2 my-3  mx-1" ondrop="drop(event)"  ondragover="allowDrop(event)">


<div class="card " name= ${table.name}  data-bs-toggle="modal" data-bs-target="#exampleModal" id= ${table.id}  style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
transition: 0.5s; ">
    <div class="card-body p-4">
        <h2 class="card-title mb-4">${table.name}</h2>
        <h5 class="card-text">
            Rs.${table.total_price} | Total items : ${table.total_items}
        </h5>

    </div>
</div>



</div> `;
        li.setAttribute('style', 'display: block;');


        li.innerHTML = content;
        ul.appendChild(li);




    });
    console.log(ul);
    table.appendChild(ul);

}










const addFoodMenu = (data) => {

    var menu = document.getElementById("menu-items");

    const ul = document.createElement('ul');
    ul.setAttribute("id", "foodList")

    data.forEach((food, idx) => {
        const li = document.createElement("li");
        li.draggable = true;
        const content = `
  <div class="row px-4 mb-5 ">
                            <div class="card" id="${idx + 1}" draggable="true" ondragstart="drag(event)" style="  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
                        transition: 0.5s; ">
                                <div class="card-body p-4">
                                    <h2 class="card-title mb-3">${food.name}</h2>
                                    
                                    <h5 class="card-text mb-5">
                                        Rs.${food.price}
                                    </h5>
                                    <h3 style="display : none">${food.type}</h3>
                                </div>
                            </div>
  `;

        li.setAttribute('style', 'display: block;');


        li.innerHTML = content;
        ul.appendChild(li);

    });
    // console.log(ul);
    menu.appendChild(ul);

}








const loadData = () => {
    sessionStorage.clear()

    const url1 = "data.json";
    const url2 = "table.json";

    fetch(url1).then(response => response.json())
        .then((data) => {
            console.log(data)
            sessionStorage.setItem("food", JSON.stringify(data));
            addFoodMenu(data);
        }).catch(error => console.log(error));


    fetch(url2).then(response => response.json())
        .then((data) => {
            console.log(data)
            sessionStorage.setItem("table", data)
            addTable(data);
        }).catch(error => console.log(error));


}