import { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { verifyNewUser } from "../helpers/axiosHelper";

// show the spinner before loading any content from backend

// grab the query stirngs from url and send it to verify to the server

// call server with e and c

// once the server responds stop the spinner and show the message from the server

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [showSpinner, setShowSpinner] = useState(true);

  const [showResp, setShowResp] = useState({});

  const email = searchParams.get("e");
  const token = searchParams.get("c");

  useEffect(() => {
    verifyEmail();
  }, [email, token]);

  const verifyEmail = async () => {
    try {
      // Make the API call
      const response = await verifyNewUser({ email, token });
      // Update states after receiving the response
      setShowResp(response);
    } catch (error) {
      // Handle errors here, for example:
      setShowResp({
        status: "error",
        message: "An error occurred while verifying the email.",
      });
    } finally {
      // Update the spinner state after the API call is complete
      setShowSpinner(false);
    }
  };

  return (
    <div>
      <div className="text-center">AniTech</div>

      <hr />
      <div className="text-center">
        {showSpinner && <Spinner animation="border" />}
      </div>

      {showResp?.message && (
        <Alert
          className="w-50 m-auto "
          variant={showResp.status === "success" ? "success" : "danger"}
        >
          {showResp.message}
        </Alert>
      )}
    </div>
  );
};

export default VerifyEmail;
