import './App.css';
import 'antd/dist/antd.min.css'
import './networking'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { TodoListPage } from 'pages/TodoListPage';
import { AboutPage } from 'pages/AboutPage';


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='todolist' element={<TodoListPage />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
