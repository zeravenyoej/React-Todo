import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            itemName: ''
        }
    };

    handleChange = e => {
        e.preventDefault();
        this.setState({
            itemName: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.itemName !== ''){
        this.props.addItem(this.state.itemName);
        this.setState({
            itemName: ''
        })
    }};

    render(){
        console.log('render form')
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder='...to do'
                    type='text'
                    name='item'
                    value={this.state.itemName}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )}
};

export default TodoForm;