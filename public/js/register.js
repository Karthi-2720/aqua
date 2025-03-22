function validate() {
    var frm = document.forms["frm"];
    var fn = frm.fname.value;
    localStorage.setItem("firstname", fn);
    
    // Validate first name (only letters)
    if(!/^[a-zA-Z]+$/.test(fn)) {
        alert("Invalid firstname - only letters allowed");
        return false;
    }
    
    var ln = frm.lname.value;
    localStorage.setItem("lastname", ln);
    
    // Validate last name (only letters)
    if(!/^[a-zA-Z]+$/.test(ln)) {
        alert("Invalid lastname - only letters allowed");
        return false;
    }
    
    var phn = frm.phone.value;
    localStorage.setItem("phone", phn);
    
    // Validate phone (exactly 10 digits)
    if(!/^\d{10}$/.test(phn)) {
        alert("Phone number should be exactly 10 digits");
        return false;
    }
    
    var pwd1 = frm.pwd.value;
    localStorage.setItem("password", pwd1);
    
    // Validate password (even number of characters, max 8)
    if(pwd1.length % 2 !== 0) {
        alert("Password should contain an even number of characters");
        return false;
    }
    if(pwd1.length > 8) {
        alert("Password should not exceed 8 characters");
        return false;
    }
    
    // Validate email
    var mail = frm.mailid.value;
    localStorage.setItem("email", mail);
    var reg = /^([a-zA-Z][a-zA-Z0-9\.-]+)@([a-zA-Z-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    
    if(!reg.test(mail)) {
        alert("Invalid email format");
        return false;
    }
    
    // All validations passed
    alert("Registration Successful!!");
    return true;
}

// Add animation to form fields
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
    
    inputs.forEach(function(input, index) {
        setTimeout(function() {
            input.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            input.style.transform = 'translateX(0)';
            input.style.opacity = '1';
        }, 100 * index);
        
        input.style.transform = 'translateX(-20px)';
        input.style.opacity = '0';
    });
});
