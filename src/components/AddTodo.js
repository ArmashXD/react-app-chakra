import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react/cjs/react.development'
import {nanoid} from 'nanoid';


function AddTodo({ addTodo }) {

  const [content, setContent] = useState('')
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault()
    if(!content)
    {
        toast({
            title:'Please enter',
            description:'Todo is required',
            status:'error',
            duration:2000,
            isClosable: true
        });
        return;
    }
    const todo = {
      id: nanoid(),
      body: content,
    }

    addTodo(todo);
  }


  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          variant="filled"
          placeholder="Add Todo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  )
}

export default AddTodo
