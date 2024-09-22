import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpForm = () => {
  const [step, setStep] = useState(1);
  const [aadhar, setAadhar] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();



const handleSendOtp = () => {
    navigate('/register')
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-md p-6 self-center">
        <div className= " self-center bg-white border-t-4 border-indigo-500 shadow-lg p-6 rounded-lg text-center">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-indigo-900">BITS - Verified</h1>
            <p className="text-gray-500" id="description">
              {step === 1 ? 'Enter your details to login' : 'Enter the OTP sent to your phone'}
            </p>
          </div>
          <form onSubmit={handleSendOtp} className="space-y-4 flex flex-col justify-center">
            
              <div id="step1">
                <div className="flex flex-col justify-center items-center">
                  
                  <input
                    type="text"
                    id="aadhar"
                    name="aadhar"
                    placeholder="Enter the username"
                    maxLength="12"
                    value={aadhar}
                    onChange={(e) => setAadhar(e.target.value)}
                    className="p-2 border border-gray-300 rounded mt-1"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter password"
                    maxLength="10"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="p-2 border border-gray-300 rounded mt-1"
                    required
                  />
                </div>
              </div>
            
            
            <button
              type="submit"
              id="submitBtn"
              className="w-full py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300"
            >
              Verify and Login
            </button>
          </form>


          <div className="mt-4 text-gray-500 text-xs">
            <p>Secure blockchain-powered verification for luxury goods and personnel</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OtpForm;
