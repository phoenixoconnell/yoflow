import React, { Component } from 'react';
import Form from '../Form/Form'
import Axios from 'axios';
import './Display.css';
import '../Form/Form';

export default class Display extends Component {
    constructor() {
        super()

        this.state = {
            edit: false
        }
    }


    del = id => {
        Axios.delete(`/api/positions/${id}`).then(res => this.props.get())
    }

    switchEdit = () => {
        this.setState({edit: !this.state.edit})
    }

    render() {
        const info = (
            <div>
                <div>
                    <img src={this.props.position.imgUrl} alt='Yoga Position' />
                </div>
                <div>
                    <h2>{this.props.position.positionName}</h2>
                    <ul>
                        <li>Sanskrit Name: {this.props.position.sanskritName}</li>
                        <li>Sanskrit Meaning: {this.props.position.sanskritMeaning}</li>
                        <li>Difficulty: {this.props.position.difficulty}</li>
                        <li>Duration: {this.props.position.duration}</li>
                    </ul>
                </div>
                <div>
                    <button onClick={this.switchEdit}>Edit</button>
                    <button onClick={() => this.del(this.props.position.id)}>Delete</button>
                </div>
            </div>
        )
    
        return (
            <section>
                {this.state.edit ? <Form position={this.props.position} get={this.props.get} switchEdit={this.switchEdit} /> : info}
            </section>
        )
    }

}
