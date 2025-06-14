import React from 'react'
import CreatePost from './post/create-post'
import Posts from './post/posts'

const PostLayout = () => {
    return (
        <>
            <CreatePost />
           <div className="pt-6">
           <Posts />
           </div>
        </>
    )
}

export default PostLayout