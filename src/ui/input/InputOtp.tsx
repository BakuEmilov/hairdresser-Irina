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
        <span>От</span>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <span className="font-medium">:</span>
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <span>До</span>
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
        <span className="font-medium">:</span>
        <InputOTPGroup>
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export default InputOtp;
