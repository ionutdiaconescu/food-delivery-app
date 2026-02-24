import React from "react";

const AboutContainer = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-8 md:py-12" id="about">
      <h1 className="text-3xl md:text-4xl font-bold text-headingColor mb-6">
        About Tasty
      </h1>
      <div className="bg-cardOverlay rounded-xl p-6 md:p-8 backdrop-blur-lg">
        <p className="text-textColor text-base md:text-lg leading-7 mb-4">
          Tasty este o aplicație de food delivery construită pentru comenzi
          rapide și o experiență simplă pentru utilizatori.
        </p>
        <p className="text-textColor text-base md:text-lg leading-7 mb-4">
          Poți descoperi preparate pe categorii, adăuga produse în coș și
          comanda în câțiva pași. Interfața este optimizată pentru desktop și
          mobil.
        </p>
        <p className="text-textColor text-base md:text-lg leading-7">
          Pentru administrare, aplicația include o zonă dedicată unde pot fi
          adăugate produse noi cu imagine, preț și informații nutriționale.
        </p>
      </div>
    </section>
  );
};

export default AboutContainer;
