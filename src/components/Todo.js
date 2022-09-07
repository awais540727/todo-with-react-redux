import { Button, Form, Container, Col, Row, Card } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../actions/index';

const Todo = () => {
  const dispatch = useDispatch();

  // getting todo id for update
  const [idData, setIdData] = useState();

  // check whether the user want to add new todo or update the existing todo
  const [check, setCheck] = useState(false);

  // getting todo data for update
  const [data, setData] = useState();

  // update todo data by state
  const [updateForm, setUpdateForm] = useState();

  // getting value through useSelector for displaying
  const show = useSelector((state) => state.TodoReducer.todoList);

  // add new todo through state
  const [form, setForm] = useState();

  // when the update button is trigger it task us for update the data and through it we are getting old id and todo data for update
  const updateHandler = (id, data) => {
    setIdData(id);
    setData(data);
    setCheck(true);
  };
  // console.log('id', idData, 'data for update', data);

  // add or update todo when the add todo or update todo button is clicked
  const submitHandler = (e) => {
    e.preventDefault();
    if (check === false) {
      setForm('');
    }

    if (check === true) {
      setUpdateForm('');
    }
  };
  return (
    <>
      <Container className="bg-success mt-4 text-white">
        <Form onSubmit={submitHandler}>
          <Row className=" rounded mt-5 mb-5">
            <Col xs={12} md={12} lg={12}>
              {/* checking for Add new todo or Update todo */}

              {check ? (
                <label className="mt-3">
                  Update Todo
                  <br />
                  <input
                    className="me-2 p-2 rounded"
                    type="text"
                    defaultValue={data}
                    onChange={(e) => setUpdateForm(e.target.value)}
                  />
                </label>
              ) : (
                <label className="mt-3">
                  Add Todo
                  <br />
                  <input
                    className="me-2 p-2 rounded"
                    type="text"
                    onChange={(e) => setForm(e.target.value)}
                  />
                </label>
              )}
            </Col>
            <Col xs={12} md={12} lg={12}>
              {check ? (
                <Button
                  className="p-2 mt-2 mb-2"
                  type="submit"
                  onClick={() =>
                    dispatch(
                      editTodo(idData, updateForm),
                      setUpdateForm(),
                      setCheck(false)
                    )
                  }
                >
                  Update TODO
                </Button>
              ) : (
                <Button
                  className="p-2 mt-2 mb-2"
                  type="submit"
                  onClick={() => dispatch(addTodo(form))}
                >
                  ADD TODO
                </Button>
              )}
            </Col>
          </Row>
        </Form>
      </Container>

      <Container>
        {/* Displaying store Values */}
        {show.map((value) => {
          return (
            <Card className="bg-info rounded p-2 ms-5 mt-1" key={value.id}>
              <Row className="p-3 text-center">
                <Col sm={6} md={8} lg={8}>
                  {value.title}
                </Col>
                <Col sm={3} md={2} lg={2}>
                  <Button
                    className="bg-success p-2"
                    type="submit"
                    onClick={() => updateHandler(value.id, value.title)}
                  >
                    Update
                  </Button>
                </Col>
                <Col sm={3} md={2} lg={2}>
                  <Button
                    className="bg-danger p-2"
                    type="submit"
                    onClick={() => dispatch(deleteTodo(value.id))}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default Todo;
