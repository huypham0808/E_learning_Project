import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { actRegister } from '../../../redux/types/actions';
import { useDispatch } from 'react-redux';

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isCheck, setIsCheck] = useState(false);

    if (localStorage.getItem("user")) {
        return <Navigate replace to="/user/profile" />;
    };
    const handleCheck = () => {
        setIsCheck(!isCheck);
    };
    const RegisterSchema = yup.object().shape({
        taiKhoan: yup
            .string()
            .min(2, "* Tên tài khoản quá ngắn")
            .max(20, "* Tên tài khoản không quá 20 ký tự")
            .required("* Tài khoản không được để trống"),
        matKhau: yup
            .string()
            .required("* Mật khẩu không được để trống")
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                "* Mật khẩu phải ít nhất 8 ký tự gồm chữ, số, và kí tự đặc biệt",
            ),
        hoTen: yup
            .string()
            .required("* Họ tên không được để trống!")
            .matches(
                /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
                "* Chỉ nhập kí tự chữ.",
            ),
        soDT: yup
            .string()
            .required("* Số điện thoại không được để trống!")
            .matches(
                /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
                "* Số điện thoại chưa đúng.",
            ),
        email: yup
            .string()
            .required("* Email không được để trống")
            .email("* Email chưa đúng định dạng."),
    })

    return (
        <div className='w-25 mx-auto eLearning-RegisterForm'>
            <h3 className='mb-3'>Đăng ký và bắt đầu học</h3>
            <Formik initialValues={{
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                maNhom: "GP09",
                email: "",
            }} validationSchema={RegisterSchema}
                onSubmit={(values) => {
                    dispatch(actRegister(values, navigate));
                }}>
                {() => (
                    <Form>
                        <div className="form-group">
                            <Field type="text" className="form-control border-dark" name="hoTen" placeholder="Tên đầy đủ" style={{ fontSize: 18 }} />
                            <ErrorMessage name='hoTen' component="div" style={{ color: "red" }} />
                        </div>
                        <div className="form-group">
                            <Field type="text" className="form-control border-dark" name="taiKhoan" placeholder="Nhập tên tài khoản" style={{ fontSize: 18 }} />
                            <ErrorMessage name='taiKhoan' component="div" style={{ color: "red" }} />
                        </div>
                        <div className="form-group">
                            <Field type="password" className="form-control border-dark" name="matKhau" placeholder="Nhập mật khẩu" style={{ fontSize: 18 }} />
                            <ErrorMessage name='matKhau' component="div" style={{ color: "red" }} />
                        </div>
                        <div className="form-group">
                            <Field type="text" className="form-control border-dark" name="soDT" placeholder="Nhập số điện thoại" style={{ fontSize: 18 }} />
                            <ErrorMessage name='soDT' component="div" style={{ color: "red" }} />
                        </div>
                        <div className="form-group">
                            <Field type="email" className="form-control border-dark" name="email" placeholder="Nhập Email" style={{ fontSize: 18 }} />
                            <ErrorMessage name='email' component="div" style={{ color: "red" }} />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Gửi cho tôi các ưu đãi đặc biệt, đề xuất cá nhân hóa và bí quyết học tập</label>
                        </div>
                        <button style={{ height: "40px", fontWeight: "500", fontSize: "18px" }} type="submit" className="btn btn-success w-100 mt-3">Đăng ký</button>
                        <small id="emailHelp" class="form-text text-muted text-center">Bằng việc đăng ký, bạn đồng ý với Điều khoản sử Chính sách về quyền riêng tư.</small>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
