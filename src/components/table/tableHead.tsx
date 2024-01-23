export default function TableHead() {
    const headerTable: {
        name: string, value: string,
    }[] = [
        {name: 'Name', value: 'name'},
        {name: 'Price (CAD)', value: 'price'},
        {name: 'Category', value: 'category'},
        {name: 'Action', value: 'delete'}];
    return (<thead className="bg-gray-50">

    <tr>
        {headerTable.map((header, index) => <th scope="col"
                                                className="px-3 py-4 pr-4 text-center text-sm font-semibold text-gray-900"
                                                key={index}>
            {header.name}
        </th>)}
    </tr>
    </thead>)
}
