import {StoredBookType} from "src/types/book";
import {deleteBook, selectUpdateBook} from "src/redux/store/slice/books";
import {useAppDispatch, useAppSelector} from "src/redux/store/hooks";
import {useMemo} from "react";

export default function TableBody() {
    const dispatch = useAppDispatch();
    const {books, addEditBook, selectedBook} = useAppSelector(state => state.booksState);
    const booksStore = useMemo(() => Object.values(books), [books]);
    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete Book')) {
            dispatch(deleteBook({id}))
        }
    };
    return (<tbody className="divide-y divide-gray-200 bg-white">
    {booksStore.length > 0 && booksStore?.map((book: StoredBookType) => (
        <tr key={book.id}>
            <td className="whitespace-nowrap px-3 py-4 pr-4 text-xs   text-center text-gray-900 cursor-pointer font-semibold"
                onClick={() => {
                    dispatch(selectUpdateBook(book));
                }}
            >
                {book.name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 pr-4 text-center text-xs text-gray-500">{book.price}</td>
            <td className="whitespace-nowrap px-3 py-4 pr-4 text-center text-xs    text-gray-500">{book.category}</td>
            <td className="whitespace-nowrap px-3 py-4 pr-4 text-center text-xs    font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900"
                   onClick={() => handleDelete(book.id)}>
                    Delete
                </a>
            </td>
        </tr>
    ))}
    {booksStore.length === 0 && (
        <tr>
            <td colSpan={4}>
                <div className='w-full p-14'>
                    <h3 className='text-text text-center'>
                        Click on &quot;Add book&quot; button to add a book</h3>
                </div>
            </td>
        </tr>
    )}
    </tbody>)
}
