import React, { useState, useEffect } from 'react';
import axios from 'axios';
import faker from 'faker';
import { Grid } from '@material-ui/core';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { HttpRounded, SendRounded, BlockRounded, AddCircle } from '@material-ui/icons';


const DetailedUser = props => {

    // Get Faker Image
    let imgSrc = faker.image.avatar()

    // Declaring The User State
    const [user, setUser] = useState(null)

    // Fetching User Method
    const fetchUser = async id => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(response.data)
        } catch (error) {
            alert("Something Went Wrong ,, Please Try Again Later ")
        }
    }

    // Fetching User by it's Id once Component did Mount
    useEffect(() => {
        fetchUser(props.match.params.id)
    }, [])

    // Render User
    const renderUser = user => {
        if (user) {
            return (
                <Card className="text-primary font-weight-bolder py-2">
                    <CardBody>
                        <CardTitle>{user.name}</CardTitle>
                        <CardSubtitle>{user.email}</CardSubtitle>
                    </CardBody>
                    <img width="100%" src={imgSrc} alt={user.name} />
                    <CardBody>
                        <CardText>{user.phone}</CardText>
                        <CardText>{user.website}</CardText>
                        <CardText>
                            {user.address.city}, {user.address.street}. {user.address.suite} - {user.address.zipcode}
                        </CardText>
                    </CardBody>
                    <div className="btn-group">
                        <button className="btn btn-primary mx-2">
                            <HttpRounded />
                        </button>
                        <button className="btn btn-primary mx-2">
                            <SendRounded />
                        </button>
                        <button className="btn btn-primary mx-2">
                            <AddCircle />
                        </button>
                        <button className="btn btn-primary mx-2">
                            <BlockRounded />
                        </button>
                    </div>
                </Card>
            )
        }
        return (
            <p>Loading ...</p>
        )
    }

    return (
        <div>
            <Grid container justify="center" className="py-5">
                <Grid item xs={8} sm={5}>
                    {renderUser(user)}
                </Grid>
            </Grid>
        </div>
    );
}

export default DetailedUser;
