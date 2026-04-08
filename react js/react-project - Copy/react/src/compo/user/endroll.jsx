import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import axios from "axios";
import { 
  User, Mail, Phone, BookOpen, MessageSquare, CreditCard, 
  CheckCircle2, ChevronRight, ShieldCheck, Wallet, ArrowLeft,
  Calendar, Landmark, QrCode, LogIn
} from "lucide-react";

function Enroll() {
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [methods, setMethods] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: location.state?.planName || "",
    amount: location.state?.planPrice || "",
    message: "",
    transactionId: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchMethods = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/api/payments");
        // Only show active methods
        setMethods(res.data.filter(m => m.status === "Active"));
      } catch (err) {
        console.error("Failed to fetch payment methods");
      }
    };
    fetchMethods();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const payload = {
        ...formData,
        paymentMethod: selectedMethod?.name,
        paymentStatus: "Pending"
      };

      await axios.post("http://localhost:5000/auth/api/Studentdata", payload);
      setStep(4); // Success step
    } catch (err) {
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const getMethodIcon = (iconName) => {
    switch (iconName) {
      case "Landmark": return <Landmark className="w-5 h-5" />;
      case "QrCode": return <QrCode className="w-5 h-5" />;
      case "Wallet": return <Wallet className="w-5 h-5" />;
      default: return <CreditCard className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-300 font-sans">
      <Navbar />

      <div className="max-w-4xl mx-auto py-20 px-6 relative">
        {/* Progress Stepper */}
        <div className="flex items-center justify-center mb-16 space-x-4">
          {[1, 2, 3].map((i) => (
            <React.Fragment key={i}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-500 ${
                step >= i ? "bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/20" : "bg-slate-900 border-slate-700 text-slate-500"
              }`}>
                {step > i ? <CheckCircle2 className="w-6 h-6" /> : i}
              </div>
              {i < 3 && (
                <div className={`w-16 h-1 transition-all duration-500 rounded-full ${step > i ? "bg-indigo-500" : "bg-slate-800"}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="glass-card shadow-2xl relative overflow-hidden backdrop-blur-2xl border border-white/5 p-12 min-h-[600px] flex flex-col justify-center">
            
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            {step === 1 && (
              <div className="animate-fade-in space-y-8">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-display font-extrabold text-white mb-2 tracking-tight">Personal Details</h2>
                  <p className="text-slate-400 font-medium">Let's get your enrollment started</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-widest flex items-center">
                      <User className="w-3 h-3 mr-2 text-indigo-500" /> Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="enroll-input w-full"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-widest flex items-center">
                      <Mail className="w-3 h-3 mr-2 text-indigo-500" /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="enroll-input w-full"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-widest flex items-center">
                      <Phone className="w-3 h-3 mr-2 text-indigo-500" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 00000 00000"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="enroll-input w-full"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-widest flex items-center">
                      <BookOpen className="w-3 h-3 mr-2 text-indigo-500" /> Selected Plan
                    </label>
                    <input
                      type="text"
                      name="course"
                      readOnly
                      value={formData.course}
                      className="enroll-input w-full bg-slate-900/50 border-slate-800 text-slate-400 cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-8">
                  <button 
                    onClick={nextStep}
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="btn-primary space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>Choose Payment</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-8">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-display font-extrabold text-white mb-2 tracking-tight">Select Payment</h2>
                  <p className="text-slate-400 font-medium">Choose a convenient payment method</p>
                </div>
                <div className="grid gap-4">
                  {methods.map((method) => (
                    <div
                      key={method._id}
                      onClick={() => setSelectedMethod(method)}
                      className={`group p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                        selectedMethod?._id === method._id 
                        ? "border-indigo-500 bg-indigo-500/10 shadow-indigo-500/10 shadow-xl" 
                        : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center space-x-6">
                        <div className={`p-4 rounded-xl ${selectedMethod?._id === method._id ? "bg-indigo-500 shadow-lg shadow-indigo-500/20" : "bg-slate-800 text-slate-400"}`}>
                          {getMethodIcon(method.icon)}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">{method.name}</h4>
                          <p className="text-slate-500 text-sm font-medium">Available now</p>
                        </div>
                      </div>
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedMethod?._id === method._id ? "bg-indigo-500 border-indigo-400 shadow-inner" : "border-slate-800"
                      }`}>
                        {selectedMethod?._id === method._id && <CheckCircle2 className="w-5 h-5 text-white" />}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="btn-secondary space-x-2">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                  </button>
                  <button 
                    onClick={nextStep}
                    disabled={!selectedMethod}
                    className="btn-primary space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>Final Step</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in space-y-8">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-display font-extrabold text-white mb-2 tracking-tight">Complete Payment</h2>
                  <p className="text-slate-400 font-medium italic">Follow the instructions below to finalize enrollment</p>
                </div>
                
                <div className="bg-indigo-500/10 border-2 border-indigo-500/20 p-8 rounded-2xl relative">
                  <div className="absolute top-4 right-4 bg-indigo-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                    Instructions
                  </div>
                  <div className="text-indigo-100 font-bold text-lg whitespace-pre-wrap leading-relaxed">
                    {selectedMethod?.details}
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
                  <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-widest flex items-center mb-4">
                    <ShieldCheck className="w-3 h-3 mr-2 text-indigo-500" /> Transaction ID / Note (Optional)
                  </label>
                  <input
                    type="text"
                    name="transactionId"
                    placeholder="Enter Payment ID for faster verification"
                    value={formData.transactionId}
                    onChange={handleChange}
                    className="enroll-input w-full"
                  />
                  <p className="mt-4 text-xs text-slate-500 italic font-medium leading-loose">
                    Your enrollment will be set to <span className="text-indigo-400 uppercase font-black tracking-tighter">Pending</span>. 
                    The administrator will verify your payment and give response within 24 hours.
                  </p>
                </div>

                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="btn-secondary space-x-2">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                  </button>
                  <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="btn-primary space-x-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Finalizing..." : "Submit Enrollment"}</span>
                    <LogIn className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-in-up text-center py-20">
                <div className="w-32 h-32 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-10 shadow-indigo-500/10 shadow-2xl animate-bounce">
                  <CheckCircle2 className="w-16 h-16 text-indigo-400" />
                </div>
                <h2 className="text-5xl font-display font-extrabold text-white mb-6">Enrollment Successful!</h2>
                <div className="max-w-md mx-auto space-y-6">
                    <p className="text-slate-400 text-lg leading-relaxed font-medium">
                        Thank you, <span className="text-white font-bold">{formData.name}</span>. Your application for the <span className="text-indigo-400 font-bold">{formData.course}</span> has been received.
                    </p>
                    <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
                        <p className="text-sm italic text-slate-500">
                            Our administrators have been notified of your payment. You will receive an update once they give a response after verification.
                        </p>
                    </div>
                    <div className="pt-10">
                        <button onClick={() => navigate("/")} className="btn-secondary">
                        Return to Home
                        </button>
                    </div>
                </div>
              </div>
            )}

        </div>
      </div>

      <Footer />

      {/* Global CSS for checkout inputs */}
      <style>{`
        .enroll-input {
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: white;
          padding: 1rem 1.25rem;
          border-radius: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .enroll-input:focus {
          outline: none;
          background: rgba(15, 23, 42, 0.6);
          border-color: #6366f1;
          box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.4);
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeIn-up 1s ease-out forwards;
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}</style>
    </div>
  );
}

export default Enroll;