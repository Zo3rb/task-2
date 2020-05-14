import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Grid } from '@material-ui/core';
import { SingleUser } from '../components';
import { Link } from 'react-router-dom';


const UsersPage = () => {

    // Declaring State of The Page for Pagination & Searched User
    const [page, setPage] = useState(1)
    const [userList, setUserList] = useState([])

    // Declaring The Async Function to Fetch Users from Fake API
    const fetchUsers = async page => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`)
            setUserList([...response.data])
        } catch (error) {
            alert("Something Went Wrong ,, Please Try Again Later")
        }
    }

    // Fetching the User Once Component been Loaded
    useEffect(() => {
        fetchUsers(page)
    }, [page])

    // Creating Handling UserList
    const renderUserList = () => {
        return (
            <Grid container className="py-3" justify="center">
                {userList.map(user => {
                    return (<SingleUser key={user.id} user={user} />)
                })}
            </Grid>
        )
    }

    return (
        <Fragment>
            <Link to="/find-user" className="text-decoration-none btn btn-primary btn-block my-3">
                البحث عن مستخدم
            </Link>
            {renderUserList()}
            <Grid container justify="center">
                <Grid item xs={4}>
                    <Pagination
                        aria-label="Page navigation example"
                        style={{ direction: "ltr", cursor: "pointer" }}
                    >
                        <PaginationItem disabled={page === 1} onClick={() => setPage(1)}>
                            <PaginationLink>
                                1
                    </PaginationLink>
                        </PaginationItem>
                        <PaginationItem disabled={page === 2} onClick={() => setPage(2)}>
                            <PaginationLink>
                                2
                    </PaginationLink>
                        </PaginationItem>
                    </Pagination>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default UsersPage;
