"use client";
import styled from "styled-components";

export const CandidateContainer = styled.div`
  width: 100%;
  max-width: 1292px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 128px;
  margin-bottom: 128px;

  .upper-div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .go-back {
      width: max-content;
      padding: 6px 8px;
      color: #ddd;
      font-size: 14px;
      font-weight: 600;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-transform: uppercase;
    }

    .impersonate {
      width: max-content;
      background-color: #e68523;
      padding: 6px 8px;
      color: white;
      font-size: 14px;
      font-weight: 600;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-transform: uppercase;
    }
  }

  .candidate-upper-container {
    width: 100%;
    padding: 20px;
    display: flex;
    background-color: rgba(0, 160, 220, 0.2);
    flex-direction: column;
    gap: 12px;
    border-radius: 5px;
    border: 2px solid rgba(0, 0, 0, 0.1);

    img {
      border-radius: 100%;
      border: 1px solid white;
    }

    .candidate-info {
      display: flex;
      flex-direction: column;
      gap: 12px;
      color: #313335;

      h3 {
        font-size: 24px;
        color: #313335;
      }

      .candidates-job {
        font-size: 18px;
        color: #313335;
      }

      .candidates-title {
        font-size: 18px;
        color: #313335;
      }

      .candidates-salary {
        font-size: 18px;
        font-weight: 600;
        color: #313335;
      }

      .salary-div {
        width: 100%;
        display: flex;
        justify-content: space-between;

        button {
          width: max-content;
          padding: 6px 8px;
          background-color: #00a0dc;
          color: #ddd;
          font-size: 14px;
          font-weight: 600;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          text-transform: uppercase;
        }
      }
    }
  }

  .candidate-description {
    width: 100%;
    padding: 20px;
    display: flex;
    background-color: rgba(0, 160, 220, 0.2);
    flex-direction: column;
    gap: 12px;
    border-radius: 5px;
    border: 2px solid rgba(0, 0, 0, 0.1);

    h3 {
      font-size: 24px;
      color: #313335;
    }

    span {
      font-size: 18px;
      color: #313335;
    }
  }
`;

export const CandidateChatContainer = styled.div`
  width: 300px;
  height: 400px;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 200px;
  background-color: #caccce;
  border-top: 1px solid #313335;
  border-right: 1px solid #313335;
  border-left: 1px solid #313335;

  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;

  .new-message {
    width: 100%;
    display: flex;

    input {
      width: 100%;
      font-size: 16px;
      padding: 2px;
      outline: none;
    }

    button {
      font-size: 16px;
      padding: 2px;
    }
  }

  .messages {
    height: 100%;
    background-color: white;
    border-radius: 8px;
    padding: 8px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 6px;

    .message {
      display: flex;
      flex-direction: column;
      gap: 2px;
      span {
        color: black;
      }

      .who-sent {
        color: #2c2c2c;
        font-size: 14px;
        font-weight: 800;
      }
    }
  }
`;
