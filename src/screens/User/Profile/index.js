import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import avarta from '../../../assets/img/avarta_elearning.jpg'
import { Formik, ErrorMessage, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate} from 'react-router-dom';
import { actTryLogout, getUserDetail, actUpdateUser } from '../../../redux/types/actions';
import * as yup from "yup";
import Swal from 'sweetalert2';
import CancelCourseReducer from '../../../redux/reducers/CancelCourseReducer';
import { useNavigate } from 'react-router-dom';


export default function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data } = useSelector((state) => state.UserReducer);
    const [keyword, setKeyWord] = useState("");
    useEffect(() => {
        dispatch(actTryLogout(navigate));
    })
    useEffect(() => {
        dispatch(getUserDetail());
    }, []);
    if (!localStorage.getItem("user")) {
        return <Navigate replace to="/user/login" />
    }

    const validationSchema = yup.object().shape({
        taiKhoan: yup
            .string()
            .min(2, "* Tên tài khoản quá ngắn")
            .max(20, "* Tên tài khoản không quá 20 ký tự")
            .required("* Tên tài khoản không được để trống!"),
        matKhau: yup
            .string()
            .required("* Mật khẩu không được để trống!")
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                "* Mật khẩu phải ít nhất 8 ký tự gồm chữ, số, và kí tự đặc biệt.",
            ),
        hoTen: yup
            .string()
            .required("* Họ và tên không được để trống!")
            .matches(
                /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
                "* Chỉ nhập kí tự chữ",
            ),
        soDT: yup
            .string()
            .required("* Số điện thoại không được để trống!")
            .matches(
                /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
                "* Số điện thoại chưa đúng!",
            ),
        email: yup
            .string()
            .required("* Email không được để trống")
            .email("* Email chưa đúng!"),

    });
    const renderCourse = () => {
        const filterCourse = data?.chiTietKhoaHocGhiDanh.filter((course) =>
            course.tenKhoaHoc.toLowerCase().includes(keyword?.toLowerCase())
        );
        return filterCourse?.map((course, index) => {
            return (
                <div key={index} className='card mb-3' style={{ border: "none" }}>
                    <div className='row g-0'>
                        <div className='col-md-3'>
                            <img src={course.hinhAnh} alt='hinhKhoaHoc' width="100%" height="200px"
                                style={{ objectFit: "cover", objectPosition: "center center" }}></img>
                        </div>
                        <div className='col-md-7'>
                            <div className='card-body'>
                                <h4 className='card-title'>{course.tenKhoaHoc}</h4>
                                <p className='card-text'>
                                    {course.moTa.length > 200 ? `${course.moTa.slice(0, 200)}...` : course.moTa}
                                </p>
                            </div>
                        </div>
                        <div className='col-md-2 d-flex align-items-center'>
                            <button className='btn btn-danger' onClick={() => {
                                Swal.fire({
                                    icon: "question",
                                    title: "Xác nhận",
                                    text: "Bạn muốn hủy đăng ký khóa học này",
                                    showCancelButton: true,
                                    showConfirmButton: true,
                                    confirmButtonText: "Đồng ý",
                                    cancelButtonText: "Hủy bỏ",
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        dispatch(CancelCourseReducer({
                                            maKhoaHoc: course.maKhoaHoc,
                                            taiKhoan: data.taiKhoan,
                                        }))
                                    }
                                })
                            }}>Hủy đăng ký</button>
                        </div>
                    </div>
                </div>
            );
        });
    };
    const handleSearchCourse = (e) => {
        setKeyWord(e.target.value);
    }

    return (
        <section className='eLearning-profilePage'>
            <div className='container'>
                <Tabs
                    defaultActiveKey={1}
                    id="justify-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey={1} title="Thông tin cơ bản">
                        <div className='container py-4'>
                            <div className='main-body'>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <div className='d-flex flex-column align-items-center text-center'>
                                                    <img src={avarta} alt='Avatar' className='rounded-circle p-1 bg-success' width={110}></img>
                                                    <div className='mt-3'>
                                                        <h4>{data?.hoTen}</h4>
                                                        <p className='text-secondary mb-1'>
                                                            {data?.maLoaiNguoiDung === "HV" ? "Học viên" : "Giáo viên"}
                                                        </p>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <Link>
                                                            <button className='btn btn-success mt-3'>
                                                                Quay lại trang chủ
                                                            </button>
                                                        </Link>
                                                        {data?.maLoaiNguoiDung === "GV" && (
                                                            <Link to="/admin/courses">
                                                                <button className='btn btn-info mt-3 ms-1'>
                                                                    Vào trang quản trị
                                                                </button>
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-8'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <Formik
                                                    enableReinitialize ={true}
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
                                                            text: "Bạn muốn cập nhật thông tin ?",
                                                            showConfirmButton: true,
                                                            showCancelButton: true,
                                                            confirmButtonText: "Đồng ý",
                                                            cancelButtonText: "Hủy bỏ",
                                                        }).then((result) => {
                                                            if (result.isConfirmed) {
                                                                dispatch(actUpdateUser(values));
                                                            }
                                                        });
                                                    }}>
                                                    {() => (
                                                        <Form>
                                                            <div className='row mb-3'>
                                                                <div className='col-sm-3'>
                                                                    <h6>Tài khoản</h6>
                                                                </div>
                                                                <div className='col-sm-9 text-secondary'>
                                                                    <Field type="text"
                                                                        name="taiKhoan"
                                                                        className="form-control"
                                                                        disabled />
                                                                    <ErrorMessage name='taiKhoan'
                                                                        component="div"
                                                                        style={{ color: "red" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='row mb-3'>
                                                                <div className='col-sm-3'>
                                                                    <h6>Mật khẩu</h6>
                                                                </div>
                                                                <div className='col-sm-9 text-secondary'>
                                                                    <Field type="password"
                                                                        name="matKhau"
                                                                        className="form-control"
                                                                        disabled />
                                                                    <ErrorMessage name='matKhau'
                                                                        component="div"
                                                                        style={{ color: "red" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='row mb-3'>
                                                                <div className='col-sm-3'>
                                                                    <h6>Họ tên</h6>
                                                                </div>
                                                                <div className='col-sm-9 text-secondary'>
                                                                    <Field type="text"
                                                                        name="hoTen"
                                                                        className="form-control"
                                                                        disabled />
                                                                    <ErrorMessage name='hoTen'
                                                                        component="div"
                                                                        style={{ color: "red" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='row mb-3'>
                                                                <div className='col-sm-3'>
                                                                    <h6>Số điện thoại</h6>
                                                                </div>
                                                                <div className='col-sm-9 text-secondary'>
                                                                    <Field type="text"
                                                                        name="soDT"
                                                                        className="form-control"
                                                                        disabled />
                                                                    <ErrorMessage name='soDT'
                                                                        component="div"
                                                                        style={{ color: "red" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='row mb-3'>
                                                                <div className='col-sm-3'>
                                                                    <h6>Email</h6>
                                                                </div>
                                                                <div className='col-sm-9 text-secondary'>
                                                                    <Field type="text"
                                                                        name="email"
                                                                        className="form-control"
                                                                        disabled />
                                                                    <ErrorMessage name='email'
                                                                        component="div"
                                                                        style={{ color: "red" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-sm-3'></div>
                                                                <div className='col-sm-9 text-secondary'>
                                                                    <button className='btn btn-success px-3' type='submit'>
                                                                        Lưu thông tin
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
                    </Tab>
                    <Tab eventKey={2} title="Khóa học">
                        Tab content for Profile
                    </Tab>
                    <Tab eventKey={3} title="Kỹ năng">
                        Tab content for Loooonger Tab
                    </Tab>

                </Tabs>
            </div>
        </section>
    )
};
