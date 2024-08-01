
const ContactUs = () => {
  return (
    <div className="flex flex-col gap-10">
        <div className="flex gap-8">
        <img
        src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/Contact/AddressIcon.svg"
        alt=""
      />
            <div>
                <h1 className="font-Poppins font-medium text-2xl text-black">Address</h1>
                <p className="font-Poppins font-normal text-base text-black">236 5th SE Avenue, New<br/> York NY10000, United<br/> States</p>
            </div>
        </div>
        <div className="flex gap-8">
        <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/Contact/PhoneIcon.svg" alt="" />
            <div>
                <h1 className="font-Poppins font-medium text-2xl text-black">Phone</h1>
                <p className="font-Poppins font-normal text-base text-black">Mobile: +(84) 546-6789 <br/> Hotline: +(84) 456-6789</p>
            </div>
        </div>
        <div className="flex gap-8">
        <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/Contact/WorskinTime.svg" alt="" />
            <div>
                <h1 className="font-Poppins font-medium text-2xl text-black">Working Time</h1>
                <p className="font-Poppins font-normal text-base text-black">Monday-Friday: 9:00 - 22:00 <br/>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
