function Submit(){
    const nm = document.getElementById("FullName").value.trim();
    const db = document.getElementById("Dob").value.trim();
    const em = document.getElementById("email").value.trim();
    const ph = document.getElementById("phone").value.trim();


    // Validation
    // if(data is valid)
    // alert()

    if(!/^[A-Za-z ]+$/.test(nm)){
        alert("Wrong Name");
        return;
    }
    if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
        alert("Wrong Email");
        return;
    }
    if(!/^[6-9]\d{9}$/.test(ph)){
         alert("Wrong Email");
        return;
        }

        const currentyear = new Date().getFullYear();
        const birthyear = db.split()


    const data = {
        FullName: nm,
        Email: em,
        phone:ph,
        DOB:db, 
    };

    console.log(data);
}
