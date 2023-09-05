import React from 'react';

const Locations = () => {
  return (
    <section className="content-home container-fluid">
      <div className="p-2 my-3 row">
        <h3 className="title h5">Encuéntranos en:</h3>

        <div className="col-12 col-md-6 d-flex flex-wrap align-items-center">
          <p className="col-12 col-md-6 align-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            aliquid id, qui quidem molestias, fugiat recusandae ab? Ipsa
            corrupti veniam voluptatibus.
          </p>

          <iframe
            className="col-12 col-md-6"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.855340355148!2d-103.35870988571858!3d20.675463505122472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b137659278b3%3A0xc604925cc03e8ad1!2zRWwgYmHDumw!5e0!3m2!1ses!2smx!4v1656369158405!5m2!1ses!2smx"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="col-12 col-md-6 d-flex flex-wrap align-items-center">
          <p className="col-12 col-md-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            aliquid id, qui quidem molestias, fugiat recusandae ab? Ipsa
            corrupti veniam voluptatibus.
          </p>

          <iframe
            className="col-12 col-md-6"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.855340355148!2d-103.35870988571858!3d20.675463505122472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b137659278b3%3A0xc604925cc03e8ad1!2zRWwgYmHDumw!5e0!3m2!1ses!2smx!4v1656369158405!5m2!1ses!2smx"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Locations;
