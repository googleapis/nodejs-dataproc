<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Dataproc: Node.js Client](https://github.com/googleapis/nodejs-dataproc)

[![release level](https://img.shields.io/badge/release%20level-alpha-orange.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dataproc.svg)](https://www.npmjs.org/package/@google-cloud/dataproc)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-dataproc/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-dataproc)

> Node.js idiomatic client for [Cloud Dataproc][product-docs].

[Cloud Dataproc](https://cloud.google.com/dataproc/docs) is a managed Apache Spark and Apache Hadoop service that lets you take advantage of open source data tools for batch processing, querying, streaming, and machine learning.


* [Cloud Dataproc Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-dataproc](https://github.com/googleapis/nodejs-dataproc)
* [Cloud Dataproc Documentation][product-docs]

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  Select or create a Cloud Platform project.

    [Go to the projects page][projects]

1.  Enable billing for your project.

    [Enable billing][billing]

1.  Enable the Google Cloud Dataproc API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dataproc.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

### Installing the client library

    npm install --save @google-cloud/dataproc

### Using the client library

```javascript
if (
  !process.env.GCLOUD_PROJECT ||
  !process.env.GOOGLE_APPLICATION_CREDENTIALS
) {
  throw new Error(
    'Usage: GCLOUD_PROJECT=<project_id> GOOGLE_APPLICATION_CREDENTIALS=<path to json key> node #{$0}'
  );
}

const dataproc = require('@google-cloud/dataproc');

const client = new dataproc.v1.ClusterControllerClient({
  // optional auth parameters.
});

const projectId = process.env.GCLOUD_PROJECT;

// Iterate over all elements.
const region = 'global';
const request = {
  projectId: projectId,
  region: region,
};

client.listClusters(request).then(responses => {
  const resources = responses[0];
  console.log('Total resources:', resources.length);
  for (let i = 0; i < resources.length; i += 1) {
    console.log(resources[i]);
  }
});

// Or obtain the paged response.
const options = {autoPaginate: false};
const callback = responses => {
  // The actual resources in a response.
  const resources = responses[0];
  // The next request if the response shows that there are more responses.
  const nextRequest = responses[1];
  // The actual response object, if necessary.
  // const rawResponse = responses[2];
  for (let i = 0; i < resources.length; i += 1) {
    console.log(resources[i]);
  }
  if (nextRequest) {
    // Fetch the next page.
    return client.listClusters(nextRequest, options).then(callback);
  }
};
client.listClusters(request, options).then(callback);

client.listClustersStream(request).on('data', element => {
  console.log(element);
});
```


The [Cloud Dataproc Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

This library is considered to be in **alpha**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-dataproc/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-dataproc/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/dataproc/latest/
[product-docs]: https://cloud.google.com/dataproc/docs
[shell_img]: //gstatic.com/cloudssh/images/open-btn.png

