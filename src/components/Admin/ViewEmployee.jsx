const ViewEmployee = () => (
  <div style={{ padding: "0px 20px 10px 20px" }}>
    <h3 style={{ color: "#ff3232" }}>
      Use the form below to search, group, sort, filter <br />
      and lookup records from our employee directory.
    </h3>
    <iframe
      className="airtable-embed"
      src="https://airtable.com/embed/shrgAMwGddfyomrLy?backgroundColor=cyan&viewControls=on"
      frameBorder="0"
      width="100%"
      height="533"
      title="view-employee-form"
      style={{ background: "transparent", border: "1px solid #ccc" }}
    ></iframe>
  </div>
);

export default ViewEmployee;
