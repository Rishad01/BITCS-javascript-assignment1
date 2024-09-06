const submitted=()=>{
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const sex=document.getElementById('sex').value;
    const role = document.querySelector('input[name="role"]:checked');
    const permissions = document.querySelectorAll('input[name="permissions"]:checked');

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const sexError = document.getElementById("sex-error");
    const roleError = document.getElementById("role-error");
    const permissionError = document.getElementById("permission-error");
    //console.log(permissions);

    let total_permissions=Array.from(permissions).map(permission=>permission.value);
    const emailPattern = /^[a-zA-Z0-9._]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if(!email)
    {
        emailError.innerHTML="enter email id";
        return;
    }
    else if(!emailPattern.test(email))
    {
        emailError.innerHTML="enter valid email id";
        return;
    }
    else{
        emailError.innerHTML="";
    }

    if(!password)
        {
            passwordError.innerHTML="enter password";
            return;
        }
        else if(!passwordPattern.test(password)){
            passwordError.innerHTML="password should be min 6 character with MIX of Uppercase, lowercase, digits";
            return;
        }
        else{
            passwordError.innerHTML="";
        }

    if(!sex)
    {
        sexError.innerHTML="choose your gender";
        return;
    }
    else{
        sexError.innerHTML="";
    }

    if(!role)
    {
        roleError.innerHTML="select your role";
        return;
    }
    else{
        roleError.innerHTML="";
    }

    if(total_permissions.length<2)
    {
        permissionError.innerHTML="select atleast 2 permissions";
        return;
    }
    else{
        permissionError.innerHTML="";
    }

    const data={
        email:email,
        password:password,
        sex:sex,
        role:role.value,
        permissions:total_permissions
    }
   displayData(data);
}

const displayData=(data)=>{
    let formElement=document.getElementById('form');
    let displayElement=document.getElementById('form_data');
    formElement.style.display="none";
    displayElement.style.display="block";
    

    const formData=
    `
    <div class="main-data">
        <div class="input_values">
        <h3>Form Data</h3>
            <ul>
                <li><h5>Email:</h5> ${data.email}</li>
                <li><h5>Password:</h5> ${data.password}</li>
                <li><h5>Sex:</h5> ${data.sex}</li>
                <li><h5>Role:</h5> ${data.role}</li>
                <li><h5>Permissions:</h5> ${data.permissions.join(', ')}</li>
            </ul>
        </div>
    </div>
    `;

    displayElement.innerHTML=formData;
}