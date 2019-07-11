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
import { addUpdate} from '../../actions/updateActions';

class UpdateModal extends React.Component{
    state = {
        modal: false,
        headline: '',
        description: ''
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

        const newUpdate = {
            headline: this.state.headline,
            description: this.state.description
        }

        //Add greeting via addGreeting action
        this.props.addUpdate(newUpdate);

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
                Add Update
                </Button>
                <Modal
                    isOpen = {this.state.modal}
                    toggle = {this.toggle}
                >
                    <ModalHeader
                        toggle= {this.toggle}
                    >
                    Add Update
                    </ModalHeader>
                    <ModalBody>
                        <Form
                            onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="update">
                                    Update
                                </Label>
                                <Input
                                    type="text"
                                    name = "headline"
                                    id = "update"
                                    placeholder = "Add Headline"
                                    onChange = {this.onChange}
                                />
                                <Input
                                    type="text"
                                    name = "description"
                                    id = "headline"
                                    placeholder = "Add Description"
                                    onChange = {this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style = {{marginTop: '2rem'}}
                                    block
                                >
                                Add Update
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

export default connect(mapStateToProps, {addUpdate})(UpdateModal);