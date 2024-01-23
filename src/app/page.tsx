'use client';
import {useMemo} from 'react';
import {useAppSelector} from 'src/redux/store/hooks'
import TableComponent from "src/components/table";

export default function Home() {
    const {books} = useAppSelector(state => state.booksState);
    const booksStore = useMemo(() => Object.values(books), [books]);
    return (
        <TableComponent/>
    )
}
