import {MouseEvent} from "react";
import {editAddBook} from "src/redux/store/slice/books";
import {useAppDispatch} from "src/redux/store/hooks";

export default function TableHeadingSection() {
    const dispatch = useAppDispatch();
    const addNewBook = (_e: MouseEvent<HTMLButtonElement>) => {
        dispatch(editAddBook({state: true}))

    };
    return (<div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Books</h1>
            <p className="mt-2 text-sm text-gray-700">
                A list of all the books in your account including their name, price and category.
            </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
                type="button"
                className="block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={addNewBook}>
                Add book
            </button>
        </div>
    </div>);
}
