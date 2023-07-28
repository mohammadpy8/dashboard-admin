import React, {useState, useEffect} from 'react';

const Pagination = () => {

    const [todos, setTodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedTodos, setPagonatedTodos] = useState([]);

    let pageSize = 10;
    let pagesNumber;
    
    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => {
                setTodos(json);
                const endIndex = pageSize * currentPage;
                const startIndex = endIndex - pageSize;
                const allShowTodos = json.slice(startIndex, endIndex);
                setPagonatedTodos(allShowTodos);
            });

    }, []);

    const changePaginate = (newPage) => {

        setCurrentPage(newPage);
        const endIndex = pageSize * currentPage;
        const startIndex = endIndex - pageSize;
        const allShowTodos = todos.slice(startIndex, endIndex);
        setPagonatedTodos(allShowTodos);

    }; 

    const pagesCount = Math.ceil(todos.length / pageSize);
    pagesNumber = Array.from(Array(pagesCount).keys());

    return (
        <div>
            {
                !todos ? "Loading" : (
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User ID</th>
                                <th>Title</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paginatedTodos.map(todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.userId}</td>
                                        <td>{todo.title}</td>
                                        <td>
                                            <p
                                                className={todo.completed ? "btn btn-success" :
                                                    "btn btn-danger"}
                                            >
                                                {todo.completed ? "COMPLETED" : "PENDING"}
                                            </p>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
            <nav className='d-flex justify-content-center '>
                <ul class="pagination">
                    {
                        pagesNumber.map((page, index) => (
                            <li
                                style={{cursor: "pointer", borderRadius: "10px"}}
                                class={page + 1 === currentPage ? "page-item page-link active" :
                                    "page-item page-link"} key={index}
                                onClick={() => changePaginate(page + 1)}
                            >
                                {page + 1}
                            </li>
                        ))
                    }
                </ul>
            </nav>

        </div>
    );
};

export default Pagination;