import React from "react";
// avatar_url: "https://avatars.githubusercontent.com/u/497819?v=4";
// events_url: "https://api.github.com/users/masai/events{/privacy}";
// followers_url: "https://api.github.com/users/masai/followers";
// following_url: "https://api.github.com/users/masai/following{/other_user}";
// gists_url: "https://api.github.com/users/masai/gists{/gist_id}";
// gravatar_id: "";
// html_url: "https://github.com/masai";
// id: 497819;
// login: "masai";
// node_id: "MDQ6VXNlcjQ5NzgxOQ==";
// organizations_url: "https://api.github.com/users/masai/orgs";
// received_events_url: "https://api.github.com/users/masai/received_events";
// repos_url: "https://api.github.com/users/masai/repos";
// score: 1;
// site_admin: false;
// starred_url: "https://api.github.com/users/masai/starred{/owner}{/repo}";
// subscriptions_url: "https://api.github.com/users/masai/subscriptions";
// type: "User";
// url: "https://api.github.com/users/masai";
const User = (props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <img style={{ width: "100px" }} src={props.avatar_url} alt="user" />
      <p>{props.login}</p>
    </div>
  );
};

export default User;
