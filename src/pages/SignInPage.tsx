import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Illustration from "../assets/icons/Illustration2.svg";
import "../assets/styles/sign-in.css";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";

const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (!formData.email || !formData.password) {
        throw new Error("Пожалуйста, заполните все поля");
      }
      
      setTimeout(() => {
        setIsLoading(false);
        const accountExists = true; 
        
        if (!accountExists) {
          setError("Аккаунт не найден, пожалуйста зарегистрируйтесь");
          return;
        }
        
        console.log("Данные для входа:", formData);
        
        if (formData.rememberMe) {
          localStorage.setItem('rememberUser', 'true');
        }
        localStorage.setItem('isAuthenticated', 'true');
        navigate("/dashboard");
      }, 1500);

    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <section className="h-screen p-[20px_35px_30px_35px] bg-[#F4F9FD]">
      <div className="flex rounded-[24px] overflow-hidden h-full">
        <div className="bg-[#3F8CFF] w-[100%] max-w-[50%] pl-[84px]">
          <div className="flex flex-col h-full justify-around items-start">
            <div className="flex items-center mt-4 text-white gap-x-8">
              <Icon.companyLogo />
              <span className="brand-title">Woorkroom</span>
            </div>
            <p className="description text-white text-[40px] max-w-[400px]">
                 Your place to work Plan. Create. Control.
            </p>
            <img
              width={700}
              height={350}
              src={Illustration}
              alt="Illustration"
            />
          </div>
        </div>
        <div className="w-[100%] max-w-[50%] bg-white shadow-[0px_6px_rgba(196_203_214_0.5)]">
          <div className="flex flex-col max-w-[403px] mx-auto items-center pt-[115px]">
            <h2 className="signin-title">Sign In to Woorkroom</h2>
            {error && (
              <div className="w-full mt-4 p-4 bg-red-50 border-l-4 border-red-400 text-red-700 rounded-r">
                <div className="flex items-center">
                  <span className="text-red-400 mr-2">⚠️</span>
                  <p className="font-medium">{error}</p>
                </div>
                {error.includes("зарегистрируйтесь") && (
                  <button
                    type="button"
                    onClick={() => navigate("/sign-up")}
                    className="mt-2 text-[#3F8CFF] font-medium hover:underline text-sm"
                  >
                    Перейти к регистрации →
                  </button>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-[31px] mt-[33px]">
              <div className="flex flex-col">
                <label className="font-medium text-[16px] text-[#1A1D29] mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F8CFF] focus:border-transparent"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-[16px] text-[#1A1D29] mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F8CFF] focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-x-2">
                  <input 
                    id="save-me" 
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="save-me"
                    className="font-medium text-[16px] text-[rgb(125_133_146)]"
                  >
                    Remember me
                  </label>
                </div>
                <span 
                  className="font-medium text-[16px] text-[rgb(125_133_146)] cursor-pointer hover:text-[#3F8CFF]"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password?
                </span>
              </div>
              <div className="flex flex-col items-center gap-y-[20px]">
                <button 
                  type="submit"
                  className="bg-[#3F8CFF] text-white px-8 py-3 rounded-lg font-medium text-[16px] flex items-center gap-x-2 hover:bg-[#2b7ae4] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                  <Icon.rightArrowIcon />
                </button>
                <span 
                  className="font-semibold text-[16px] text-[#3F8CFF] cursor-pointer hover:underline transition-all duration-200"
                  onClick={() => navigate("/sign-up")}
                >
                  Don't have an account? <span className="underline">Sign Up</span>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;