import React from 'react'

class SubjectPage extends React.Component {
    constructor() {
        super()
        this.state = {
            content: ""
        }
    }
    render () {
        return (
            <div>
                {this.state.content}
            </div>
        )
    }
}

export default SubjectPage