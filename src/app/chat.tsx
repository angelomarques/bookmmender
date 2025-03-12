"use client";

import { useEffect, useState } from "react";

export default function Chat() {
  const [response, setResponse] = useState("");
  useEffect(() => {
    fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: [] }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data));
  }, []);

  return (
    <div>
      <code>{JSON.stringify(response, null, 2)}</code>
    </div>
  );
}
