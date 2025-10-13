const ImpressumPage = () => {
  return (
    <div className="max-w-4xl mx-auto text-center py-20 text-content">
      <div className="mb-16">
        <h2 className="text-5xl font-bold mb-4">
          <span className="text-header">Impressum</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
        <p>
          <span className="text-white font-semibold">Angaben gemäß § 5 TMG</span>
        </p>
        <p>
          Niklas Beck <br />
          Dorfstraße 140a <br />
          25569 Kremperheide
        </p>

        <p>
          <span className="text-white font-semibold">Kontakt:</span><br />
          Telefon: 015252590744 <br />
          E-Mail: niklasbeck18@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ImpressumPage;
