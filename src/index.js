const core = require("@actions/core");
const github = require("@actions/github");

const { readFileSync } = require("fs");

async function main() {
  const octokit = github.getOctokit(token);

  const {
    eventName,
    sha,
    ref,
    repo: { owner, repo },
    payload,
  } = github.context;

  const tag = core.getInput("tag");

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
