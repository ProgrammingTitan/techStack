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
import { addAd} from '../../actions/adActions';

class AdModal extends React.Component{
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

        const newAd = {
            headline: this.state.headline,
            description: this.state.description,
            imageURL: this.state.imageURL
        }

        //Add greeting via addGreeting action
        this.props.addAd(newAd);

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
                Add Featured Advertisement 
                </Button>
                <Modal
                    isOpen = {this.state.modal}
                    toggle = {this.toggle}
                >
                    <ModalHeader
                        toggle= {this.toggle}
                    >
                    Add Featured Advertisement 
                    </ModalHeader>
                    <ModalBody>
                        <Form
                            onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="headline">
                                Featured Advertisement 
                                </Label>
                                <Input
                                    type="text"
                                    name = "headline"
                                    id = "ad"
                                    placeholder = "Add Headline"
                                    onChange = {this.onChange}
                                />
                                <Input
                                    type="text"
                                    name = "description"
                                    id = "ad"
                                    placeholder = "Add Description"
                                    onChange = {this.onChange}
                                />
                                <Input
                                    type="text"
                                    name = "imageURL"
                                    id = "ad"
                                    placeholder = "Add Image URL"
                                    onChange = {this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style = {{marginTop: '2rem'}}
                                    block
                                >
                                Add Featured Advertisement 
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

export default connect(mapStateToProps, {addAd})(AdModal);