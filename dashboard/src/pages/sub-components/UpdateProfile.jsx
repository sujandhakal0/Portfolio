import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SpecialLoadingButton from "./SpecialLoadingButton";
import {
  clearAllUserErrors,
  getUser,
  resetProfile,
  updateProfile,
} from "@/store/slices/userSlice";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, loading, error, isUpdated, message } = useSelector(
    (state) => state.user
  );

  

  const [fullName, setFullName] = useState(user && user.fullName);
  const [email, setEmail] = useState(user && user.email);
  const [phone, setPhone] = useState(user && user.phone);
  const [aboutMe, setAboutMe] = useState(user && user.aboutMe);

  const [portfolioURL, setPortfolioURL] = useState(user && user.portfolioURL);
  const [githubURL, setGithubURL] = useState(
    user && (user.githubURL === "undefined" ? "" : user.githubURL)
  );
  const [linkedInURL, setLinkedInURL] = useState(
    user && (user.linkedInURL === "undefined" ? "" : user.linkedInURL)
  );
  const [instaURL, setInstaURL] = useState(
    user && (user.instaURL === "undefined" ? "" : user.instaURL)
  );
  const [xURL, setXURL] = useState(
    user && (user.xURL === "undefined" ? "" : user.xURL)
  );

  const [avatar, setAvatar] = useState(user && user.avatar && user.avatar.url);
  const [avatarPreview, setAvatarPreview] = useState(
    user && user.avatar && user.avatar.url
  );
  const [resume, setResume] = useState(user && user.resume && user.resume.url);
  const [resumePreview, setResumePreview] = useState(
    user && user.resume && user.resume.url
  );

  const avatarHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAvatarPreview(reader.result);
      setAvatar(file);
    };
  };
  const resumeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setResumePreview(reader.result);
      setResume(file);
    };
  };
  

  const dispatch = useDispatch()
  const handleupdateProfile = (e) => {
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("aboutMe", aboutMe);
    formData.append("portfolioURL", portfolioURL);
    formData.append("githubURL", githubURL);
    formData.append("linkedInURL", linkedInURL);
    formData.append("instaURL", instaURL);
    formData.append("xURL", xURL);
    formData.append("avatar", avatar);
    formData.append("resume", resume);

    dispatch(updateProfile(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isUpdated) {
      dispatch(getUser());
      dispatch(resetProfile());
    }
    if (message) {
      toast.success(message);
    }
  }, [dispatch, loading, error, isUpdated]);
  return (
    <>
      <div className="w-full h-full">
        <div>
          <div className="grid w-[100%] gap-6">
            <div className="grid gap-2 ">
              <h1 className="text-3xl font-bold ">Update Profile</h1>
              <p className="mb-5">Make changes to your profile</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex items-start lg:justify-between lg:items-center flex-col lg:flex-row gap-5">
              <div className="grid gap-2 w-full sm:w-72">
                <Label>Profile Image</Label>
                <img
                  src={
                    avatarPreview ? `${avatarPreview}` : `./avatarHolder.jpg`
                  }
                  alt="avatar"
                  className="w-full  h-auto sm:w-72 sm:h-72 rounded-full"
                />
                <div className="realtive">
                  <input
                    type="file"
                    className="avatar-update-btn"
                    onChange={avatarHandler}
                  />
                </div>
              </div>

              <div className="grid gap-2 w-full sm:w-72">
                <Label>Resume</Label>
                <Link
                  target="_blank"
                  to={user && user.resume && user.resume.url}
                >
                  <img
                    src={
                      resumePreview ? `${resumePreview}` : `./avatarHolder.jpg`
                    }
                    alt="resume"
                    className="w-full  h-auto sm:w-72 sm:h-72 rounded-2xl"
                  />
                </Link>
                <div className="realtive">
                  <input
                    type="file"
                    className="avatar-update-btn"
                    onChange={resumeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Full Name </Label>
              <Input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label>Email </Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label>Phone </Label>
              <Input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label>About Me</Label>
              <Textarea
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label>Protfolio URL</Label>
              <Input
                value={portfolioURL}
                onChange={(e) => setPortfolioURL(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label>Github URL</Label>
              <Input
                value={githubURL}
                onChange={(e) => setGithubURL(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label>LinkedIn URL</Label>
              <Input
                value={linkedInURL}
                onChange={(e) => setLinkedInURL(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label>Instagram URL</Label>
              <Input
                value={instaURL}
                onChange={(e) => setInstaURL(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label>Twitter(X) URL</Label>
              <Input value={xURL} onChange={(e) => setXURL(e.target.value)} />
            </div>

            <div className="grid gap-2 ">
              {!loading ? (
                <Button onClick={handleupdateProfile } className="w-full">Update Profile</Button>
              ) : (
                <SpecialLoadingButton content={"Updating"} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
