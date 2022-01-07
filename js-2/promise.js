function getData(uId) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
    console.log("Fetched the data!");
    resolve("skc@gmail.com");
    }, 4000);
    });
        return promise;
    }
    
    
    console.log("start");
    getData("skc").then(x => {
        console.log("Email id of the user id is: " + x);
    console.log("end");
    })
    .catch(err => console.log(err));
    
    
    