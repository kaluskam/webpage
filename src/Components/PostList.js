import React from 'react'
import Post from './Post'

class PostList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: props.posts
        }

    }


    render () {
        const Posts = this.props.posts
        const postsList = Posts.filter(post => post !== "")
        return (
            <div className="post-list">
                {postsList.map(post => {
                       return <Post content={post} key={post}/>                    
            })}                
            </div>
        )
    }
    
}

export default PostList