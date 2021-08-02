import React, {useState} from 'react';
import '../css/verify.css'



function VerifyEmail(){

    const [otp, setOtp] = useState('');

    const chane = (e) =>{

         setOtp( e.target.value + " ");
    }

    return (
        <div>
            <div className='my-2 mx-2'>
            <i className="fas fa-comment-alt fa-3x"></i>
            </div>
                <section className='section'>
                    <div className='container p-2'>
                        <div className='card '>
                            <div className='card-header p-2'>
                                <span className=' is-size-4 otp'>OTP Verification</span>
                             </div>
                             <div className='card-body py-5 my-5'>
                                    <p className='inst'>Enter 6 digit code sent to </p>
                                    <p className='instr'>your mail </p>
                                    <div className='py-3'>
                                        <form className='p-4'>
                                                    <div>
                                                    <input type='text' name='otp' onChange={chane} value={otp} className='dot form-control' maxlength='29' placeholder='  &#x2022;   &#x2022;   &#x2022;   &#x2022;   &#x2022;   &#x2022;   &#x2022;   &#x2022;'  />
                                                 </div>
                                                 <div className='row'>
                                                 <input type='submit' className='btn btn-dark btn-lg col-10 my-4 ' />
                                                 </div>
                                        </form>
                                     </div>
                                  </div>
                             </div>
                    </div>
                </section>

        </div>
    )
}





export default VerifyEmail;
