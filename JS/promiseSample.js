async function likePost(){
    var liked = new Promise((Lpost)=>{
        Lpost("Post liked successfully");
    })
    return liked;
}

async function CommentPost(){
    var comment = new Promise((CTpost)=>{
        CTpost("Comment posted successfully");
    })
    return comment;
}

async function createPost(){
    var post = new Promise((Cpost)=>{
        Cpost("Post created successfully");
    })
    var [posts,comment,like] = await Promise.all([post,CommentPost(),likePost()]); //without await error occurs
    console.log(posts);
    console.log(comment);
    console.log(like);
}
createPost();