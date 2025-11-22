import React from 'react'
import './Contact.css'
import msg_icon from'../../assets/msg-icon.png'
import mail_icon from'../../assets/mail-icon.png'
import phone_icon from'../../assets/phone-icon.png'
import location_icon from'../../assets/location-icon.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "56ff8543-b49a-4870-a46f-fa246d75f441");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      


  setTimeout(() => {
    setResult("");  // the  message  will disappear
  }, 2000);


    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div className='contact'>
        <div className="contact-col">
<h3> send us a message  <img src={msg_icon} alt="" /></h3>
<p>Feel free to reach to us through our contact form or find our contact information below .</p>
     <ul>
      <li> <img src={mail_icon} alt="..." />chidoziev742@gmail.com</li>
          <li> <img src={phone_icon} alt="" />+1234 98643234</li>
      <li> <img src={location_icon} alt="" />76 orji owerri <br /> Imo state Nigeria</li>

     </ul>

        </div>
        <div className="contact-col">
<form  onSubmit={onSubmit}>
<label>Your name </label>
<input type="text" name='name' placeholder='enter your name' required/>
<label > Phone Number</label>
<input type="tel" name='phone'  placeholder='enter your mobile number ' required/>
<label> Write your message here </label>
<textarea name="message"  rows="6" placeholder='enter your message ' required></textarea>
<button type='submit' className='btn dark-btn'>sumbit now💬 </button>
</form>
<span>{result}</span>
        </div>
    </div>
  )
}

export default Contact