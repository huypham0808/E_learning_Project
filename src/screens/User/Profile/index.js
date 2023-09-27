import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { actTryLogout } from "../../../redux/types/actions";
import { getUserDetail } from "../../../redux/types/actions";
import { actUpdateUser } from "../../../redux/types/actions";
import avatar from "../../../assets/img/avarta_elearning.jpg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";

export default function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data } = useSelector((state) => state.UserReducer);

    useEffect(() => {
        dispatch(actTryLogout(navigate));
    }, []);

    useEffect(() => {
        dispatch(getUserDetail());
    }, []);

    if (!localStorage.getItem("user")) {
        return <Navigate replace to="/user/login" />;
    }

    const validationSchema = yup.object().shape({
        taiKhoan: yup
            .string()
            .min(2, "* Tài khoản quá ngắn")
            .max(20, "* Tài khoản không quá 20 ký tự")
            .required("* Tài khoản không được bỏ trống!"),
        matKhau: yup
            .string()
            .required("* Mật khẩu không được bỏ trống!")
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                "* Mật khẩu phải ít nhất 8 tự gồm chữ, số, và kí tự đặc biệt.",
            ),
        hoTen: yup
            .string()
            .required("* Họ tên không được bỏ trống!")
            .matches(
                /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
                "* Chỉ nhập kí tự chữ.",
            ),
        soDT: yup
            .string()
            .required("* Số điện thoại không được bỏ trống!")
            .matches(
                /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
                "* Số điện thoại chưa đúng định đạng.",
            ),
        email: yup
            .string()
            .required("* Email không được bỏ trống!")
            .email("* Email không đúng định dạng."),
    });

    // const renderCourses = () => {
    //     const filteredCourse = data?.chiTietKhoaHocGhiDanh.filter((course) =>
    //         course.tenKhoaHoc.toLowerCase().includes(keyword?.toLowerCase()),
    //     );

    //     return filteredCourse?.map((course, index) => {
    //         return (
    //             <div key={index} className="card mb-3" style={{ border: "none" }}>
    //                 <div className="row g-0">
    //                     <div className="col-md-3">
    //                         <img
    //                             src={course.hinhAnh}
    //                             width="100%"
    //                             height="200px"
    //                             style={{
    //                                 objectFit: "cover",
    //                                 objectPosition: "center center",
    //                             }}
    //                             alt="anh minh hoa"
    //                         />
    //                     </div>
    //                     <div className="col-md-7">
    //                         <div className="card-body">
    //                             <h4 className="card-title">{course.tenKhoaHoc}</h4>
    //                             <p className="card-text">
    //                                 {course.moTa.length > 200
    //                                     ? `${course.moTa.slice(0, 200)}...`
    //                                     : course.moTa}
    //                             </p>
    //                             <Rate allowHalf value={course.danhGia / 2} />
    //                         </div>
    //                     </div>
    //                     <div className="col-md-2 d-flex align-items-center">
    //                         <button
    //                             className="btn btn-danger"
    //                             onClick={() => {
    //                                 Swal.fire({
    //                                     icon: "question",
    //                                     title: "Xác nhận",
    //                                     text: "Bạn có chắc chắn muốn hủy đăng ký",
    //                                     showCancelButton: true,
    //                                     showConfirmButton: true,
    //                                     confirmButtonText: "Đồng ý",
    //                                     cancelButtonText: "Hủy bỏ",
    //                                 }).then((result) => {
    //                                     if (result.isConfirmed) {
    //                                         dispatch(
    //                                             CancelCourse({
    //                                                 maKhoaHoc: course.maKhoaHoc,
    //                                                 taiKhoan: data.taiKhoan,
    //                                             }),
    //                                         );
    //                                     }
    //                                 });
    //                             }}
    //                         >
    //                             Hủy đăng ký
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         );
    //     });
    // };



    return (
        <div className="container py-4 eLearning-profilePage">
            <div className="main-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img
                                        src={avatar}
                                        alt="Admin"
                                        className="rounded-circle p-1 bg-success"
                                        width={110}
                                    />
                                    <div className="mt-3">
                                        <h4>{data?.hoTen}</h4>
                                        <p className="text-secondary mb-1">
                                            {data?.maLoaiNguoiDung === "HV" ? "Học viên" : "Giáo vụ"}
                                        </p>
                                    </div>
                                    <div className="d-flex">
                                        <Link to="/">
                                            <button className="btn btn-success mt-3">
                                                Quay lại trang chủ
                                            </button>
                                        </Link>
                                        {data?.maLoaiNguoiDung === "GV" && (
                                            <Link to="/admin/courses">
                                                <button className="btn btn-info mt-3 ms-1">
                                                    Vào trang quản trị
                                                </button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={{
                                        hoTen: data?.hoTen || "",
                                        taiKhoan: data?.taiKhoan || "",
                                        matKhau: data?.matKhau || "",
                                        soDT: data?.soDT || "",
                                        email: data?.email || "",
                                        maLoaiNguoiDung: data?.maLoaiNguoiDung || "",
                                        maNhom: data?.maNhom || "",
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                        Swal.fire({
                                            icon: "question",
                                            title: "Xác nhận",
                                            text: "Bạn chắc chắn cập nhật thông tin?",
                                            showConfirmButton: true,
                                            showCancelButton: true,
                                            confirmButtonText: "Đồng ý",
                                            cancelButtonText: "Hủy bỏ",
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                dispatch(actUpdateUser(values));
                                            }
                                        });
                                    }}
                                >
                                    {() => (
                                        <Form>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Tài khoản</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Field
                                                        type="text"
                                                        name="taiKhoan"
                                                        className="form-control"                                                   
                                                    />
                                                    <ErrorMessage
                                                        name="taiKhoan"
                                                        component="div"
                                                        style={{ color: "red" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Mật khẩu</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Field
                                                        type="password"
                                                        name="matKhau"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage
                                                        name="matKhau"
                                                        component="div"
                                                        style={{ color: "red" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Họ tên</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Field
                                                        type="text"
                                                        name="hoTen"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage
                                                        name="hoTen"
                                                        component="div"
                                                        style={{ color: "red" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Số điện thoại</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Field
                                                        type="text"
                                                        name="soDT"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage
                                                        name="soDT"
                                                        component="div"
                                                        style={{ color: "red" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Email</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Field
                                                        type="text"
                                                        name="email"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage
                                                        name="email"
                                                        component="div"
                                                        style={{ color: "red" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3" />
                                                <div className="col-sm-9 text-secondary">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success px-4"
                                                    >
                                                        Lưu thay đổi
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
