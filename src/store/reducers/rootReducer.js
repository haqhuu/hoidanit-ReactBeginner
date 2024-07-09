
const initState = {
    users: [
        { id: '1', name: 'ha' },
        { id: '2', name: 'ha2' },
    ]
}

const createRoot = (state = initState, action) => {
    return state
}

export default createRoot