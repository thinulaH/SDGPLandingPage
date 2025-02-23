import React from 'react';

const Loading: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4E8C1',
        zIndex: 50,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {/* Logo with Fade-In and Scale-Up Animation */}
        <div
          style={{
            width: '6rem',
            height: '6rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="public/images/LOGO.png"
            alt="Logo"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              animation: 'fadeInScale 1.5s ease-in-out',
            }}
          />
        </div>

        {/* Typing Animation for Text */}
        <p
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#2E2E2E',
            animation: 'typing 1.5s steps(10, end), blinkCursor 0.75s step-end infinite',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            borderRight: '2px solid #2E2E2E',
          }}
        >
          Loading...
        </p>
      </div>

      {/* Inbuilt CSS for Animations */}
      <style>
        {`
          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes blinkCursor {
            from {
              border-right-color: transparent;
            }
            to {
              border-right-color: #2E2E2E;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;