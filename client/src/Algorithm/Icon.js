import React, { Component } from 'react' 
import BackgroundImage from './img/100px_Folder_Icon.png'; 

class Icon extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <img src={BackgroundImage} alt=""/>
        )
    }
} 

export default Icon; 