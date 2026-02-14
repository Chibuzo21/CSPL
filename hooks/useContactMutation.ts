import { FormData } from "@/app/contact/components/ContactForm/validation";
import { useMutation } from "@tanstack/react-query";

async function submitContact(data: FormData) {
  console.log("🚀 Starting submitContact...");

  try {
    console.log("📡 Attempting fetch...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("✅ Fetch completed. Status:", res.status, "OK:", res.ok);

    // ✅ Check HTTP status
    if (!res.ok) {
      console.log("❌ HTTP error detected");
      const errorData = await res
        .json()
        .catch(() => ({ error: "Network error" }));
      throw new Error(errorData.error || `Server error: ${res.status}`);
    }

    const json = await res.json();
    console.log("📦 Response JSON:", json);

    // ✅ Check API success flag
    if (!json.success) {
      console.log("❌ API returned success: false");
      throw new Error(json.error || "Failed to send message");
    }

    console.log("🎉 Success! Returning data");
    return json;
  } catch (error) {
    console.log("💥 Error caught:", error);

    // ✅ Handle offline/network errors
    if (error instanceof TypeError) {
      console.log("🌐 Network/TypeError detected");
      throw new Error(
        "You appear to be offline. Please check your internet connection.",
      );
    }

    console.log("🔄 Re-throwing error");
    throw error;
  }
}

export function useContactMutation(reset: () => void) {
  return useMutation({
    mutationFn: submitContact,
    onSuccess: (data) => {
      console.log("✅ onSuccess called with data:", data);
      setTimeout(reset, 3000);
    },
    onError: (error) => {
      console.error("❌ onError called with error:", error);
    },
  });
}
