import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const accounts = [];
let tweets = [
    {
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub"
    }
];
console.log("OK");

server.post("/sign-up", (req, res) => {
    const account = req.body;
    accounts.push(account);
    res.send("OK");
});

server.get("/tweets", (req, res) => {
    res.send(tweets);
});

server.post("/tweets", (req, res) => {
    let tweet = req.body;

    tweet.avatar = accounts[0].avatar;
    if(tweets.length>9){
        let newArray = [];
        for(let i=0; i<tweets.length; i++){
            if(i!==0){
                newArray.push(tweets[i]);
            }
        }
        tweets = newArray;
    }

    tweets.push(tweet);
    res.send("OK");
});

server.listen(5000);