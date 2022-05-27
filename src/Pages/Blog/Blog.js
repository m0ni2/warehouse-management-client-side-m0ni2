import React from 'react';
import { Accordion, Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center mb-3'>Blog Page</h2>
            <div className='col col-md-8 mx-auto'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <strong className='me-2'>Q-1: </strong>
                            Difference between Javascript and Nodejs ?
                        </Accordion.Header>
                        <Accordion.Body>
                            <strong className='me-2'>Ans: </strong>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Javascript</th>
                                        <th>Nodejs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                                        <td>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Javascript can only be run in the browsers.</td>
                                        <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>It is basically used on the client-side.</td>
                                        <td>It is mostly used on the server-side.</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                                        <td>Nodejs does not have capability to add HTML tags.</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. </td>
                                        <td>Nodejs is written in C, C++ and Javascript.</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <strong className='me-2'>Q-2: </strong>
                            When should you use Nodejs and when should you use Mongodb ?
                        </Accordion.Header>
                        <Accordion.Body>
                            <strong className='me-2'>Ans: </strong>NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of browser. It's used for building back-end services like APIs like Web App or Mobile App etc.
                            <br />
                            <br />
                            MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data.
                            <br />
                            <br />
                            We can run our backend server using Nodejs and when needed to store data we can use MongoDB.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <strong className='me-2'>Q-3: </strong>
                            Differences between SQL and NoSQL databases.?
                        </Accordion.Header>
                        <Accordion.Body>
                            <strong className='me-2'>Ans: </strong>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>SQL</th>
                                        <th>NoSQL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>SQL database is primarily called as Relational Database (RDBMS) or Sequential Database</td>
                                        <td>NoSQL database is primarily called as Non-Relational / Distributed Database or Non-Sequential Database</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>SQL database is table-based</td>
                                        <td>NoSQL database is either key-value pairs, document-based, graph database or wide-column stores</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>SQL database have fixed or static or predefined schema</td>
                                        <td>NoSQL database have dynamic schema</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>SQL database is best suited for complex queries</td>
                                        <td>NoSQL database is not so good for complex queries</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Vertically Scalable</td>
                                        <td>Horizontally scalable</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <strong className='me-2'>Q-4: </strong>
                            What is the purpose of JWT and how does it work?
                        </Accordion.Header>
                        <Accordion.Body>
                            <strong className='me-2'>Ans: </strong>
                            JWT is stands for JSON Web Token. It's used to securely transfer information over the web(between two parties).
                            When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server. By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>
    );
};

export default Blog;