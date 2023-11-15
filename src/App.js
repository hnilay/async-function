import axios from "axios";

async function GetData(user_id) {
  
    const user = await axios("https://jsonplaceholder.typicode.com/users/" + user_id)

    const post = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id)

    const data = {user: user.data, post: post.data}

    return user
}

export default GetData;
