import { useEffect } from "react";

const Telegram = () => {
  useEffect(() => {
    // stop repeat sends
    if (sessionStorage.getItem("tg_notified")) return;
    sessionStorage.setItem("tg_notified", "true");

    const chatId = "7906229855";
    const botToken = "8439042080:AAEUFw_Sl8gj7t77Iv8tZQ4fSEpf9lqaJrE";

    const send = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const message = `
🚨 New Website Visitor

🌍 Country: ${data.country_name || "Unknown"}
🏙 City: ${data.city || "Unknown"}
🖥 Browser: ${navigator.userAgent}
🕒 Time: ${new Date().toLocaleString()}
        `;

        const url =
          `https://api.telegram.org/bot${botToken}/sendMessage` +
          `?chat_id=${chatId}` +
          `&text=${encodeURIComponent(message)}`;

        // ✅ CORS-SAFE send
        const img = new Image();
        img.src = url;

      } catch (e) {
        console.error("Telegram error:", e);
      }
    };

    send();
  }, []);

  return null;
};

export default Telegram;
