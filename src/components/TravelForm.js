import { useState } from "react";

function TravelForm() {
  const [location, setLocation] = useState("");
  const [imgURL, setImgURL] = useState("");

  function handleSubmit(e) {
    const formInfo = { location, imgURL };

    fetch("http://localhost:3001/Destinations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formInfo)
    })
  };

  return (
    <>
      <form className="TravelForm" onSubmit={handleSubmit}>
        <div>
          <label className="dest-label">LOCATION: </label>

          <input
            name="Location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <br />
          <label className="dest-label">IMG URL: </label>
          <input
            name="IMG URL"
            placeholder="Paste a URL of an image of the destination"
            type="text"
            onChange={(e) => setImgURL(e.target.value)}
            value={imgURL}
          />
          <br />
          <button className="button">Submit</button>
        </div>
      </form>
    </>
  );
}

export default TravelForm;
