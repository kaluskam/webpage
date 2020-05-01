import React from 'react'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.id = props.id

        this.state = {
            content: ""
        }

        this.deletePost = this.deletePost.bind(this)
    }

    deletePost() {
        this.setState({ content: "" })
        this.props.deletePost(this.id)
    }

    render() {
        return(
            <div className="post">
                <span className="post-content">
                    {this.props.content}
                </span>
                <span className="post-buttons">
                    <button className="post-btn2" onClick={console.log("not defined yet")}>Edytuj</button>
                    <button className="post-btn2" onClick={() => this.deletePost()}>Usuń</button>
                </span>
                
            </div>
        )
    }
}
export default Post