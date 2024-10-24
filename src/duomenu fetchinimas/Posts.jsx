import axios from "axios"

/* const posts = [

    {UserId:1, 
        id:5,
        title: "wwewe",
        body: "wewewe"
    },
    {UserId:10, 
        id:50,
        title: "wwewe",
        body: "wewewe"}
]



export const Posts = () => {
    const getPosts =() => {
        fetch()
    }
    return (
        <>
        {posts.map((post) =>
        <Posts title={post.title} id={post.id}/>  )}
        </>
    )
} 
*/

const getPostsAxios = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

getPostsAxios(); {

    return (
        <>
 

        </>
    )
}