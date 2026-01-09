require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000


const github = {
  "login": "karamjit-malik",
  "id": 135987100,
  "node_id": "U_kgDOCBr_nA",
  "avatar_url": "https://avatars.githubusercontent.com/u/135987100?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/karamjit-malik",
  "html_url": "https://github.com/karamjit-malik",
  "followers_url": "https://api.github.com/users/karamjit-malik/followers",
  "following_url": "https://api.github.com/users/karamjit-malik/following{/other_user}",
  "gists_url": "https://api.github.com/users/karamjit-malik/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/karamjit-malik/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/karamjit-malik/subscriptions",
  "organizations_url": "https://api.github.com/users/karamjit-malik/orgs",
  "repos_url": "https://api.github.com/users/karamjit-malik/repos",
  "events_url": "https://api.github.com/users/karamjit-malik/events{/privacy}",
  "received_events_url": "https://api.github.com/users/karamjit-malik/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-06-08T13:42:04Z",
  "updated_at": "2026-01-09T22:23:50Z"
}
app.get('/' , (req,res)=>
{
    res.send('Hello Bancho! Welcome to the Express server.');
})

app.get('/youtube', (req,res)=>
{
    res.send('Welcome to the YouTube route!');
})

app.get('/github', (req,res)=>
{
    res.json(github);
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port : ${port}`);
});
