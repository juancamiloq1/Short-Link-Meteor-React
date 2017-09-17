import React from 'react';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';


export default class AddLink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url: '',
            isOpen: false,
            error: ''
        }
    }
    onSubmit(e){
        const url = this.state.url;  // const { url } = this.state;   ASI TAMBIEN SE PUEDE ESCRIBIR ES6

        e.preventDefault();

        Meteor.call('links.insert', url, (err, res) => {
            if (!err){
                this.handleModalClose();
            } else {
                this.setState({ error: err.reason });
            }
        });
    }
    onChange(e){
        this.setState({
            url: e.target.value.trim()
        });
    }
    handleModalClose(){
        this.setState({
            isOpen: false, 
            url: '', 
            error:''
        });
    }
    render(){
        return(
            <div>
                <button onClick={ () => {this.setState({isOpen: true})} }>+ Añadir Link</button>
                <Modal 
                    isOpen={this.state.isOpen} 
                    contentLabel='Crear Link'
                    onAfterOpen={ () => {this.refs.url.focus()}}
                    onRequestClose={this.handleModalClose.bind(this)}>  {/*Con esto se cierra el modal desde el fondo de atras*/}
                    <h1>Crear Link</h1>
                    { this.state.error ? <p>{this.state.error}</p> : undefined }
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input 
                            type='text'
                            ref='url'
                            placeholder='URL' 
                            value={this.state.url}
                            onChange={this.onChange.bind(this)}/>
                        <button>Crear Link</button>
                    </form>
                    <button onClick={this.handleModalClose.bind(this)}>Cancelar</button>
                </Modal>
            </div>
        );
    }

}
