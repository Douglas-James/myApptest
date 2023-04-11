const displaycontent = (req, res) =>{
   const url = req.url;
   const method = req.method;
   
   if(url == '/profile'){
      res.setHeader('Content-type', 'text/html');
      res.write('<h1>This is a Profile</h1>');
   return res.end();
   }
   else if(url == '/'){
     res.setHeader('Content-type', 'text/html');
     res.write('<p>Hello home page</p>');
   return res.end();
   }
   else if(url == '/setting' && method=="POST"){
     res.setHeader('Content-type', 'text/html');
     res.write(
      '<h1>Thank you The form has been submited : )</h1>');
   return res.end();
   }

   else if(url == '/setting'){
     res.setHeader('Content-type', 'text/html');
     res.write(
      '<h2>Setting</h2><form action="/setting" method="POST"><input type="text"><button type="submit">Submit</button</form');
   return res.end();
   }
    res.setHeader('Content-type', 'text/html');
    res.write('<p>Not Found here : (</p>');
   res.end()

}


module.exports = displaycontent;