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
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <span className="text-[14px] font-medium">От</span>
            <InputOTPGroup className="w-[53px] lg:w-full ">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <span className="font-medium">:</span>
            <InputOTPGroup className="w-[53px] lg:w-full ">
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </div>
          <InputOTPSeparator />
          <div className="flex items-center space-x-2 lg:mt-0">
            <span className="text-[14px] font-medium">До</span>
            <InputOTPGroup className="w-[53px] lg:w-full">
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
            <span className="font-medium">:</span>
            <InputOTPGroup className="w-[53px] lg:w-full">
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
