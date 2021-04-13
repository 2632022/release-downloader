import * as core from "@actions/core";
import * as github from "@actions/github";
import { appendFileSync } from "fs";

async function main() {
  const {
    repo: { owner, repo },
  } = github.context;

  const tag = core.getInput("tag");
  const access_token = core.getInput("access_token");

  const octokit = github.getOctokit(access_token);

  const archive = await octokit.request(
    "GET /repos/{owner}/{repo}/tarball/{tag}",
    {
      owner,
      repo,
      tag,
    }
  );

  await appendFileSync("./archive.tar.gz", Buffer.from(archive.data));
}

main()
  .then(() => core.info("Download Complete."))
  .catch((e) => core.setFailed(e.message));
