import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProfileDetails({ profile, datas, deleteProfile }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = profile.find((p) => String(p.number) === String(id));
  const matchedEntries = datas.filter((e) => String(e.dcno) === String(id));

 

  if (!user) {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>User not found or loading...</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );

}
 const today=new Date();
  const endDate=new Date(user.end);
  const remaindays=Math.ceil((endDate-today)/(1000*60*60*24))

  return (
    <>
      <div
        className="profile-details"
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        {/* Profile Card */}
        <div
          className="profile-card"
          style={{
            width: "40%",
            border: "1px solid #ccc",
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <img
            src={user.image || "/user.png"}
            alt="Profile"
            style={{ width: "100%", maxWidth: "200px" }}
          />
          <h3 style={{ color: "blue" }}>NAME: {user.text}</h3>
          <h5 style={{ color: "red" }}>DC.NO: {user.number}</h5>
          <h4>Start:{user.start}</h4>
          <h4>End:{user.end}</h4>
          <h4 style={{color:'red', fontStyle:'italic'}}>Daysleft: {remaindays >0 ? remaindays:"expried"}</h4>
          <button
            onClick={() => {
              deleteProfile(user.number);
              navigate("/Profile"); // Navigate back after delete
            }}
          >
            Delete❌
          </button>
        </div>

        {/* Table Section */}
        <div style={{ width: "60%" }}>
          <strong>Entries:</strong>

          {matchedEntries.length > 0 ? (
            <table
              border="1"
              style={{
                width: "100%",
                marginTop: "8px",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              <thead>
                <tr>
                  <th>Amount (₹)</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {matchedEntries.map((e, i) => (
                  <tr key={i}>
                    <td>{e.number}</td>
                    <td>{e.date}</td>
                  </tr>
                ))}

                {/* Total Row */}
                <tr style={{ fontWeight: "bold", backgroundColor: "#f9f9f9" }}>
                  <td style={{ color: "red" }}>
                    Total: ₹
                    {matchedEntries
                      .reduce(
                        (sum, entry) => sum + Number(entry.number || 0),
                        0
                      )
                      .toLocaleString()}
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p style={{ fontStyle: "italic" }}>No entries yet.</p>
          )}
        </div>
      </div>

      {/* Back Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}

export default ProfileDetails;
