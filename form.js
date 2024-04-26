function sendMail() {
    var params = {
      name: document.getElementById("inputname").value,
      email: document.getElementById("inputemail").value,
      message: document.getElementById("inputcomment").value,
    };
  
    const serviceID = "service_qlh2q1b";
    const templateID = "template_pz48juw";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("inputname").value = "";
          document.getElementById("inputemail").value = "";
          document.getElementById("inputcomment").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }