import {createBrowserRouter} from 'react-router';

export const rootRouter = createBrowserRouter([
    {path: '/' , element : <div>I am home page</div>  },
    {path: '/about', element: <div>I am about page</div> } //element er vitore jekono jsx likhe pari
])