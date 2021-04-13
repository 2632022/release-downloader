const core = require("@actions/core");
const github = require("@actions/github");

const { readFileSync } = require("fs");

async function main() {
  const {
    eventName,
    sha,
    ref,
    repo: { owner, repo },
    payload,
  } = github.context;

  const artifact = core.getInput("artifact");
  const token = core.getInput("token");
  const octokit = github.getOctokit(token);

  const release = await octokit.request(
    "GET /repos/{owner}/{repo}/releases/tags/{tag}",
    {
      owner: "octocat",
      repo: "hello-world",
      tag: "tag",
    }
  );

  console.log(release);
}

main()
  .then(() => core.info("Download Complete."))
  .catch((e) => core.setFailed(e.message));
