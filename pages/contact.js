import styled from "styled-components";

export default () => (
  <div>
    <h1>Contact Us</h1>

    <Form action="https://example.com" method="post">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <textarea name="message" placeholder="Message" />
      <input type="submit" value="submit" />
    </Form>
  </div>
);

const Form = styled.form`
  max-width: 600px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    border: 1px solid #ccc;
    text-transform: uppercase;
  }

  textarea {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
    height: 200px;
    text-transform: none;
  }

  label {
    font-size: 2rem;
    text-transform: uppercase;
  }

  input {
    min-height: 2rem;
    padding: 0.2rem 1rem;
    text-transform: none;
  }

  input,
  label {
    margin-bottom: 1.4rem;
  }

  input[type="submit"] {
    background-color: black;
    color: white;
    cursor: pointer;
    padding: 0.6rem;
    font-size: 2rem;
    width: 10rem;
    margin: 0;
    margin-left: auto;
    text-transform: uppercase;

    &:hover {
      background-color: #999;
    }

    /* Override mobile styles */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;
