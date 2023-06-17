const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async(req, res) => {
    const {username} = req.body;
    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers:{"private-key": "33d2990c-f25f-4035-aa87-b52d4f3e4230"}}
        )
        return res.status(r.status).json(r.data)      
    }catch(e){
        return res.status(e.response.status).json(e.response.data)
    }
    
    return res.json({username: username, secret: "sha256..."});
});

app.listen(3001);