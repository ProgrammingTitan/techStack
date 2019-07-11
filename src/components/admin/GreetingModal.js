import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addGreeting } from '../../actions/greetingActions';

class GreetingModal extends React.Component{
    state = {
        modal: false,
        headline: '',
        description: '',
        imageURL: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newGreeting = {
            headline: this.state.headline,
            description: this.state.description,
            imageURL: this.state.imageURL
        }

        //Add greeting via addGreeting action
        this.props.addGreeting(newGreeting);

        //Close Modal
        this.toggle();
    }

    render(){
        return(
            <div>
                <Button
                    color = "dark"
                    style = {{marginBottom: '2rem'}}
                    onClick = {this.toggle}
                >
                Add Greeting 
                </Button>
                <Modal
                    isOpen = {this.state.modal}
                    toggle = {this.toggle}
                >
                    <ModalHeader
                        toggle= {this.toggle}
                    >
                    Add Greeting
                    </ModalHeader>
                    <ModalBody>
                        <Form
                            onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="greeting">
                                    Greeting
                                </Label>
                                <Input
                                    type="text"
                                    name = "headline"
                                    id = "greeting"
                                    placeholder = "Add Headline"
                                    onChange = {this.onChange}
                                />
                                <Input
                                    type="text"
                                    name = "description"
                                    id = "greeting"
                                    placeholder = "Add Description"
                                    onChange = {this.onChange}
                                />
                                <Input
                                    type="text"
                                    name = "imageURL"
                                    id = "greeting"
                                    placeholder = "Add Image URL"
                                    onChange = {this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style = {{marginTop: '2rem'}}
                                    block
                                >
                                Add Greeting
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {addGreeting})(GreetingModal);