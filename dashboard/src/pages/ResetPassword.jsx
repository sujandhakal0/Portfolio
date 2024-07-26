 import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import SpecialLoadingButton from "./sub-components/SpecialLoadingButton";
import { clearAllResetPasswordErrors, resetPassword } from "@/store/slices/resetPasswordSlice";
import { getUser } from "@/store/slices/userSlice";

const ResetPassword = () => {
  const {token} = useParams()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  const { loading, error, message } = useSelector(
    (state) => state.resetPassword
  );
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleResetPassword = ()=>{
    dispatch(resetPassword(token, password, confirmPassword))
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllResetPasswordErrors());
    }
    if (isAuthenticated) {
      navigate("/");
    }
    if (message !== null) {
      toast.success(message);
      dispatch(getUser())
    }
  }, [dispatch, isAuthenticated, error, loading]);
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[100vh] lg:grid-cols-2 xl:min-h-[100vh]">
        <div className="flex items-center justify-center py-12 min-h-[100vh]">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Reset Password</h1>
              <p className="text-balance text-muted-foreground">
              Set a new password to access your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label >New Password</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label>Confirm Password</Label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Link
                    to="/login"
                    className="ml-auto inline-block text-sm underline "
                  >
                    Remember your password? Go back to the login page
                  </Link>
                </div>
              </div>
              {loading ? (
                <SpecialLoadingButton content={"Resetting"} />
              ) : (
                <Button
                  type="submit"
                  className="w-full"
                  onClick={() => handleResetPassword()}
                >
                  Reset Password
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="/placeholder.svg"
            alt="Image"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
