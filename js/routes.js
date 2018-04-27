routes = [
    {
        path: '/etiology/',
        url: './pages/etiology.html'
    },
    {
        path: '/outcomes/',
        url: './pages/outcomes.html'
    },
    {
        path: '/about/',
        url: './pages/about.html'
    },
    {
        path: '/single/',
        url: './pages/single.html'
    },
    
    // Default route (404 page). MUST BE THE LAST
    {
    path: '(.*)',
    url: './pages/404.html',
    }
]