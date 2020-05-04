import React from 'react'
import Post from './Post'
import Axios from 'axios'

class PostList extends React.Component {
    constructor(props) {
        super(props)   
        
        this.state = {
            posts: [],
            getdata: true
        }     
        this.addPost = this.addPost.bind(this)
        this.deletePost = this.deletePost.bind(this)

    }
    
    async deletePost(id) {
        console.log("tutaj")
        this.setState(prevState => {
            const updatedList = prevState.posts.filter(post => post.id !== id )

            return {
                posts: updatedList
            }
        })
        await Axios.delete("http://localhost:8080/api/posts/" + id, { withCredentials: false})
    }
    async addPost(item) {
        let id = 0;
        await Axios.post("http://localhost:8080/api/posts", {authorEmail: this.props.user.email,
        authorName: this.props.user.name, authorSurname: this.props.user.surname, content: item, section: "home"},
         { withCredentials: false }).then(response => {
            id = response.data
        }
        )

        this.setState(prevState => {
            const updatedList = prevState.posts.concat(
                <Post content={item} authorEmail={this.props.user.email} author={this.props.user.name + " " + this.props.user.surname} 
                key={id} id={id} deletePost={this.deletePost}/>)
            return {
                posts: updatedList
            }
        })
    }
    async componentWillMount() {
        await Axios.get("http://localhost:8080/api/posts/sec/home", {withCredentials: false})
        .then(response => {
            console.log(response)
            let tempData = response.data
            let readyPosts = tempData.map(post => {
                return <Post content={post.content} authorEmail={post.authorEmail} 
                        author={post.authorName + " " + post.authorSurname} 
                        key={post.id} id={post.id} deletePost={this.deletePost}/>
            })
            this.setState({ posts: readyPosts })
        })
    }

    render () {
        return (
            <div className="post-list">
                {this.state.posts}
            </div>
        )
    }
    
}

export default PostList