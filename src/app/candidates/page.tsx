"use client";
import Link from "next/link";
import { CandidatesContainer } from "./styles";
import Image from "next/image";
import { useEffect, useState } from "react";

async function getData(take: number) {
  const res = await fetch(
    `http://localhost:3000/api/v1/candidates?take=${take}`
  );

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
}

export default function Candidates() {
  const [take, setTake] = useState(10);
  const [candidates, setCandidates] = useState<Candidate[]>();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await getData(take);
      setCandidates(data.candidates);
      setTotal(data.total);
    };
    fetchCandidates();
  }, [take]);

  return (
    <CandidatesContainer>
      <div className="candidates-boxes-container">
        <div className="candidates-boxes-inner-container">
          {candidates &&
            candidates.map((candidate: Candidate, key: number) => (
              <Link
                key={key}
                className="candidates-box"
                href={`/candidates/${candidate.id}`}
              >
                <Image
                  src={candidate.image_url}
                  alt={candidate.name}
                  width={128}
                  height={128}
                />
                <div className="candidates-box-info">
                  <h3>{candidate.name}</h3>
                  <span className="candidates-title">{candidate.title}</span>
                  <span className="candidates-salary">
                    {`Current salary is at $${parseFloat(
                      candidate.salary
                    ).toFixed(2)} per year`}
                  </span>
                </div>
              </Link>
            ))}
        </div>
        <button
          style={{ display: take >= total ? "none" : "" }}
          onClick={() => setTake((take) => take + 10)}
        >
          See more candidates
        </button>
      </div>
    </CandidatesContainer>
  );
}
