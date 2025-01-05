import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState(null);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAttempts(attempts + 1);
    const response = await fetch("/api/validate");
    const result = await response.json();
    setMessage(result.message);

    setTimeout(() => {
      alert(
        `🚨 ALERT: Bot Identified.\nPlease stay where you are.`
      );
    }, 2000);
  };

  return (
    <div className="container">
      <header>
        <h1>CRAPTCHA</h1>
        <p className="subtitle">
          The ultimate defense against spam and bots. <br />
          <strong style={{ color: "#dc3545" }}>100% Secure. 0% Accessible.</strong>
        </p>
      </header>

      <main>
        <div className="challenge">
          <h2 className="challenge-title">Prove You’re Not a Bot</h2>
          <div className="task">
            <p>
              <strong>Challenge:</strong> What's the password to Mark Zuckerberg's Facebook account? <br />
            </p>
          </div>
          <p>
          Failure to complete these steps will result in **permanent denial** of access. (We take spam seriously.)
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="answer" className="form-label">
            Enter Your Answer Below:
          </label>
          <input
            type="text"
            id="answer"
            placeholder="e.g., TotallyImpossible123"
            className="form-input"
          />

            <button
            type="submit"
            className={`captcha-button ${attempts >= 1 ? "bot-detected" : ""}`}
            disabled={attempts >= 1}
            >
            {attempts >= 1 ? "You're a bot" : "Submit Answer"}
            </button>

        </form>

        {message && (
          <p className="response-message">
            {message} <br />
          </p>
        )}
      </main>

      <footer>
        <p>
          Made with 💩 by CRAPTCHA Inc. <br />
          Keeping bots out and frustrating humans since 2025.
        </p>
        <p>
          <small>
            Disclaimer: No real humans or bots were expected to pass this challenge. Ever.
          </small>
        </p>
      </footer>

      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 2rem;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
        }

        header {
          margin-bottom: 2rem;
        }

        header h1 {
          font-size: 3rem;
          color: #dc3545;
          margin-bottom: 0.5rem;
        }

        header .subtitle {
          font-size: 1.5rem;
          color: #555;
        }

        .challenge {
          margin-bottom: 2rem;
          padding: 1rem;
          border: 2px solid #dc3545;
          border-radius: 10px;
          background-color: #f9f9f9;
        }

        .challenge-title {
          font-size: 1.8rem;
          color: #007bff;
        }

        .challenge-text {
          font-size: 1.2rem;
          margin: 1rem 0;
        }

        .task {
          margin: 1rem 0;
          padding: 0.5rem;
          border: 1px dashed #dc3545;
          background-color: #fff8f8;
          border-radius: 8px;
          font-size: 1.1rem;
          line-height: 1.5;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .form-input {
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-bottom: 1rem;
          width: 80%;
        }

        .response-message {
          color: #dc3545;
          font-weight: bold;
          margin-top: 1rem;
          font-size: 1.1rem;
        }

        footer {
          margin-top: 2rem;
          color: #888;
          font-size: 0.9rem;
        }

        .captcha-button {
            background-color: #007bff;
            color: white;
            font-size: 1.2rem;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
        
          .captcha-button:hover {
            background-color: #0056b3;
          }
        
          .captcha-button:disabled {
            cursor: not-allowed;
          }
        
          .bot-detected {
            background-color: #dc3545 !important; /* Red color when disabled */
            color: #fff;
          }
      `}</style>
    </div>
  );
}
