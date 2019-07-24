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
import { addHeadline} from '../../actions/headlineActions';

class HeadlineModal extends React.Component{
    state = {
        modal: false,
        headline: '',
        description: '',
        imageURL: '',
        url: ''
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

        const newHeadline = {
            headline: this.state.headline,
            description: this.state.description,
            imageURL: this.state.imageURL,
            url: this.state.url
        }

        //Add greeting via addGreeting action
        this.props.addHeadline(newHeadline);

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
                Add Headline 
                </Button>
                <Modal
                    isOpen = {this.state.modal}
                    toggle = {this.toggle}
                >
                    <ModalHeader
                        toggle= {this.toggle}
                    >
                    Add Headline
                    </ModalHeader>
                    <ModalBody>
                        <Form
                            onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="headline">
                                    Headline
                                </Label>
                                <Input
                                    type="text"
                                    name = "headline"
                                    id = "headline"
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
                                <Input
                                    type="text"
                                    name = "imageURL"
                                    id = "headline"
                                    placeholder = "Add Image URL"
                                    onChange = {this.onChange}
                                />
                                <Input
                                    type="text"
                                    name = "url"
                                    id = "headline"
                                    placeholder = "Add URL"
                                    onChange = {this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style = {{marginTop: '2rem'}}
                                    block
                                >
                                Add Headline
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

export default connect(mapStateToProps, {addHeadline})(HeadlineModal);