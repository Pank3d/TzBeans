import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {  MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
  }

})


  ReactDOM.createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
      <QueryClientProvider client={queryClient} >
        <MantineProvider>
          <App />
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
