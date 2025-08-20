import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "../components/steps/Step1";
import Step2 from "../components/steps/Step2";
import Step3 from "../components/steps/Step3";
import Step4 from "../components/steps/Step4";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import ProgressStep from "../components/ui/progress-step";
import useStepProgressAuth from "../hooks/useStepProgressAuth";

const SignUpPage = () => {
  const navigate = useNavigate();
  const totalStep = 4;
  const [currentStep, setCurrentStep] = useState(1);
  const [nextStep, setNextStep] = useState<boolean>(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { progressData, setProgressData } = useStepProgressAuth();

  const handleSavePreviusStep = () => {
    const findStep = progressData.find((step) => step.step === currentStep - 1);
    findStep.isSuccess = true;
    setProgressData([...progressData]);
  };

  const incrementCurrentStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prevState) => prevState + 1);
    } else if (currentStep === 4) {
      handleCompleteRegistration();
    }
  };

  const decrementCurrentStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevState) => prevState - 1);
    }
  };

  const handleCompleteRegistration = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (currentStep !== 1) {
      handleSavePreviusStep();
    }
  }, [currentStep]);

  const getCurrentStep = () => {
    switch (currentStep) {
      case 1: {
        return <Step1 />;
      }
      case 2: {
        return <Step2 />;
      }
      case 3: {
        return <Step3 />;
      }
      case 4: {
        return <Step4 />;
      }
    }
  };

  const getButtonText = () => {
    if (isLoading) return "Completing Registration...";
    if (currentStep === 4) return "Complete Registration";
    return "Next Step";
  };

  return (
    <section className="min-h-screen p-4 sm:p-5 lg:p-[20px_35px_30px_35px] bg-[#F4F9FD]">
      <div className="flex flex-col lg:flex-row h-full lg:h-screen gap-4 sm:gap-6 lg:gap-8">
        <div className="bg-[#3F8CFF] w-full lg:w-[100%] pt-8 sm:pt-12 lg:pt-[60px] rounded-[24px] lg:max-w-[25%] px-6 sm:px-8 lg:pl-[40px] lg:pr-4 min-h-[200px] lg:min-h-0">
          <div className="flex flex-col gap-y-6 sm:gap-y-8 lg:gap-y-14 h-full items-start">
            <div className="mt-2 lg:mt-4 text-white">
              <Icon.companyLogo />
            </div>
            <p className="description text-white text-2xl sm:text-3xl lg:text-[40px] max-w-[400px] leading-tight">
              Get started
            </p>
            <div className="hidden lg:block">
              <ProgressStep steps={progressData} currentStep={currentStep} />
            </div>
            <div className="lg:hidden w-full">
              <ProgressStep steps={progressData} currentStep={currentStep} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[100%] flex flex-col justify-between lg:max-w-[70%] rounded-[24px] bg-white shadow-[0px_6px_rgba(196_203_214_0.5)] min-h-[500px] lg:min-h-0">
          <div className="flex flex-col max-w-[403px] w-full mx-auto items-center pt-8 sm:pt-12 lg:pt-[55px] px-4 sm:px-6 lg:px-0">
            <span className="font-bold text-[14px] text-[#3F8CFF]">
              Step {currentStep}/{totalStep}
            </span>
            <h2 className="signin-title text-center text-xl sm:text-2xl lg:text-3xl font-bold mt-2 sm:mt-4">
              {progressData[currentStep - 1].title}
            </h2>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="flex w-full flex-col gap-y-[15px] mt-6 sm:mt-8 lg:mt-[33px]"
            >
              {getCurrentStep()}
            </form>
          </div>
          <div className="border-t-2 border-[#E4E6EF] pt-4 sm:pt-[18px] mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-0 px-4 sm:px-6 lg:px-0 pb-4 sm:pb-0">
            {currentStep > 1 && (
              <button
                onClick={decrementCurrentStep}
                className="flex items-center gap-[5px] border-none text-[#3F8CFF] sm:ml-[56px] order-2 sm:order-1"
              >
                <Icon.previusIcon />
                Previous
              </button>
            )}
            <Button
              variant="small"
              disabled={nextStep || isLoading}
              onClick={incrementCurrentStep}
              className={`flex sm:ml-auto sm:mr-10 items-center gap-x-3 order-1 sm:order-2 w-full sm:w-auto justify-center sm:justify-start ${
                !nextStep && !isLoading ? "" : "disabled"
              }`}
            >
              <span className="text-sm sm:text-base">{getButtonText()}</span>
              {!isLoading && <Icon.rightArrowIcon />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
