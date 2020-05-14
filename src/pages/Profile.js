import React, { useState, useEffect } from 'react';
import axios from 'axios';
import faker from 'faker';
import { Grid } from '@material-ui/core';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Profile = () => {

    // Get Faker Image
    let imgSrc = faker.image.avatar()

    // Getting Random User to Visualize it As Profile
    const [user, setUser] = useState(null)

    const fetchUser = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users/1")
            setUser(response.data)
        } catch (error) {
            alert("Something Went Wrong While Fetching some Data ,, Please Try again later")
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const renderUser = user => {
        if (user) {
            return (
                <Card className="text-primary font-weight-bolder">
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
                    <button className="btn btn-primary my-1">Settings</button>
                    <button className="btn btn-danger my-1">Delete My Account</button>
                </Card>
            )
        }
        return (
            <p>Loading ...</p>
        )
    }

    return (
        <div className="profile">
            <Grid container justify="center" className="py-5">
                <Grid item xs={8} sm={5}>
                    {renderUser(user)}
                </Grid>
            </Grid>
        </div>
    );
}

export default Profile;
