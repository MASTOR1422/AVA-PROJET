export default async function handler(req, res) {
    const { niche } = req.query;
    const API_KEY = "AIzaSyBgi3bizPYDaI8iTRRnGHJvj9wEGS8OhRo"; 

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Donne un titre viral et un script TikTok pour la niche : ${niche}` }] }]
            })
        });

        const data = await response.json();
        
        // Si Google renvoie une erreur, on la transmet pour savoir ce qui se passe
        if (data.error) {
            return res.status(400).json({ error: data.error.message });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur interne" });
    }
}
