import React from "react";
import styled from "styled-components";

const Form = styled.form`
    max-width: 600px;
    border: 1px solid black;
    margin: 4rem;
    padding: 2rem;

    input {
        display: block;
    }
`
export default () => (
    <Form action="https://example.com" method="post">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <textarea name="message" placeholder="Message" />

    </Form>
)