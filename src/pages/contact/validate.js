const validate = (name, email, message) => {

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(email);
    }

    if(!name || !email || !message)
    return 'لطفا فیلد هارا پر کنید'

    if(!validateEmail(email))
    return 'ایمیل نامعتبر است'

    if(message.length < 20)
    return 'متن ارسالی شما باید بیش از 20 کاراکتر باشد'

}

export default validate