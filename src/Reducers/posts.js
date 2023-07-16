export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':

        case 'CREATE':
            return posts;
        default: 
            return posts;
    }
}