import React from 'react';
import { getTasks } from '@/lib/tasks';
import ApiTodoList from './components/ApiTodoList';

export default async function ApiTodosPage() {
  // Mengambil data awal dari DummyJSON di sisi server
  const data = await getTasks();

  return (
    <main className="min-h-screen p-6 md:p-10 bg-white text-dark-70">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
          <header className="mb-6 border-b border-gray-100 pb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-dark-70 text-center">
              Daftar Tugas (DummyJSON API)
            </h1>
          </header>

          {/* Render komponen ApiTodoList dan berikan data tasks sebagai props */}
          <ApiTodoList initialTasks={data.tasks} />
        </div>
      </div>
    </main>
  );
}