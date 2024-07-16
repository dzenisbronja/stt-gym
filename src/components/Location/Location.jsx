import "./Location.css";

const LocationComponent = () => {
  return (
    <div className="Location" id="location">
      <h2 className="location-title stroke-text" data-order="2">
        Lokacija
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702.2641715729742!2d20.51673518551539!3d43.142005941672394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475629fdd7a3c001%3A0x78cd0ce3fcfec2cb!2sSandzak%20top%20team!5e0!3m2!1sen!2srs!4v1715113260501!5m2!1sen!2srs"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title='Google Maps location of "Sandzak top team" gym'
        className="location-info"
        height="450"
      ></iframe>
    </div>
  );
};

export default LocationComponent;
