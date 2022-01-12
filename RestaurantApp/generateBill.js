var generateBill = document.getElementById("generateBill");
generateBill.addEventListener("click",() => {

    var items = JSON.parse(sessionStorage.getItem(sessionStorage.getItem("id")));
    var total = 0;
    items.forEach((item) => {
        total += item.price * item.count;
    })

    alert("Total bill is "+total);

    sessionStorage.removeItem(sessionStorage.getItem("id"));
    deleteRows();
    document.getElementById("total").innerHTML = `Total : Rs.0`;
    document.getElementById(sessionStorage.getItem("id")).getElementsByTagName("h5")[0].innerHTML =  `Rs.0 | Total items : 0`;
    document.getElementById("generateBill").setAttribute("disabled","true");


});



var endSession = document.getElementById("endSession");
endSession.addEventListener("click", () => {

    sessionStorage.removeItem(sessionStorage.getItem("id"));
    deleteRows();
    document.getElementById("total").innerHTML = `Total : Rs.0`;
    document.getElementById(sessionStorage.getItem("id")).getElementsByTagName("h5")[0].innerHTML =  `Rs.0 | Total items : 0`;
    document.getElementById("generateBill").setAttribute("disabled","true");

});
