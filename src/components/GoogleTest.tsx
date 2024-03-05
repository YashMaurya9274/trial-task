import { useGoogleLogin } from "@react-oauth/google";

import axios from "axios";
import { useState } from "react";

const GoogleTest = () => {
  const [emails, setEmails] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const apiUrl = "https://www.googleapis.com/gmail/v1/users/me/threads";
      const headers = { Authorization: `Bearer ${tokenResponse.access_token}` };
      axios
        .get(apiUrl, { headers })
        .then((data) => {
          setEmails(data.data.threads.slice(0, 2));
        })
        .catch((e) => console.log(e));
    },
    scope: "https://mail.google.com/",
  });

  return (
    <div>
      <button
        onClick={() => login()}
        className="m-5 px-3 py-2 rounded-lg border border-gray-300 hover:opacity-75"
      >
        Sign in with Google
      </button>

      <h1 className="text-xl mx-5">Emails</h1>
      {emails.map((email: any) => (
        <p className="p-5">{email.snippet}</p>
      ))}
    </div>
  );
};

export default GoogleTest;
