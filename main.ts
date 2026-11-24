// Entry for "Make the AI Judge Laugh: the Office Joke Open"
// (make.fun competition u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
//
// The whole entry is one single-line joke about office life, written to
// /output/entry.txt. No network, no secrets, no input files: the joke is
// hardcoded below and written verbatim.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My manager asked me to 'take ownership' of the project, so I changed all the passwords and now nobody else can log in.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
