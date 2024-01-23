import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import "dotenv/config";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


db.connect();



async function checkVisited(){
  const result= await db.query("SELECT country_code FROM visited_countries") 


      //console.log(result.rows[0].country_code);
      //console.log(typeof(result.rows));

      let visited=[];
      let count=0;
  
  
      for (let i = 0; i < result.rows.length; i++) {
        visited.push(result.rows[i].country_code);
      }
      console.log(visited);
      return visited;


}


app.get("/", async (req, res) => {


    const visited= await checkVisited();
    console.log(visited)

  
  res.render("index.ejs", {countries:visited, total:visited.length});
})

app.post("/add", async(req,res)=>{


  const countr= req.body.country;

  try{
  const result = await db.query(`SELECT country_code FROM countries Where country_name='${countr}'`);
  const code = result.rows[0].country_code;

  try{
    
    await db.query("Insert into visited_countries (country_code) Values ($1)", [code]);

  res.redirect("/");

  
  }catch(err){

    console.log("hey");
    const visited= await checkVisited();
    res.render("index.ejs",{countries:visited, total:visited.length, error:"Country already Visited"});
  }

}catch(err){
  const visited= await checkVisited();
    res.render("index.ejs",{countries:visited, total:visited.length, error:"Country doesn't exist"});


}

});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});