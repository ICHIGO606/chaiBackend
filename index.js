require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData = {
    "login": "ICHIGO606",
    "id": 122355233,
    "node_id": "U_kgDOB0r-IQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/122355233?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ICHIGO606",
    "html_url": "https://github.com/ICHIGO606",
    "followers_url": "https://api.github.com/users/ICHIGO606/followers",
    "following_url": "https://api.github.com/users/ICHIGO606/following{/other_user}",
    "gists_url": "https://api.github.com/users/ICHIGO606/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ICHIGO606/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ICHIGO606/subscriptions",
    "organizations_url": "https://api.github.com/users/ICHIGO606/orgs",
    "repos_url": "https://api.github.com/users/ICHIGO606/repos",
    "events_url": "https://api.github.com/users/ICHIGO606/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ICHIGO606/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Shivam Dubey",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "shivamdubey177",
    "public_repos": 12,
    "public_gists": 0,
    "followers": 2,
    "following": 2,
    "created_at": "2023-01-10T09:35:44Z",
    "updated_at": "2024-10-21T17:46:33Z"
}
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("shivamdubey177")
})
app.get('/login',(req,res)=>{
    res.send("<h1>please login at chai and code</h1>")
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur code</h2>")
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
