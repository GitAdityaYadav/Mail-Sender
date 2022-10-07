
const nodemailer = require("nodemailer");

const transport= nodemailer.createTransport(
  {
    service:"gmail",
    auth:{
       user:"YourEmail@gmail.com",
       pass:"password"  //you can use 16 characters app password 
    },
    port:465,
    host:"smtp.gmail.com"
  });
  //Array of objects whom you want to send mail
  var mailList=[
    {
     email:"********@gmail.com",
     fname:"Vibhanshu"
    },
    {
     email:"********@gmail.com",
     sname:"Mithilesh"
    },
    {
      email:"********@gmail.com",
      fname:"Aditya",
      lname:"Yadav"
  },
   {
    email:"***********@gmail.com",
    fname:"Anirudra",
    lname:"Yadav"
   
  }
];
var mailOptions;
mailList.forEach(function(mail){
   mailOptions ={
    from:"Senders@gmail.com",
    to:mail.email,
    subject:"Test mail for "+ mail.fname,
    text:"Hello"+ mail.fname ,
    html:"<p>This mail is send for testing purpose</p>"+    
    '<img src="https://picsum.photos/200">'
    ,
    attachments:[{
      filename:"Git-Cheatsheet.pdf",
      path:__dirname+"/Git-Cheatsheet.pdf",
     contentType: "This is a test pdf"
    }]
     };

     transport.sendMail(mailOptions,function(err,info){
      if(err){
        console.log(err);}
        else
        console.log("Email sent" +info.response);
     
    })
});
  

 