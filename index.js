function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,

    };
    const serviceID = "service_nt1de5k";
    const templateID = "template_c0snkl9";

emailjs
.send(serviceID, templateID, params)
.then(
    res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent succesfully");
    }).catch((err)=> alert(err));

}



