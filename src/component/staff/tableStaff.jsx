import { Space, Table } from "antd";
import getListUser from "./getListUser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import changePageAndSize from "./changePageAndSize";

const { Column } = Table
export default function TableStaff() {
    const [user, setUser] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState()
    const pageSize = 10;

    useEffect(() => {
        getListUser().then((response) => {
            console.log(response.data)
            setUser(response.data.users)
            setTotal(response.data.totalElements)
          
        })

    }, [])

    const handleChangePage = (page) => {
        changePageAndSize(page,pageSize)
        setCurrentPage(page);
    };
    const getCurrentData = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return user.slice(startIndex, endIndex);
    };

    
    return (

        <Table dataSource={getCurrentData()} rowKey={"id"} pagination={{
            current: currentPage,
            pageSize: pageSize, total: total,
            onChange: handleChangePage
        }}>
            <Column title="UserName" dataIndex="userName" key="userName" />
            <Column title="FullName" dataIndex="fullName" key="fullName" />
            <Column title="Email" dataIndex="email" key="email" />
            <Column
                title="Action"
                key="Action"
                render={() => (
                    <Space size="middle">
                        <Link >Details </Link>
                    </Space>
                )}
            />
        </Table>
    )
}