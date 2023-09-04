"use client";
import Image from "next/image";
import { CandidateChatContainer, CandidateContainer } from "./styles";
import Link from "next/link";
import { useEffect, useState } from "react";

async function getData(id: number) {
  const res = await fetch(`http://localhost:3000/api/v1/candidates/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface Candidate {
  id: number;
  name: string;
  title: string;
  salary: string;
  image_url: string;
  job: string;
  description: string;
}

interface Message {
  name: string;
  text: string;
}

export default function Candidate({ params }: { params: { id: number } }) {
  const [candidate, setCandidate] = useState<Candidate>();
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [toggleChat, setToggleChat] = useState(false);
  const [impersonate, setImpersonate] = useState(false);

  const handleSendMessage = () => {
    let newMessages = messages;
    newMessages.push({
      name: impersonate ? candidate?.name : "Recruiter",
      text: newMessage,
    });
    setMessages(newMessages);
  };

  useEffect(() => {
    const fetchCandidate = async () => {
      const c: Candidate = await getData(params.id);
      setCandidate(c);
    };
    fetchCandidate();
  }, [params.id]);

  return (
    <>
      {candidate && (
        <CandidateContainer>
          <div className="upper-div">
            <Link href={"/candidates"}>
              <button className="go-back">Back to candidates page</button>
            </Link>
            <button
              onClick={() => setImpersonate(!impersonate)}
              style={{ backgroundColor: !impersonate ? "#e68523" : "#d6a472" }}
              className="impersonate"
            >
              Impersonate
            </button>
          </div>
          <div className="candidate-upper-container">
            <Image
              src={candidate.image_url}
              alt={candidate.name}
              width={128}
              height={128}
            />
            <div className="candidate-info">
              <h3>{candidate.name}</h3>
              <span className="candidates-job">{candidate.job}</span>
              <span className="candidates-title">{candidate.title}</span>
              <div className="salary-div">
                <span className="candidates-salary">
                  {`Current salary is at $${parseFloat(
                    candidate.salary
                  ).toFixed(2)} per year`}
                </span>
                <button onClick={() => setToggleChat(!toggleChat)}>
                  Start a conversation
                </button>
              </div>
            </div>
          </div>
          <div className="candidate-description">
            <h3>About the candidate</h3>
            <span>{candidate.description}</span>
          </div>
        </CandidateContainer>
      )}
      {toggleChat && (
        <CandidateChatContainer>
          <div className="messages">
            {messages.map((message: any, key: number) => (
              <div className="message" key={key}>
                <span className="who-sent">{message.name}</span>
                <span className="text">{message.text}</span>
              </div>
            ))}
          </div>
          <div className="new-message">
            <input
              type="text"
              placeholder="Type your message:"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              onClick={() => {
                handleSendMessage();
                setNewMessage("");
              }}
            >
              Send
            </button>
          </div>
        </CandidateChatContainer>
      )}
    </>
  );
}
