export async function getPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    
    if(!response.ok){
        throw {message:'Failed to fetch posts',status:500}
    }
    return response.json()
}

export async function getPost(id){
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/' + id
        );
    console.log(response.ok)
    if(!response.ok){
        throw{message:"Failed to fetch post",status:500}
    }
    return response.json()
}

export async function savePost(post){
    if(post.title.trim().length < 5 || post.body.trim().length < 10){
        throw{message:"Invalid input data provided",status:422}
    }
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify(post),
        header:{
            'Content-type':'application/json'
        }
    })

    if(!response.ok){
        throw{message:'Could not save the post',status:500}
    }
}