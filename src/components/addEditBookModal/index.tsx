import {
    ChangeEvent,
    FormEvent,
    useState, useEffect
} from "react";
import {useAppDispatch, useAppSelector} from "src/redux/store/hooks";
import {addBook, updateBook, editAddBook} from "src/redux/store/slice/books";
import Input from "../input";
import Button from "../button";
import {classes} from "src/utils/helper";
import {BookType, StoredBookType} from "src/types/book";


const INITIAL_VALUES = {
    name: '',
    category: '',
    price: 0,
    description: '',
};

const AddEditBook = () => {
    const dispatch = useAppDispatch();
    const [values, setValues] = useState(INITIAL_VALUES);
    const {selectedBook} = useAppSelector(state => state.booksState);

    useEffect(() => {
        if (selectedBook !== null) {
            const {id, ...rest} = selectedBook;
            setValues(rest);
        }
    }, [selectedBook])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        if (selectedBook?.id) {
            let postBody: StoredBookType = {
                category: data.get('category')!.toString(),
                description: data.get('description')!.toString(),
                name: data.get('name')!.toString(),
                price: Number(data.get('price')!.toString()),
                id: selectedBook.id,
            };
            dispatch(updateBook(postBody as StoredBookType));
        } else {
            let postBody: BookType = {
                category: data.get('category')!.toString(),
                description: data.get('description')!.toString(),
                name: data.get('name')!.toString(),
                price: Number(data.get('price')!.toString()),
            };
            dispatch(addBook(postBody as BookType));
        }
        setValues(INITIAL_VALUES);
        dispatch(editAddBook({state: false}));
    }
    return (
        <div
            aria-label="modal"
            data-testid="modal"
            className={classes("fixed top-0 bottom-0 right-0 left-0 bg-black/20 flex justify-center items-center")}
            onClick={() => dispatch(editAddBook({state: false}))}
        >
            <div className={classes('bg-white p-6 rounded-2xl w-full max-w-[860px] shadow-2xl')}
                 onClick={(e) => e.stopPropagation()}>
                <div className="text-center text-xl font-semibold">{selectedBook?.id ? 'Edit Book' : 'Add Book'}</div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input name="name" label="Name" required value={values['name']} onChange={handleInputChange}/>
                    <Input name="category" label="Category" required value={values['category']}
                           onChange={handleInputChange}/>
                    <Input name="price" label="Price" required type="number"
                           value={values['price'] === 0 ? '' : values['price']}
                           onChange={handleInputChange}/>
                    <Input name="description" label="Description" required value={values['description']}
                           onChange={handleInputChange}/>
                    <div className="flex items-center justify-end gap-3">
                        <Button type="button" className="bg-text"
                                onClick={() => dispatch(editAddBook({state: false}))}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEditBook
