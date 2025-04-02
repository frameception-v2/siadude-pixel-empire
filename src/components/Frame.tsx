"use client";

import { useEffect, useCallback, useState } from "react";
import { useFrameSDK } from "~/hooks/useFrameSDK";

export default function Frame() {
  const { isSDKLoaded, sdk } = useFrameSDK();
  const [hasClicked, setHasClicked] = useState(false);

  const handleClick = useCallback(() => {
    setHasClicked(true);
    // Open the Empire Builder website in a new tab
    window.open("https://www.empirebuilder.world/empire/0x0c22b5e951683f6fadebdcb931cdf801d2aaa70e", "_blank");
  }, []);

  useEffect(() => {
    if (isSDKLoaded && sdk) {
      // Signal to the Farcaster client that the frame is ready
      sdk.actions.ready();
    }
  }, [isSDKLoaded, sdk]);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[300px] mx-auto py-2 px-2">
      <div className="retro-game-frame">
        <div className="retro-screen">
          <div className="retro-header">
            <h1 className="retro-title">$HMBT EMPIRE</h1>
            <p className="retro-subtitle">GUARDIAN: SIADUDE</p>
          </div>
          
          <div className="retro-content">
            <div className="retro-stats">
              <div className="retro-stat">
                <span className="retro-label">DISTRIBUTED</span>
                <span className="retro-value">$212</span>
              </div>
              <div className="retro-stat">
                <span className="retro-label">BURNED</span>
                <span className="retro-value">20.57M HMBT</span>
              </div>
            </div>
            
            <div className="retro-treasury">
              <h2 className="retro-section-title">TREASURY</h2>
              <p className="retro-treasury-value">$137.87 USD</p>
            </div>
            
            <button 
              onClick={handleClick}
              className={`retro-button ${hasClicked ? 'retro-button-clicked' : ''}`}
            >
              {hasClicked ? 'VISITING EMPIRE...' : 'VISIT EMPIRE'}
            </button>
          </div>
          
          <div className="retro-footer">
            <p className="retro-footer-text">PRESS BUTTON TO CONTINUE</p>
            <p className="retro-footer-text blink">▶</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .retro-game-frame {
          background: #000;
          border: 4px solid #444;
          border-radius: 8px;
          padding: 12px;
          box-shadow: 0 0 10px rgba(0, 255, 0, 0.5), 
                      inset 0 0 8px rgba(0, 255, 0, 0.3);
          font-family: 'Press Start 2P', monospace;
        }
        
        .retro-screen {
          background: #111;
          color: #0f0;
          padding: 16px;
          border-radius: 4px;
          text-shadow: 0 0 5px rgba(0, 255, 0, 0.7);
        }
        
        .retro-header {
          text-align: center;
          margin-bottom: 16px;
          border-bottom: 2px solid #0f0;
          padding-bottom: 8px;
        }
        
        .retro-title {
          font-size: 18px;
          margin: 0 0 4px 0;
          letter-spacing: 1px;
        }
        
        .retro-subtitle {
          font-size: 12px;
          margin: 0;
          opacity: 0.8;
        }
        
        .retro-content {
          margin: 16px 0;
        }
        
        .retro-stats {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        
        .retro-stat {
          display: flex;
          flex-direction: column;
        }
        
        .retro-label {
          font-size: 10px;
          opacity: 0.7;
        }
        
        .retro-value {
          font-size: 14px;
          margin-top: 4px;
        }
        
        .retro-treasury {
          background: rgba(0, 255, 0, 0.1);
          padding: 8px;
          border-radius: 4px;
          margin-bottom: 16px;
          border: 1px solid rgba(0, 255, 0, 0.3);
        }
        
        .retro-section-title {
          font-size: 12px;
          margin: 0 0 8px 0;
          text-decoration: underline;
        }
        
        .retro-treasury-value {
          font-size: 16px;
          margin: 0;
          text-align: center;
        }
        
        .retro-button {
          background: #0f0;
          color: #000;
          border: none;
          width: 100%;
          padding: 10px;
          font-family: 'Press Start 2P', monospace;
          font-size: 14px;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.2s;
          box-shadow: 0 4px 0 #0a0;
          position: relative;
          top: 0;
        }
        
        .retro-button:hover {
          background: #0c0;
        }
        
        .retro-button:active, .retro-button-clicked {
          box-shadow: 0 0 0 #0a0;
          top: 4px;
        }
        
        .retro-footer {
          margin-top: 16px;
          text-align: center;
          font-size: 10px;
          opacity: 0.7;
        }
        
        .blink {
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 49% { opacity: 0; }
          50%, 100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
