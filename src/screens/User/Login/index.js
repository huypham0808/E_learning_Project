import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { actLogin } from '../../../redux/types/actions';
import imgLogin from '../../../assets/img/homeschooling-6204112_640.png';
import { Link } from 'react-router-dom/dist';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const LoginShema = yup.object().shape({
        taiKhoan: yup
            .string()
            .required("* Tài khoản không được để trống!"),
        matKhau: yup
            .string()
            .required("* Mật khẩu không được để trống!"),
    });
    if (localStorage.getItem("user")) {
        return <Navigate replace to="/user/profile" />
    }
    return (
        <section className='elearning-Login_Page'>
            <div className='container py-5'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col col-xl-10'>
                        <div className='card p-3' style={{border:"none"}}>
                            <div className='row g-0 align-items-center'>
                                <div className='col-md-6 col-lg-5 d-none d-md-block'>
                                    <img src={imgLogin}
                                        alt='Image_Login'
                                        className='img-fluid'
                                        style={{                                           
                                            height: "70%",
                                            objectFit: "cover",
                                        }}>
                                    </img>
                                </div>
                                <div className='col-md-6 col-lg-7 d-flex align-items-center'>
                                    <div className='card-body p-4 p-lg-5 text-black'>
                                        <Formik
                                            initialValues={{
                                                taiKhoan: "",
                                                matKhau: "",
                                            }}
                                            validationSchema={LoginShema}
                                            onSubmit={(values) => {
                                                dispatch(actLogin(values, navigate));
                                            }}
                                        >
                                            {() => (
                                                <Form>
                                                    <h4 className='fw-normal mb-3 pb-3'
                                                        style={{ letterSpacing: 1 }}
                                                    >Đăng nhập vào tài khoản của bạn</h4>
                                                    <div className='form-outline mb-4'>
                                                        <Field
                                                            type="text"
                                                            name="taiKhoan"
                                                            className="form-control form-control-lg"
                                                            style={{ fontSize: 16 }}
                                                            placeholder="Nhập tài khoản của bạn"
                                                        />
                                                        <ErrorMessage
                                                            component="div"
                                                            name='taiKhoan'
                                                            style={{ color: "red" }} />
                                                    </div>
                                                    <div className='form-outline mb-4'>
                                                        <Field
                                                            type="password"
                                                            name="matKhau"
                                                            className="form-control form-control-lg"
                                                            style={{ fontSize: 16 }}
                                                            placeholder="Mật khẩu"
                                                        />
                                                        <ErrorMessage
                                                            component="div"
                                                            name='matKhau'
                                                            style={{ color: "red" }} />
                                                    </div>
                                                    <div className='pt-1 mb-4'>
                                                        <button className='btn btn-dark btn-lg'
                                                            style={{ width: "100%" }}
                                                            type='submit'>
                                                            Đăng nhập
                                                        </button>
                                                    </div>
                                                    <div className='text-center'>
                                                        <a className='small text-muted' href='#!'>
                                                            Hoặc quên mật khẩu
                                                        </a>
                                                    </div>
                                                    <p className='my-4 pb-lg-2 text-center'>
                                                        Chưa có tài khoản ?{" "}
                                                        <Link to="/user/register"
                                                            style={{ color: "#393f81" }}>
                                                                <span className='text-danger'>Đăng ký</span>
                                                        </Link>
                                                        {" - "}
                                                        <Link to="/">Trang chủ</Link>
                                                    </p>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
