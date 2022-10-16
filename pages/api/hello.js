// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(email) {


  let YOUR_API_KEY="$2b$10$Bybqf5hbYJiawf25J0nSpeqpccSzzf30msFo.c3zT42aurWR20pdO";
 
  let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("PUT", "https://api.jsonbin.io/v3/b/634c673a0e6a79321e2acabe", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Master-Key", YOUR_API_KEY);
req.send(JSON.stringify({ email:email}));
  
}
