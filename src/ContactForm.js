import React from 'react'
import {Row, Column} from './Helper'
import 'whatwg-fetch'
import { Redirect } from 'react-router-dom'

export class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: '', message: '', answer: '1'};
    }
    handleSubmit(e){
        console.log('handleSubmit');
        console.log(this.state.name);
        console.log(this.state.message);
        console.log(this.state.answer);

        let form = new FormData();
        form.append('name', this.state.name);
        form.append('message', this.state.message);
        form.append('answer', this.state.answer);

        fetch('https://mariage.chaux.me/api/index.php', {
            method: 'POST',
            body: form,
        }).then(res => {
            let res2 = res.clone();
            return res.json().then(data => {
                if(data.messageId !== undefined){
                    console.log("New message sent: "+data.messageId);
                    this.setState({validated: true})
                }
                else{
                    throw data.error;
                }
            }).catch(err => {
                console.warn(res2.text());
                console.error(err);
            }); 
        });

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: process.env.REACT_APP_API_KEY}).base(process.env.REACT_APP_BASE);
        
        base('Table 1').create([
          {
            "fields": {
                "Name": this.state.name,
                "Message": this.state.message,
                "Answer": this.state.answer == '1' ? true : false,
            } 
          }
        ], function(err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(function (record) {
            console.log(record.getId());
          });
        });


        e.preventDefault();
        this.setState({
            name: '',
            message: '',
        });
    }

    handleInputChanged(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        if (this.state.validated === true) {
        return <Redirect to='/merci' />
        }
        let rowStyle = {
            margin: "0.4vh"
        };
        return <form onSubmit={(e) => this.handleSubmit(e)}>
            <Column style={{justifyContent: "center", alignItems: "center"}}>
                <Row style={rowStyle}>
                    <label>Votre nom
                        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleInputChanged(e)} />
                    </label>
                </Row>
                <Row style={rowStyle}>
                    <label>Serez-vous des nôtres ?
                        <select defaultValue="1" name="answer" onChange={(e) => this.handleInputChanged(e)}>
                            <option value="1">Oui</option>
                            <option value="0">Non et je le regrette amèrement</option>
                        </select>
                    </label>
                </Row>
                <Row style={rowStyle}>
                    <label>Votre petit mot
                        <textarea name="message" onChange={(e) => this.handleInputChanged(e)} value={this.state.message} />
                    </label>
                </Row>
                <Row style={rowStyle}>
                    <input type="submit" value="Envoyer" />
                </Row>
            </Column>
        </form>
    }
}