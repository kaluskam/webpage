import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.id = props.id
        this.state = {
            content: this.props.content
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
                <TextareaAutosize className="post-content" defaultValue={this.state.content} />  
                <div style={{display: "flex", flexDirection: "row" }}>
                    <span className="author-date">
                        {this.props.author}
                    </span>              
                    <span className="post-buttons">
                        <button className="post-btn2" onClick={console.log("not defined yet")}>Edytuj</button>
                        <button className="post-btn2" onClick={() => this.deletePost()}>Usuń</button>
                    </span>
                </div>         
            </div>
        )
    }
}
export default Post