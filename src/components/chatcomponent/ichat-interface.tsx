"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import axios from "axios";
import LoadingDialog from "../loader/loadingSpinner";
import { useRouter } from "next/navigation";

const ChatInterface = ({ userId }: { userId: string }) => {
  const [chatContent, setChatContent] = useState<any[]>([]);
  const [inputText, setInputText] = useState("");
  const [chatId, setChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  const router = useRouter()

  useEffect(() => {
    const createChat = async () => {
      const response = await fetch("/api/create-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();
      if (data.success) {
        console.log("Setting Chat Id Successful");
        setChatId(data.chatId);
      }
    };

    createChat();
  }, [userId]);

  useEffect(() => {
    const fetchChatContent = async () => {
      if (chatId) {
        const response = await fetch(`/api/get-messages?chatId=${chatId}`);
        const data = await response.json();
        if (data.success) {
          setChatContent(data.messages);
        }
      }
    };

    fetchChatContent();
  }, [chatId]);

  const sendMessage = async () => {
    console.log("Send Message Triggered");
    console.log("This is the Chat Id in SendMessage Function", chatId);
    if (chatId && inputText) {
      setIsLoading(true);

      const newMessage = {
        id: Date.now().toString(),
        content: inputText,
      };
      setChatContent((prevChatContent) => [...prevChatContent, newMessage]);

      try {
        const refineQuote = process.env.NEXT_PUBLIC_AI_REFINEMENT_ENDPOINT;
          console.log("Api Request to the refine endpoint", refineQuote);
          sessionStorage.setItem("quoteData", JSON.stringify(null));
        const refineResponse = await axios.post(
          `${refineQuote}?refinement_query=${encodeURIComponent(inputText)}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (refineResponse.status === 200) {
          console.log("Response Data refined:", refineResponse.data);
          const quoteData = refineResponse.data;
          sessionStorage.setItem("quoteData", JSON.stringify(quoteData));
          router.refresh()
        } else {
          console.error(`Unexpected status code: ${refineResponse.status}`);
        }
          console.log("Adding Message to Db");
          const saveMessageResponse = await fetch("/api/add-message", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chatId,
              content: inputText,
            }),
          });

          const saveMessageData = await saveMessageResponse.json();
          if (!saveMessageData.success) {
            console.error("Failed to save message:", saveMessageData.error);
          }
      } catch (error) {
        console.error("Error occurred:", error);
      } finally {
        setIsLoading(false);
        setInputText("");
      }
    }
  };
  console.log("Chat Content", chatContent);
  return (
      <div className="flex flex-col bg-white border rounded p-4 h-full">
      <div className="flex-1 overflow-y-auto mb-2">
        {chatContent.map((msg, index) => (
          <div key={index} className="bg-gray-300 p-2 my-1 rounded shadow">
            {msg.content}
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      <div className="flex mb-10">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          disabled={isLoading}
        />
        <Button
          onClick={sendMessage}
          className="rounded-r"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Send"} <Send />
        </Button>
      </div>
    </div>
  );
};

export default ChatInterface;
