import React from 'react'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.date = props.date
        this.id = props.id

        this.state = {
            content: "",
            editor: null,
            date: props.date
        }

        this.editPost = this.editPost.bind(this)
        this.deletePost = this.deletePost.bind(this)
    }

    editPost() {
        this.setState({ content: "edited" })    
    }
    deletePost() {
        this.setState({ content: "" })
    }

    render() {
        return(
            <div className="post">
                <span className="post-content">
                    {this.props.content}
                </span>
                <span className="post-buttons">
                    <button className="post-btn2" onClick={e => this.editPost()}>Edytuj</button>
                    <button className="post-btn2" onClick={e => this.deletePost()}>Usuń</button>
                </span>
                
            </div>
        )
    }
}
export default Post