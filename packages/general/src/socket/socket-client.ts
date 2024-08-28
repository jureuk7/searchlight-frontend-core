import { io } from "socket.io-client";

let socket: ReturnType<typeof io> | null = null;

export const initializeSocket = (token: string) => {
  if (!socket) {
    socket = io("https://searchlight.kwl.kr/ambulance", {
      auth: { token: `Bearer ${token}` },
    });

    socket.emit("hospital_connect");

    socket.on("connect", () => {
      console.log("Socket connected");
    });
  }
};

export const sendMessage = (message: string) => {
  if (socket) {
    socket.emit("message", message);
  } else {
    console.error("Socket is not initialized");
  }
};
