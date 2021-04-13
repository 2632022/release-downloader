import * as core from "@actions/core";
import * as github from "@actions/github";

// const { readFileSync } = require("fs");

async function main() {
  const {
    // eventName,
    // sha,
    // ref,
    repo: { owner, repo },
    // payload,
  } = github.context;

  const tag = core.getInput("tag");
  const access_token = core.getInput("access_token");

  const octokit = github.getOctokit(access_token);

  const release = await octokit.request(
    "GET /repos/{owner}/{repo}/releases/tags/{tag}",
    {
      owner,
      repo,
      tag,
    }
  );

  console.log(release);
}

main()
  .then(() => core.info("Download Complete."))
  .catch((e) => core.setFailed(e.message));
