'use client';

import { Todo } from "@prisma/client"
import { TodoItem } from "..";
import * as todoApi from "@/todos/helpers/todos";
import { useRouter } from "next/navigation";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {

  const router = useRouter();

  const toggleTodo = async(id: string, complete: boolean) => {
    const updatedTodo = await todoApi.updateTodo(id, complete);
    console.log(updatedTodo);
    
    router.refresh();
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={ toggleTodo } />
        ))
      }
    </div>
  )
}