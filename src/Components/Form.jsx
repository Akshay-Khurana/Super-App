import { useState, useEffect } from "react";

const Form = () =>{

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const initialFormData = {
        name:"",
        userName : "",
        email:"",
        mobile: 0,
        checkbox : "",
    }


    const [formData,setFormData] = useState(initialFormData)

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const validateEmail = (email) =>{
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        return regex.test(email);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            localStorage.setItem(Date.now().toString(), JSON.stringify(formData));
            console.log('Form data saved to local storage.');
            setErrors({});
          } else {
            console.log('Form data has validation errors. Cannot save to local storage.');
            setErrors(formErrors);
          }        
    }

    const validateForm = () =>{
        const formErrors = {}
        if (!formData.name){
            formErrors.name = `Field is required`;
        }
        if (!formData.userName){
            formErrors.userName = `Field is required`;
        }
        if (!formData.email){
            formErrors.email = `Field is required`;
        }
        if (!formData.mobile){
            formErrors.mobile= `Field is required`;
        }
        if (!validateEmail(formData.email)){
            formErrors.email = `Email is invalid`;
        }
        if (formData.mobile.toString().length!=10 || (typeof formData.mobile  === "number")){
            formErrors.mobile = `Invalid Mobile Number`;
        }
        if (!isChecked){
            formErrors.check = 'Check this box if you want to proceed';
        }
        console.log(formErrors);
        return formErrors;
    }


    return (
        <div className="container">
            <h1>Super app</h1>
            <p> Create your new account</p>
            <form action = " " className="form-class">
                <input onChange = {handleChange} type = "text" name = "name" placeholder = "Name" className={`${errors.name ? 'input-border':'' }`}/>
                {errors.name && <p className="danger">{errors.name}</p>}
                <input onChange = {handleChange} type = "text" name = "userName" placeholder = "UserName" className={`${errors.userName ? 'input-border':'' }`}/>
                {errors.userName && <p className="danger">{errors.userName}</p>}
                <input onChange = {handleChange} type = "text" name = "email" placeholder = "Email" className={`${errors.email ? 'input-border':'' }`}/> 
                {errors.email && <p className="danger">{errors.email}</p>}
                <input onChange = {handleChange} type = "text" name = "mobile" placeholder = "Mobile" className={`${errors.mobile ? 'input-border':'' }`}/>
                {errors.mobile && <p className="danger">{errors.mobile}</p>}
                <div className="checkbox-container">
                    <input type = "checkbox" name = "checkbox" className="checkbox" onChange={handleCheckboxChange}/> 
                    <p>Share my registration data with Superapp</p>
                </div>
                {errors.check && <p className="danger checkbox-para">{errors.check}</p>}
                <button type="submit" onClick={handleSubmit}  className="confirmBtn">
                    SignUp
                </button>
                <p>By clicking on Sign up. you agree to Superapp <span className="green-color">Terms and Conditions of Use </span></p>
                <p> To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className="green-color">Privacy Policy</span></p>
            </form>

        </div>
    )
}

export default Form;