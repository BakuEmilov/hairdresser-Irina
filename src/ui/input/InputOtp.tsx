import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const InputOtp = () => {
  return (
    <div>
      <InputOTP maxLength={8}>
        <div className="flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
          <div className="flex items-center space-x-2">
            <span className="text-[14px] font-medium">От</span>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <span className="font-medium">:</span>
            <InputOTPGroup>
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </div>
          <InputOTPSeparator className="hidden lg:block" />
          <div className="flex items-center space-x-2 lg:mt-0">
            <span className="text-[14px] font-medium">До</span>
            <InputOTPGroup>
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
            <span className="font-medium">:</span>
            <InputOTPGroup>
              <InputOTPSlot index={6} />
              <InputOTPSlot index={7} />
            </InputOTPGroup>
          </div>
        </div>
      </InputOTP>
    </div>
  );
};

export default InputOtp;
