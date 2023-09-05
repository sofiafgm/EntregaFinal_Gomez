import React from 'react';

const Content = () => {
  return (
      <div className="row">
        <img
          className="img-about col-12 col-md-6"
          src="../images/caos.jpg"
          alt="Un caos organizado"
        />

        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <div className="container-fluid bg-black">
            <p className="title h4">Un caos organizado</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              nam a, repellat iste, magnam voluptate eos laborum unde nobis
              labore veniam repudiandae id ab accusamus dicta maiores voluptatem
              delectus enim.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <div className="container-fluid bg-black">
            <p className="title h4">Taily caos</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              nam a, repellat iste, magnam voluptate eos laborum unde nobis
              labore veniam repudiandae id ab accusamus dicta maiores voluptatem
              delectus enim.
            </p>
          </div>
        </div>

        <img
          className="img-about col-12 col-md-6"
          src="../images/taily.jpg"
          alt="Taily"
        />
      </div>
  );
};

export default Content;
