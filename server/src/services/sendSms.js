const sendSMS=async(phone, code) =>{ 
    console.log(`SMS send to ${phone} code : ${code}`)
    return true
}

module.exports = sendSMS