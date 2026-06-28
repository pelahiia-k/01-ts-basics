import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}

const fetchPosts = async (postId: number): Promise<Post> => {
    const response = await axios.get<Post>(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return response.data;
};

fetchPosts(5).then((posts) => {console.log(posts.title);});