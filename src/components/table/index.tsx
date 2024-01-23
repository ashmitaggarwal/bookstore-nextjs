import {useAppSelector} from "src/redux/store/hooks";
import AddEditBook from "../addEditBookModal";
import TableHeadingSection from "src/components/table/tableHeadingSection";
import TableHead from "src/components/table/tableHead";
import TableBody from "src/components/table/tableBody";

export default function TableComponent() {
    const {addEditBook} = useAppSelector(state => state.booksState);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <TableHeadingSection/>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <TableHead/>
                                <TableBody/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {addEditBook && <AddEditBook/>}
        </div>
    )
}
