import React, { Component } from 'react';
import Axios from 'axios';
import './Form.css';

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imgUrl: this.props.position.imgUrl || '',
            positionName: this.props.position.positionName || '',
            sanskritName: this.props.position.sanskritName || '',
            sanskritMeaning: this.props.position.sanskritMeaning || '',
            difficulty: this.props.position.difficulty || '',
            duration: this.props.position.duration || ''
        }
    }

    handleChange = (e, type) => {
        let updated = {}
        updated[type] = e.target.value
        this.setState(updated)
    }

    clear = () => {
        this.setState({
            imgUrl: '',
            positionName: '',
            sanskritName: '',
            sanskritMeaning: '',
            difficulty: '',
            duration: ''
        })

        if(this.props.switchEdit) this.props.switchEdit()
        if(this.props.switchForm) this.props.switchForm()
    }

    post = () => {
        const newPosition = {
            imgUrl: this.state.imgUrl,
            positionName: this.state.positionName,
            sanskritName: this.state.sanskritName,
            sanskritMeaning: this.state.sanskritMeaning,
            difficulty: this.state.difficulty,
            duration: this.state.duration
        }
        Axios.post('/api/positions', newPosition).then(res => {
            this.props.get()
            this.clear()
        })
    }

    put = () => {
        const newPosition = {
            imgUrl: this.state.imgUrl,
            positionName: this.state.positionName,
            sanskritName: this.state.sanskritName,
            sanskritMeaning: this.state.sanskritMeaning,
            difficulty: this.state.difficulty,
            duration: this.state.duration
        }
        Axios.put(`/api/positions/${this.props.position.id}`, newPosition).then(res => {
            this.props.get()
            this.clear()
        })  
    }

    render() {
        return(
            <section>
                <span>Img Url: </span><input onChange={e => this.handleChange(e,"imgUrl")} value={this.state.imgUrl}/>
                <input onChange={e => this.handleChange(e,"positionName")} value={this.state.positionName}/>
                <input onChange={e => this.handleChange(e,"sanskritName")} value={this.state.sanskritName}/>
                <input onChange={e => this.handleChange(e,"sanskritMeaning")} value={this.state.sanskritMeaning}/>
                <input onChange={e => this.handleChange(e,"difficulty")} value={this.state.difficulty}/>
                <input onChange={e => this.handleChange(e,"duration")} value={this.state.duration}/> 
                <button onClick={this.props.edit ? this.put : this.post}>Submit</button>
                <button onClick={this.clear}>Cancel</button>            

            </section>
        )
    }
}