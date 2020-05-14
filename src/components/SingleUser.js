import React from 'react';
import { Grid, Card, CardHeader, Avatar, CardContent, Typography, Divider } from '@material-ui/core';
import faker from "faker";
import { Link } from 'react-router-dom';

const SingleUser = ({ user }) => {
    const avatar = faker.image.avatar()
    return (
        <Grid item xs={8} md={7} className="my-2 px-2">
            <Card>
                <CardHeader
                    title={user.username}
                    subheader={user.email}
                    avatar={
                        <Avatar aria-label="recipe" alt={user.name} src={avatar} />
                    }
                />
                <Divider />
                <CardContent>
                    <Typography color="primary" variant="subtitle1">
                        Name: <strong>{user.name}</strong>
                    </Typography>
                    <Typography variant="body1">Phone Number: {user.phone}</Typography>
                    <Typography variant="body1">Website: {user.website}</Typography>
                </CardContent>
                <Link to={`/user/${user.id}`} className="mt-2 ml-3 font-weight-bold">View Profile</Link>
            </Card>
        </Grid>
    );
}

export default SingleUser;
