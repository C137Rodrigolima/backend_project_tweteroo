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

    if(Object.keys(account).length < 2 || account.avatar.length === 0 || account.username.length === 0){
        res.status(400).send("Todos os campos são obrigatórios!");
    } else {
    accounts.push(account);
    res.status(201).send("OK");
    }
});

server.get("/tweets", (_, res) => {
    res.send(tweets);
});

server.post("/tweets", (req, res) => {
    let tweet = req.body;

    if(Object.keys(tweet).length < 2 || tweet.tweet.length === 0 || tweet.username.length === 0){
        res.status(400).send("Todos os campos são obrigatórios!");
    } else {
        refatoringTweets();

        tweet.avatar = accounts[0].avatar;
        tweets.push(tweet);
        res.status(201).send("OK");
    }
});

server.listen(5000);

function refatoringTweets(){
    if(tweets.length>9){
        let newArray = [];
        for(let i=0; i<tweets.length; i++){
            if(i!==0){
                newArray.push(tweets[i]);
            }
        }
        tweets = newArray;
    }
}