import { useState, useEffect } from "react";
import "../../assets/styles/input.css";

const Step1 = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    smsCode: "",
    email: "",
    password: "",
  });

  const [smsStatus, setSmsStatus] = useState({
    sent: false,
    loading: false,
    error: "",
    success: "",
  });

  const [timer, setTimer] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const handlePhoneChange = (phoneNumber: string) => {
    setFormData((prev) => ({ ...prev, phoneNumber }));
    if (phoneNumber.length === 13 && phoneNumber.startsWith("+998")) {
      sendSmsCode(phoneNumber);
    }
  };

  const sendSmsCode = async (phoneNumber: string) => {
    setSmsStatus({ sent: false, loading: true, error: "", success: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSmsStatus({
        sent: true,
        loading: false,
        error: "",
        success: `SMS-код отправлен на номер ${phoneNumber}`,
      });

      setTimer(60);
    } catch (error) {
      setSmsStatus({
        sent: false,
        loading: false,
        error: "Ошибка при отправке SMS. Попробуйте еще раз.",
        success: "",
      });
    }
  };

  const handleResendSms = () => {
    if (formData.phoneNumber && timer === 0) {
      sendSmsCode(formData.phoneNumber);
    }
  };

  const handleSmsCodeChange = (smsCode: string) => {
    const cleanCode = smsCode.replace(/\D/g, "").slice(0, 6);
    setFormData((prev) => ({ ...prev, smsCode: cleanCode }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, password: e.target.value }));
  };

  return (
    <div className="w-full">
      <form className="flex flex-col gap-y-[31px] mt-[33px]">
        <div>
          <label className="font-medium text-[16px] text-[#1A1D29] mb-2 block">
            Mobile Number
          </label>
          <input
            type="tel"
            placeholder="+998 (90) 000-00-00"
            value={formData.phoneNumber}
            onChange={(e) => handlePhoneChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F8CFF] focus:border-transparent"
            maxLength={13}
          />
          {smsStatus.loading && (
            <div className="mt-2 text-blue-600 text-sm flex items-center">
              <div className="animate-spin mr-2 w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
              Отправка SMS-кода...
            </div>
          )}
          {smsStatus.success && (
            <div className="mt-2 text-green-600 text-sm flex items-center">
              <span className="mr-2">✅</span>
              {smsStatus.success}
            </div>
          )}
          {smsStatus.error && (
            <div className="mt-2 text-red-600 text-sm flex items-center">
              <span className="mr-2">❌</span>
              {smsStatus.error}
            </div>
          )}
        </div>
        <div>
          <label className="font-medium text-[16px] text-[#1A1D29] mb-2 block">
            Code from SMS
          </label>
          <input
            type="text"
            placeholder="Введите код из SMS"
            value={formData.smsCode}
            onChange={(e) => handleSmsCodeChange(e.target.value)}
            disabled={!smsStatus.sent}
            maxLength={6}
            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F8CFF] focus:border-transparent ${
              !smsStatus.sent ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
          />
          {smsStatus.sent && (
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-gray-500">Не получили код?</span>
              {timer > 0 ? (
                <span className="text-gray-500">
                  Повторная отправка через {timer} сек
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleResendSms}
                  className="text-[#3F8CFF] hover:underline font-medium"
                >
                  Отправить еще раз
                </button>
              )}
            </div>
          )}
        </div>
        <div>
          <label className="font-medium text-[16px] text-[#1A1D29] mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            value={formData.email}
            onChange={handleEmailChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F8CFF] focus:border-transparent"
          />
        </div>
        <div>
          <label className="font-medium text-[16px] text-[#1A1D29] mb-2">
            Create Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={handlePasswordChange}
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
      </form>
    </div>
  );
};

export default Step1;
