import { Button, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { regCourseByAdmin } from "../../../../redux/types/actions";
import { delCourseByAdmin } from "../../../../redux/types/actions";
import Swal from "sweetalert2";

export default function RegModal(props) {
    const dispatch = useDispatch();
    const [searchCourse, setSearchCourse] = useState("");
    const [courseCode, setCourseCode] = useState("");

    const unRegisteredCourse = useSelector(
        (state) => state.CourseUnRegReducer.data,
    );

    const courseWaitConfirm = useSelector(
        (state) => state.CourseWaitConfirmReducer.data,
    );

    const courseConfirmed = useSelector(
        (state) => state.CourseConfirmReducer.data,
    );

    console.log(props);

    const renderListUnregisteredCourse = (unRegisteredCourse) => {
        if (!unRegisteredCourse) return null;

        const filteredItems = unRegisteredCourse.filter((item) => {
            const searchTerm = searchCourse.trim().toLowerCase();
            const courseName = item.tenKhoaHoc.trim().toLowerCase();
            return searchTerm === "" || courseName.includes(searchTerm);
        });

        return filteredItems.map((item, index) => (
            <li
                key={index}
                onClick={() => {
                    setCourseCode(item.maKhoaHoc);
                    setSearchCourse(item.tenKhoaHoc);
                }}
                className="dropdown-item"
            >
                {item.tenKhoaHoc}
            </li>
        ));
    };

    const columns = [
        {
            title: "STT",
            key: "index",
            render: (text, record, index) => index + 1,
            width: "15%",
        },
        {
            title: "Tên khóa học",
            dataIndex: "tenKhoaHoc",
            key: "tenKhoaHoc",
            width: "55%",
        },
        {
            title: "Chờ xác nhận",
            width: "35%",
            render: (text, course) => {
                return (
                    <>
                        <Button
                            className="me-2"
                            type="primary"
                            onClick={() =>
                                Swal.fire({
                                    icon: "question",
                                    title: "Xác nhận",
                                    text: "Bạn có chắc chắn ghi danh?",
                                    showCancelButton: true,
                                    showConfirmButton: true,
                                    cancelButtonText: "Hủy bỏ",
                                    confirmButtonText: "Đồng ý",
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        dispatch(
                                            regCourseByAdmin({
                                                taiKhoan: props.user.taiKhoan,
                                                maKhoaHoc: course.maKhoaHoc,
                                            }),
                                        );
                                    }
                                })
                            }
                        >
                            Xác nhận
                        </Button>
                        <Button
                            type="primary"
                            danger
                            onClick={() =>
                                Swal.fire({
                                    icon: "question",
                                    title: "Xác nhận",
                                    text: "Bạn có chắc chắn hủy ghi danh?",
                                    showCancelButton: true,
                                    showConfirmButton: true,
                                    cancelButtonText: "Hủy bỏ",
                                    confirmButtonText: "Đồng ý",
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        dispatch(
                                            delCourseByAdmin({
                                                taiKhoan: props.user.taiKhoan,
                                                maKhoaHoc: course.maKhoaHoc,
                                            }),
                                        );
                                    }
                                })
                            }
                        >
                            Hủy bỏ
                        </Button>
                    </>
                );
            },
        },
    ];

    const columnsConfirmed = [
        {
            title: "STT",
            key: "index",
            render: (text, record, index) => index + 1,
            width: "15%",
        },
        {
            title: "Tên khóa học",
            dataIndex: "tenKhoaHoc",
            key: "tenKhoaHoc",
            width: "55%",
        },
        {
            title: "Chờ xác nhận",
            width: "35%",
            render: (text, course) => {
                return (
                    <>
                        <Button
                            type="primary"
                            danger
                            onClick={() =>
                                Swal.fire({
                                    icon: "question",
                                    title: "Xác nhận",
                                    text: "Bạn có chắc chắn hủy ghi danh?",
                                    showCancelButton: true,
                                    showConfirmButton: true,
                                    cancelButtonText: "Hủy bỏ",
                                    confirmButtonText: "Đồng ý",
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        dispatch(
                                            delCourseByAdmin({
                                                taiKhoan: props.user.taiKhoan,
                                                maKhoaHoc: course.maKhoaHoc,
                                            }),
                                        );
                                    }
                                })
                            }
                        >
                            Hủy ghi danh
                        </Button>
                    </>
                );
            },
        },
    ];

    return (
        <div
            className="modal fade"
            id="regModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticRegModal"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="border-bottom border-secondary">
                            <div className="row">
                                <h5 className="text-left my-1 col-3"> Chọn khóa học</h5>

                                <form className="form-group mb-2 col-6">
                                    <input
                                        onChange={(e) => setSearchCourse(e.target.value)}
                                        value={searchCourse}
                                        data-bs-toggle="dropdown"
                                        placeholder="Nhập hoặc chọn khóa học"
                                        type="text"
                                        className="form-control dropdown-toggle"
                                    />

                                    <ul
                                        className="dropdown-menu"
                                        style={{
                                            width: "50vh",
                                            height: "50vh",
                                            overflowY: "scroll",
                                        }}
                                    >
                                        {renderListUnregisteredCourse(unRegisteredCourse)}
                                    </ul>
                                </form>

                                <div className="col-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button
                                            className="btn btn-success me-1"
                                            onClick={() => {
                                                Swal.fire({
                                                    icon: "question",
                                                    title: "Xác nhận",
                                                    text: "Bạn có chắc chắn ghi danh?",
                                                    showCancelButton: true,
                                                    showConfirmButton: true,
                                                    cancelButtonText: "Hủy bỏ",
                                                    confirmButtonText: "Đồng ý",
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        dispatch(
                                                            regCourseByAdmin({
                                                                taiKhoan: props.user.taiKhoan,
                                                                maKhoaHoc: courseCode,
                                                            }),
                                                        );
                                                        setSearchCourse("");
                                                    }
                                                });
                                            }}
                                        >
                                            Ghi danh
                                        </button>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="border-bottom border-secondary">
                            <h5>Khóa học chờ xác thực</h5>
                            <Table
                                dataSource={courseWaitConfirm}
                                columns={columns}
                                rowKey="tenKhoaHoc"
                                bordered
                                pagination={{ pageSize: 3 }}
                            />
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="border-bottom border-secondary">
                            <h5>Khóa học đã ghi danh</h5>
                            <Table
                                dataSource={courseConfirmed}
                                columns={columnsConfirmed}
                                rowKey="tenKhoaHoc"
                                bordered
                                pagination={{ pageSize: 3 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
