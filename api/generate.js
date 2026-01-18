export default async function handler(req, res) {
    const { niche } = req.query;
    const API_KEY = "AIzaSyBgi3bizPYDaI8iTRRnGHJvj9wEGS8OhRo";

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Agis comme un expert en viralité. Donne un titre choc et un script de 30 secondes pour une vidéo TikTok sur la niche : ${niche}. Le ton doit être provocateur et captivant.` }] }]
            })
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
}
