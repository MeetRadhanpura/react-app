import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'userDetail': [],
            'userAddress': [],
            'ID': props.ID, //gets the ID from component attribute ID
        }

    }
    componentDidMount() {
        this.getDetail();

    }

    async getDetail() {
        await fetch(`https://jsonplaceholder.typicode.com/users/${this.state.ID}`)
            .then(detail => detail.json())
            .then(detail => this.setState({ 'userDetail': detail, 'userAddress' : detail.address})).then(console.log(this.state.userDetail));
    }
    render() {
        return (
            <div className="UserDetail">
                <Button></Button>
                <div className="UserDetailChild" style={{ width: '18rem', display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
                    <Card bg="info" text="white" >
                        <Card.Header>{this.state.userDetail.id}</Card.Header>
                        <Card.Body>
                            <Card.Title>{this.state.userDetail.name}</Card.Title>
                               <Card.Text>
                                    <b>Username: </b>{this.state.userDetail.username}
                               </Card.Text>
                                <Card.Text>
                                    <b>Email: </b>{this.state.userDetail.email}
                                </Card.Text>
                                <Card.Text>
                                    <b>Street: </b> {this.state.userAddress.street}
                                </Card.Text>
                                <Card.Text>
                                    <b>Suite: </b> {this.state.userAddress.suite}
                                </Card.Text>
                                <Card.Text>
                                    <b>City: </b> {this.state.userAddress.city}
                                </Card.Text>
                                <Card.Text>
                                    <b>Zipcode: </b>{this.state.userAddress.zipcode}
                                </Card.Text>
                                <Card.Text>
                                    <b>Phone number: </b>   {this.state.userDetail.phone}
                                </Card.Text>
                                <Card.Text>
                                    <b>Website: </b>  {this.state.userDetail.website}
                                </Card.Text>
                                <Card.Text>
                                <Button href="./components/UserDetails" variant="light">Go Back</Button>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }

}
export default UserDetail;