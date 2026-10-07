const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("DevOps CIE App is running!");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.get("/metrics", (req, res) => {
    res.type("text/plain").send(
`# HELP app_requests_total Total number of requests
# TYPE app_requests_total counter
app_requests_total 1
`
    );
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
