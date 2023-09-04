"use client";
import styled from "styled-components";

export const CandidatesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 128px;
  margin-bottom: 128px;
  background-color: white;

  .candidates-boxes-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    max-width: 1292px;
    .candidates-boxes-inner-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 18px;
      .candidates-box {
        background-color: #caccce;
        padding: 10px;
        border: 1px solid #ddd;
        display: flex;
        border-radius: 8px;
        gap: 32px;

        img {
          border-radius: 100%;
        }

        .candidates-box-info {
          display: flex;
          flex-direction: column;
          gap: 6px;

          h3 {
            font-size: 24px;
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
        }
      }
    }

    button {
      width: max-content;
      padding: 6px 14px;
      background-color: #00a0dc;
      color: #ddd;
      font-size: 18px;
      font-weight: 600;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-transform: uppercase;
    }
  }
`;
