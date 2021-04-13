# Release Downloader
The `release-downloader` GitHub action to download the release tarball from the current repo by release tag

## Usage

```yml
- uses: luisgreen/release-downloader@main
  with:
    # Release Tag
    # required: true
    tag:
    description: 
    required: true

    # Your GitHub Access Token, defaults to: {{ github.token }}
    # required: true
    access_token:
```
