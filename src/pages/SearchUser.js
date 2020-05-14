import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardHeader, Avatar, Divider, CardContent, Typography } from '@material-ui/core';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import faker from 'faker';

const SearchUser = () => {

    // Declaring the States (Searched By / The Term Searched With / Fetch User)
    const [user, setUser] = useState(null)
    const [searchBy, setSearchBY] = useState("")
    const [term, setTerm] = useState("")
    const [isSearching, setIsSearching] = useState(false)

    const fetchUser = async (searchBy, term) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?${searchBy}=${term}`)
            setUser(response.data[0])
        } catch (error) {
            alert("Something Went Wrong ,, Please Try again Later")
        }
    }

    // Creating Render User Helper Method
    const renderUser = user => {
        const avatar = faker.image.avatar()
        if (!user) {
            return <p className="text-center mt-5">أختر طريقة البحث واكتب ما تريد ان تبحث به ثم اضغط بحث</p>
        }
        if (user === undefined) {
            return <p className="text-center mt-5">للأسف لا يوجد مستخدم يناسب عملية البحث .. برجاءا حاول مرة أخرى بطريقة صحيح</p>
        }
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
                </Card>
            </Grid>
        )
    }

    const handleSubmit = e => {
        e.preventDefault()
        setIsSearching(true)
        fetchUser(searchBy, term)
        setTimeout(() => setIsSearching(false), 5000)
        setSearchBY("")
        setTerm("")
    }

    return (
        <Grid container justify="center">
            <Grid item xs={10}>
                <form className="mt-5 py-3" onSubmit={handleSubmit}>
                    <InputGroup>
                        <Input className="rounded-0" type="search" value={term} onChange={e => setTerm(e.target.value)} />
                        <InputGroupAddon addonType="append">
                            <Input type="select" value={searchBy} onChange={e => setSearchBY(e.target.value)} className="bg-success text-white">
                                <option value="">إختر</option>
                                <option value="name">الاسم</option>
                                <option value="id">الرقم التعريفي</option>
                                <option value="email">الإيميل</option>
                                <option value="website">الموقع الإليكتروني</option>
                            </Input>
                        </InputGroupAddon>
                    </InputGroup>
                    <Button
                        color="primary"
                        type="submit"
                        className="btn-block my-2"
                        disabled={searchBy.length === 0 || term.length === 0 || isSearching}
                    >
                        إبحث
                    </Button>
                </form>
            </Grid>
            {renderUser(user)}
        </Grid>
    );
}

export default SearchUser;
