import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import { fetchListCourse } from "../../../redux/types/actions";
import { fetchCourseCate } from "../../../redux/types/actions";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Swal from "sweetalert2";
import * as yup from "yup";
import moment from "moment";
import { addCourse } from "../../../redux/types/actions";
import { deleteCourse } from "../../../redux/types/actions";
import { updateCourse } from "../../../redux/types/actions";
import { updateCourseNoImage } from "../../../redux/types/actions";

export default function Courses() {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.CourseReducer);
    const courseCate = useSelector((state) => state.CourseWithCateReducer.data);
    const [dataCourse, setDataCourse] = useState(null);
    const [thumb, setThumb] = useState("");

    useEffect(() => {
        dispatch(fetchListCourse());
        dispatch(fetchCourseCate());
    }, []);

    useEffect(() => {
        setThumb(dataCourse?.hinhAnh);
    }, [dataCourse]);

    const handleDataCourse = (data) => {
        setDataCourse(data);
    };

    const renderCourseCate = () => {
        return courseCate?.map((category, index) => {
            return (
                <option key={index} value={category.maDanhMuc}>
                    {category.tenDanhMuc}
                </option>
            );
        });
    };

    const creator = JSON.parse(localStorage.getItem("user"));

    const courseSchema = yup.object().shape({
        maKhoaHoc: yup
            .string()
            .min(2, "* Mã khóa học quá ngắn")
            .max(20, "* Mã khóa học không quá 20 ký tự")
            .required("* Mã khóa học không được bỏ trống!"),
        tenKhoaHoc: yup.string().required("* Tên khóa học không được bỏ trống!"),
        maDanhMucKhoaHoc: yup.string().required("* Danh mục không được bỏ trống!"),
        ngayTao: yup
            .string()
            .required("* Ngày tạo không được bỏ trống!")
            .matches(
                /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
                "* Vui lòng nhập đúng định dạng DD/MM/YYYY",
            ),
        danhGia: yup
            .number()
            .required("* Đánh giá không được bỏ trống!")
            .min(0, "* Đánh giá thấp nhất là 0")
            .max(5, "* Đánh giá cao nhất là 5"),
        luotXem: yup
            .number()
            .required("* Lượt xem không được bỏ trống!")
            .min(0, "* Lượt xem thấp nhất là 0"),
        taiKhoanNguoiTao: yup
            .string()
            .required('* Người tạo không được bỏ trống!"'),
        moTa: yup.string().required('* Mô tả không được bỏ trống!"'),
    });

    if (loading) return <Loader />;

    const columns = [
        {
            title: "Mã khóa học",
            dataIndex: "maKhoaHoc",
            sorter: (a, b) => a.maKhoaHoc - b.maKhoaHoc,
            sortDirections: ["descend"],
            width: "15%",
        },
        {
            title: "Tên khóa học",
            dataIndex: "tenKhoaHoc",
            width: "20%",
        },
        {
            title: "Hình ảnh",
            dataIndex: "hinhAnh",
            render: (text, img) => (
                <img src={img.hinhAnh} alt={img.maKhoaHoc} width={200} />
            ),
            width: "20%",
        },
        {
            title: "Lượt xem",
            dataIndex: "luotXem",
            width: "10%",
        },
        {
            title: "Người tạo",
            dataIndex: ["nguoiTao", "hoTen"],
            width: "15%",
        },
        {
            title: "Tuỳ chỉnh",
            render: (text, course) => {
                return (
                    <>
                        {/* edit course */}
                        <button
                            className="btn btn-primary"
                            type="button"
                            key={1}
                            data-toggle="modal"
                            data-target="#staticBackdrop"                
                            onClick={() => {
                                handleDataCourse(course);
                            }}
                        >
                            Sửa
                        </button>

                        {/* modal */}
                        <div
                            className="modal fade"
                            id="staticBackdrop"
                            data-backdrop="static"
                            data-keyboard="false"
                            tabIndex={-1}
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">
                                            {dataCourse ? "Cập nhật khóa học" : "Thêm khóa học"}
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                            onClick={() => dispatch(fetchListCourse())}>
                                                Đóng
                                            </button>
                                        
                                    </div>
                                    <div className="modal-body">
                                        <Formik
                                            enableReinitialize
                                            initialValues={{
                                                maKhoaHoc: dataCourse?.maKhoaHoc || "",
                                                biDanh: dataCourse?.biDanh || "",
                                                tenKhoaHoc: dataCourse?.tenKhoaHoc || "",
                                                maDanhMucKhoaHoc:
                                                    dataCourse?.danhMucKhoaHoc.maDanhMucKhoahoc || "",
                                                ngayTao:
                                                    dataCourse?.ngayTao ||
                                                    moment(Date.now()).format("DD/MM/YYYY"),
                                                danhGia: 0,
                                                luotXem: dataCourse?.luotXem || 0,
                                                taiKhoanNguoiTao:
                                                    dataCourse?.nguoiTao.taiKhoan || creator.taiKhoan,
                                                moTa: dataCourse?.moTa || "",
                                                hinhAnh: dataCourse?.hinhAnh || null,
                                                maNhom: "GP09",
                                            }}
                                            validationSchema={courseSchema}
                                            onSubmit={(values) => {
                                                Swal.fire({
                                                    icon: "question",
                                                    title: "Xác nhận",
                                                    text: "Bạn chắc chắn thực hiện?",
                                                    showConfirmButton: true,
                                                    showCancelButton: true,
                                                    confirmButtonText: "Đồng ý",
                                                    cancelButtonText: "Hủy bỏ",
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        //Tạo formData
                                                        let formData = new FormData();
                                                        if (values.hinhAnh?.name) {
                                                            for (let key in values) {
                                                                if (key !== "hinhAnh") {
                                                                    formData.append(key, values[key]);
                                                                } else {
                                                                    formData.append(
                                                                        "hinhAnh",
                                                                        values.hinhAnh,
                                                                        values.hinhAnh.name,
                                                                    );
                                                                }
                                                            }
                                                        }

                                                        dataCourse
                                                            ? values.hinhAnh?.name
                                                                ? dispatch(updateCourse(formData))
                                                                : dispatch(updateCourseNoImage(values))
                                                            : dispatch(addCourse(formData));
                                                    }
                                                });
                                            }}
                                        >
                                            {({ setFieldValue }) => (
                                                <Form className="mx-1 mx-md-4">
                                                    <div className="row justify-content-around">
                                                        <div className="col-5">
                                                            <label className="form-label ms-5">
                                                                Mã khóa học
                                                            </label>
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fa-solid fa-book fa-lg me-3 fa-fw" />
                                                                <div className="form-outline flex-fill mb-0">
                                                                    <Field
                                                                        type="text"
                                                                        name="maKhoaHoc"
                                                                        className="form-control"
                                                                        placeholder="Nhập khóa học"
                                                                        style={{ fontSize: 15 }}
                                                                        disabled={dataCourse}
                                                                    />
                                                                    <ErrorMessage
                                                                        name="maKhoaHoc"
                                                                        component="div"
                                                                        style={{ color: "red" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-5">
                                                            <label className="form-label ms-5">
                                                                Tên khóa học
                                                            </label>
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fas fa-key fa-lg me-3 fa-fw" />
                                                                <div className="form-outline flex-fill mb-0">
                                                                    <Field
                                                                        type="text"
                                                                        name="tenKhoaHoc"
                                                                        className="form-control"
                                                                        placeholder="Nhập tên khóa học"
                                                                        style={{ fontSize: 15 }}
                                                                    />
                                                                    <ErrorMessage
                                                                        name="tenKhoaHoc"
                                                                        component="div"
                                                                        style={{ color: "red" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-5">
                                                            <label className="form-label ms-5">
                                                                Danh mục khóa học
                                                            </label>
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fa fa-briefcase fa-lg me-3 fa-fw" />
                                                                <div className="form-outline flex-fill mb-0">
                                                                    <Field
                                                                        as="select"
                                                                        className="form-select"
                                                                        name="maDanhMucKhoaHoc"
                                                                        style={{ fontSize: 15 }}
                                                                    >
                                                                        <option
                                                                            value={
                                                                                dataCourse
                                                                                    ? dataCourse.danhMucKhoaHoc
                                                                                        .maDanhMucKhoahoc
                                                                                    : ""
                                                                            }
                                                                        >
                                                                            {dataCourse
                                                                                ? dataCourse.danhMucKhoaHoc
                                                                                    .tenDanhMucKhoaHoc
                                                                                : "Chọn danh mục"}
                                                                        </option>
                                                                        {renderCourseCate()}
                                                                    </Field>
                                                                    <ErrorMessage
                                                                        name="maDanhMucKhoaHoc"
                                                                        component="div"
                                                                        style={{ color: "red" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-5">
                                                            <label className="form-label ms-5">
                                                                Ngày tạo
                                                            </label>
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fa-solid fa-calendar-days fa-lg me-3 fa-fw"></i>
                                                                <div className="form-outline flex-fill mb-0">
                                                                    <Field
                                                                        type="text"
                                                                        name="ngayTao"
                                                                        className="form-control"
                                                                        style={{ fontSize: 15 }}
                                                                    />
                                                                    <ErrorMessage
                                                                        name="ngayTao"
                                                                        component="div"
                                                                        style={{ color: "red" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-5">
                                                            <label className="form-label ms-5">
                                                                Đánh giá
                                                            </label>
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                                <div className="form-outline flex-fill mb-0">
                                                                    <Field
                                                                        type="number"
                                                                        name="danhGia"
                                                                        className="form-control"
                                                                        placeholder="Nhập đánh giá từ 0 đến 5"
                                                                        style={{ fontSize: 15 }}
                                                                    />
                                                                    <ErrorMessage
                                                                        name="danhGia"
                                                                        component="div"
                                                                        style={{ color: "red" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-5">
                                                            <label className="form-label ms-5">
                                                                Lượt xem
                                                            </label>
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fa-solid fa-eye fa-lg me-3 fa-fw" />
                                                                <div className="form-outline flex-fill mb-0">
                                                                    <Field
                                                                        type="number"
                                                                        name="luotXem"
                                                                        className="form-control"
                                                                        placeholder="Nhập lượt xem"
                                                                        style={{ fontSize: 15 }}
                                                                    />
                                                                    <ErrorMessage
                                                                        name="luotXem"
                                                                        component="div"
                                                                        style={{ color: "red" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-5">
                                                            <label className="form-label ms-5">
                                                                Người tạo
                                                            </label>
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fa fa-briefcase fa-lg me-3 fa-fw" />
                                                                <div className="form-outline flex-fill mb-0">
                                                                    <Field
                                                                        as="select"
                                                                        className="form-select"
                                                                        name="taiKhoanNguoiTao"
                                                                        style={{ fontSize: 15 }}
                                                                    >
                                                                        <option
                                                                            value={
                                                                                dataCourse
                                                                                    ? dataCourse.nguoiTao.taiKhoan
                                                                                    : creator.taiKhoan
                                                                            }
                                                                        >
                                                                            {dataCourse
                                                                                ? dataCourse.nguoiTao.hoTen
                                                                                : creator.hoTen}
                                                                        </option>
                                                                    </Field>
                                                                    <ErrorMessage
                                                                        name="taiKhoanNguoiTao"
                                                                        component="div"
                                                                        style={{ color: "red" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-5">
                                                            <label className="form-label ms-5">
                                                                Hình ảnh
                                                            </label>
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fa-solid fa-image fa-lg me-3 fa-fw" />
                                                                <div className="form-outline flex-fill mb-0">
                                                                    <input
                                                                        type="file"
                                                                        name="hinhAnh"
                                                                        accept="image/png, image/jpeg"
                                                                        onChange={(e) => {
                                                                            let file = e.currentTarget.files[0];
                                                                            let reader = new FileReader();
                                                                            if (file) {
                                                                                reader.readAsDataURL(file);
                                                                                reader.onload = (e) => {
                                                                                    setThumb(e.target.result);
                                                                                };
                                                                                setFieldValue("hinhAnh", file);
                                                                            }
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <img
                                                                        className="img-fluid rounded"
                                                                        src={thumb}
                                                                        style={{
                                                                            width: 250,
                                                                            height: 150,
                                                                            objectFit: "cover",
                                                                            objectPosition: "center",
                                                                        }}
                                                                        alt="Hình ảnh"
                                                                    />
                                                                </div>

                                                                <div className="col-8">
                                                                    <Field
                                                                        as="textarea"
                                                                        name="moTa"
                                                                        className="form-control"
                                                                        placeholder="Nhập mô tả"
                                                                        style={{ height: 150 }}
                                                                    />
                                                                    <ErrorMessage
                                                                        name="moTa"
                                                                        component="div"
                                                                        style={{ color: "red" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="modal-footer">
                                                        <button type="submit" className="btn btn-success">
                                                            {dataCourse ? "Cập nhật" : "Thêm"}
                                                        </button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* delete course */}
                        <button
                            className="btn btn-danger"
                            key={2}
                            style={{ cursor: "pointer", margin: "0 10px" }}
                            onClick={() => {
                                Swal.fire({
                                    icon: "question",
                                    title: "Xác nhận",
                                    text: `Bạn có chắc chắn xóa khóa học ${course.tenKhoaHoc}`,
                                    showCancelButton: true,
                                    showConfirmButton: true,
                                    cancelButtonText: "Hủy bỏ",
                                    confirmButtonText: "Xác nhận",
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        dispatch(deleteCourse(course.maKhoaHoc));
                                    }
                                });
                            }}
                        >
                            Xoá
                        </button>

                        {/* <Link
                            to={`/admin/showtime/${course.maPhim}`}
                            key={3}
                            style={{ fontSize: 25 }}
                        >
                            <CalendarOutlined style={{ color: "green" }} />{" "}
                        </Link> */}
                    </>
                );
            },
            width: "20%",
        },
    ];

    return (
        <div>
            <h2 className="text-center">QUẢN LÝ KHOÁ HỌC</h2>
            <button
                type="primary"
                primary
                className="btn btn-primary my-2"
                data-toggle="modal"
                data-target="#staticBackdrop"
                onClick={() => {
                  handleDataCourse(null);
                }}
            >
                Thêm khóa học
            </button>
            <Table
                columns={columns}
                dataSource={data}
                rowKey={"maKhoaHoc"}
                pagination={{ pageSize: 5 }}
            />
        </div>
    );
}
