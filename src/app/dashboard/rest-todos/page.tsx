import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: {description: 'asc'}})

  return (
    <div>
      <div className="w-full pl-6 pr-3 py-3 ml-3 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={ todos } />
    </div>
  );
}