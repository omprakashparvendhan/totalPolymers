const form = document.querySelector(".contact-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let mobile = document.querySelector("#mobile").value;
    let message = document.querySelector("#message").value;
    document.querySelector(".contact-form").reset();
    sendEmail(name, mobile, message);
})


function sendEmail(name, mobile, message) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "ompargeetha@gmail.com",
      Password: "FCCB5F0654BE7B2407B5A595B6137E58B75E",
      To: 'totalpolymers.pillai@gmail.com',
      From: "ompargeetha@gmail.com",
      Subject: `${name} Just Enquired about Total Polymers`,
      Body: `Name: ${name} <br> Mobile: ${mobile} <br> Message: ${message}`,
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }