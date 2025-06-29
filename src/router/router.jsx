import {createBrowserRouter} from 'react-router';
import App from '../pages/App';
import About from '../pages/About';
import Company from '../pages/home';
import RootLayout from '../pages/RootLayout';
import PostList from '../pages/PostList';
import PostDetails from '../pages/PostDetails';

export const rootRouter = createBrowserRouter([
    {path: '/', element: <RootLayout/>,
        children: [
            {path: '/about', element: <About />},
            {path: '/home', element: <Company/>},
            {path: '/posts', element: <PostList/>},
            {path: '/posts/:id', element: <PostDetails/>}
    ]},
    // {path: '/', element: <App /> }, //element er vitore jekono jsx likhe pari
    
     
])