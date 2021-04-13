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

  const archive = await octokit
    .request("GET /repos/{owner}/{repo}/tarball/{tag}", {
      owner,
      repo,
      tag,
    })
    .then((res) => res.data)
    .catch((e) =>
      core.setFailed(
        `${e.message} - Tag ${tag} was not found on repo ${owner}/${repo}`
      )
    );

  await appendFileSync("./archive.tar.gz", Buffer.from(archive));
}

main()
  .then(() => core.info("Download Complete."))
  .catch((e) => core.setFailed(`${e.message} `));
