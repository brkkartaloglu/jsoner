import express from "express";
import cors from "cors";
import { createLogger, format, transports } from "winston";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

const timezoned = () => {
  return new Date().toLocaleString("tr-TR", {
    timeZone: "Europe/Istanbul",
  });
};

const logger = createLogger({
  levels: logLevels,
  format: format.combine(
    format.timestamp({ format: timezoned }),
    format.simple()
  ),
  transports: [
    new transports.File({
      filename: "C:/Loglar/applicationdependency/application.log",
    }),
  ],
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
  logger.info("Apiye erisildi");
});

app.post("/log", (req, res) => {
  const { logData } = req.body;
  if (logData.includes("Couldn't")) {
    logger.error(logData);
  } else {
    logger.info(logData);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
