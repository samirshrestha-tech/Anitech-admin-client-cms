import { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";

// show the spinner before loading any content from backend

// grab the query stirngs from url and send it to verify to the server

// call server with e and c

// once the server responds stop the spinner and show the message from the server

const VerifyEmail = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  const [showResp, setShowResp] = useState("");
  return (
    <div>
      <div className="text-center">AniTech</div>

      <hr />
      <div className="text-center">
        {showSpinner && <Spinner animation="border" />}
      </div>

      {showResp.message && (
        <Alert variant={showResp.status === "sucess" ? "primary" : "danger"}>
          {showResp.message}
        </Alert>
      )}
    </div>
  );
};

export default VerifyEmail;
