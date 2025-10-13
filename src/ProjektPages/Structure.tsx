

import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

type StructureProps = {
  pic1: string;
  pic2: string;
  pic3: string;
  titel: string;
  desc: React.ReactNode;
  tech: string;
  git: string;
  live: string;
};

const Structure: React.FC<StructureProps> = ({ pic1, pic2, pic3, titel, desc, tech, git, live }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
        setSelectedImage(null);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  const openModal = (imageSrc: string): void => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };


  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto text-center py-10 sm:py-16 lg:py-20 text-content px-4 sm:px-6">
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-header">{titel}</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <img
              src={pic1}
              alt={`${titel} Screenshot1`}
              className="w-full rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
              onClick={() => openModal(pic1)}
            />
          </div>
          <p className="text-left">
            {desc}
          </p>
          <p className="text-left">
            Haupttechnologien: <span className="text-purple-400 font-medium">{tech}</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-[var(--primary-purple)] text-white font-semibold rounded-lg hover:bg-[var(--accent-purple)] transition text-sm sm:text-base"
            >
              Live-Seite
            </a>

            <a
              href={git}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 border border-[var(--primary-purple)] text-[var(--primary-purple)] font-semibold rounded-lg hover:bg-[var(--primary-purple)] hover:text-white transition text-sm sm:text-base"
            >
              GitHub Repo
            </a>
          </div>

          <div className="my-8 sm:my-10 lg:my-12">
            <img
              src={pic2}
              alt={`${titel} Screenshot2`}
              className="w-full rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
              onClick={() => openModal(pic2)}
            />
          </div>
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <img
              src={pic3}
              alt={`${titel} Screenshot3`}
              className="w-full rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
              onClick={() => openModal(pic3)}
            />
          </div>
        </div>
      </div>

      {isModalOpen && selectedImage && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={handleBackdropClick}
          role="dialog"
          aria-label="Enlarged image view"
          tabIndex={-1}
        >

          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#4B0082] backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl hover:bg-[#8B45FF] cursor-pointer transition-colors"
            aria-label="Close image modal"
          >
            <X />
          </button>

          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl object-contain"
            onClick={(e: React.MouseEvent<HTMLImageElement>) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Structure;
