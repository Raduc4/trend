import Mailjet from "node-mailjet";
import express from "express";
const app = express();

// Body parser middleware to parse request bodies (if not globally applied)
app.use(express.json());

app.post("/", async (req, res) => {
  const { email, phone, message, name } = req.body;

  // Aceste credentiale se iau din mailjet
  // client id si secret key
  // se gasesc sus in header la sectiunea API
  // https://app.mailjet.com/account/apikeys
  // https://app.mailjet.com/signup
  const mailjet = Mailjet.apiConnect(
    "",
    // -> "client id"
    ""
    // -> "secret key"
  );
  try {
    const request = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "office@trendseter.md",
            Name: "Your Name",
          },
          To: [{ Email: "office@trendseter.md" }],
          Subject: "New Customer",
          TextPart: `Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Message: ${message}`,
        },
      ],
    });
    console.log(request.response.data);
    res.status(200).json({ data: request.response.statusText });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// Export the server middleware
export default {
  path: "/api",
  handler: app,
};
