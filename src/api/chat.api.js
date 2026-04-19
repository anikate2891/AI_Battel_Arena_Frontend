import { apiFetch } from "../utils/api.js";

export const sendChat = async (problem) => {
    const response = await apiFetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ problem }),
    });

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    return response.body.getReader();
};

export const deleteHistoryChat = async (chatId) => {
    const response = await apiFetch(`/api/chats/${chatId}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(`Delete failed: ${response.status}`);
    }
};