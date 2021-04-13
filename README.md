# Release Downloader
The `release-downloader` GitHub action to download the release tarball from the current repo by release tag


## Usage

```yml
- uses: luisgreen/amplify_deployment@main
  with:
    # Amplify Application ID
    # required: true
    appId: ''

    # Amplify Application branch to deploy
    # required: true
    branchName: ''

    
    # Path where the artifact is located to be deployed
    # required: true
    artifactPath:

    # Region of the Amplify Application
    # required: true
    region:
```

## Sample

```yml
- uses: luisgreen/amplify_deployment@main
  with:
    appId: 'asd8adsjasd9'
    branchName: 'master'
    artifactPath: './myapp.zip'
    region: 'us-west-2'
```
