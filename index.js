const express = require(`express`);
const path = require(`path`);

const port = 8080;

const app = express();

app.get(`/`, (request, response)=>{
	response.sendFile(path.join(__dirname,`/portfolio.html`));
});

app.listen(port, ()=>{
	console.log(`Listening on port ${port}`);
});

