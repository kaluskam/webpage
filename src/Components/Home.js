import React from 'react'
import PostList from './PostList'
import TextareaAutosize from 'react-textarea-autosize'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curContent: ""
        }
        this.addPost = this.addPost.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ curContent: event.target.value })
    }
    addPost() {
        this.refs.postlist.addPost(this.state.curContent)
        this.setState({curContent: ''})
    }
    inform() {
        console.log("Zaloguj się żeby dodać post")
    }
    render() {
        if (this.props.loggedIn) {
            return(
                <div id="home">
                    <div id="home-description">
                        Celem stronki jest ułatwienie dostępu do informacji takich jak: terminy najbliższych projektów,
                        kiedy i gdzie odbywają się dane zajęcia. <br/>
                        Zachęcam do dodawania informacji od siebie na stronach przedmiotów. :)
                    </div>
                    <h1>
                        Aktualności
                    </h1>
                    <div style={{display: "flex", flexDirection: "column", width: "50%", justifyContent: "flex-end", marginBottom: "40px"}}>
                        <TextareaAutosize className="post-input" onChange={this.handleChange} placeholder="Dodaj coś od siebie" />
                        <button className="post-btn" onClick={e => this.addPost()}>Dodaj post</button>
                    </div>
                    
                    <div>
                        <PostList ref="postlist" user={this.props.user} section="home"/>
                    </div>
                    
    
                </div>
            )
        }
        return(
            <div id="home">
                <div id="home-description">
                    Celem stronki jest ułatwienie dostępu do informacji takich jak: terminy najbliższych projektów,
                    kiedy i gdzie odbywają się dane zajęcia. <br/>
                    Zachęcam do dodawania informacji od siebie na stronach przedmiotów. :)
                </div>
                <h1>
                    Aktualności
                </h1>
                <div style={{display: "flex", flexDirection: "column", width: "50%", justifyContent: "flex-end", marginBottom: "40px"}}>
                    <TextareaAutosize className="post-input" placeholder="Zaloguj się, żeby dodać coś od siebie" readOnly/>
                    <button className="post-btn" onClick={e => this.inform()}>Dodaj post</button>
                </div>
                
                <div>
                    <PostList ref="postlist"/>
                </div>
                

            </div>
            
        )
    }
}

export default Home