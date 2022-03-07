const express = require("express");
const app = express();
const port = 3000;



const fs = require("fs");

app.use(express.static("public"));

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const frontpagecontent = fs.readFileSync("./public/pages/index.html").toString();
const frontpagenavreplaced =  nav.replace("%%DOCUMENT_TITLE%%","Welcome to my Node.js")
const frontpagefull =frontpagenavreplaced.replace("%%INDEX%%", "active")+ frontpagecontent + footer


const nodejspagecontent = fs.readFileSync("./public/pages/nodejs.html").toString();
const nodejspagenavreplaced = nav.replace("%%DOCUMENT_TITLE%%", "Node.js")
const nodejspagefull = nodejspagenavreplaced.replace("%%NODEJS%%","active") + nodejspagecontent + footer

const restapicontent = fs.readFileSync("./public/pages/restapi.html").toString();
const restapinavreplaced = nav.replace("%%DOCUMENT_TITLE%%", "REST API")
const restapipagefull = restapinavreplaced.replace("%%RESTAPI%%", "active")+ restapicontent + footer

const terminalcommandscontent = fs.readFileSync("./public/pages/terminalcommands.html").toString();
const terminalcommandsnavreplaced = nav.replace("%%DOCUMENT_TITLE%%", "Terminal commands")
const terminalcommandspagefull = terminalcommandsnavreplaced.replace("%%TERMINALCOMMANDS%%", "active")+ terminalcommandscontent + footer

const javascriptcontent = fs.readFileSync("./public/pages/javascript.html").toString();
const javascriptnavreplaced = nav.replace("%%DOCUMENT_TITLE%%", "Javascript")
const javascriptpagefull = javascriptnavreplaced.replace("%%JAVASCRIPT%%", "active")+ javascriptcontent + footer

const toolscontent = fs.readFileSync("./public/pages/tools.html").toString();
const toolsnavreplaced = nav.replace("%%DOCUMENT_TITLE%%", "Tools")
const toolspagefull = toolsnavreplaced.replace("%%TOOLS%%", "active")+ toolscontent + footer




app.get("/",(req,res)=>{
    res.send(frontpagefull)
});

app.get("/nodejs",(req,res)=>{
    res.send(nodejspagefull)
});

app.get("/restapi",(req,res)=>{
    res.send(restapipagefull)
});

app.get("/terminalcommands",(req,res)=>{
    res.send(terminalcommandspagefull)
});

app.get("/javascript",(req,res)=>{
    res.send(javascriptpagefull)
})

app.get("/tools",(req,res)=>{
    res.send(toolspagefull)
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });