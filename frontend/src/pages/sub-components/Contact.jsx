import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(
        "https://portfolio-backend-91np.onrender.com/api/v1/message/send",
        { senderName, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setSenderName("");
        setSubject("");
        setMessage("");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setLoading(false);
      });
  };
  return (
    <div className="overflow-x-hidden mb-8">
      <h1 className="overflow-x-hidden text-[2rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem]  font-semibold letter-spaced text-gray-800 dark:text-gray-100">
        Contact
      </h1>

      <form onSubmit={handleMessage} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 px-1.5">
          <Label className="text-xl">Your Name</Label>
          <Input
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col gap-2 px-1.5">
          <Label className="text-xl">Subject</Label>
          <Input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
          />
        </div>
        <div className="flex flex-col gap-2 px-1.5 bg">
          <Label className="text-xl">Message</Label>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
          />
        </div>
        <div className="flex justify-center">
          {!loading ? (
            <Button className=" bg-gray-200 hover:bg-gray-500  flex items-center gap-2 flex-row mt-1">
              SEND MESSAGE
            </Button>
          ) : (
            <button
              disabled
              type="button"
              className="w-full sm:w-52 text-slate-900  bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-white dark:hover:bg-slate-200 dark:focus:ring-blue-800 inline-flex items-center"
            >
              Sending...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
