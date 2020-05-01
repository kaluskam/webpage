import React from 'react'
import Post from './Post'

class PostList extends React.Component {
    constructor() {
        super()        
        this.state = {
            posts: []
        }
        this.addPost = this.addPost.bind(this)
        this.deletePost = this.deletePost.bind(this)

    }
    deletePost(id) {
        this.setState(prevState => {
            const updatedList = prevState.posts
            updatedList[id - 1] = {content: '', id: id}
            return {
                posts: updatedList
            }
        })
    }
    addPost(item) {
        this.setState(prevState => {
            const updatedList = prevState.posts.concat({content: item, id: this.state.posts.length + 1})
            return {
                posts: updatedList
            }
        })
    }

    render () {
        const postsList = this.state.posts.filter(post => post.content !== "")
        return (
            <div className="post-list">
                {postsList.map(post => {
                       return <Post content={post.content} key={post.id} id={post.id} deletePost={this.deletePost}/>                    
            })}                
            </div>
        )
    }
    
}

export default PostList