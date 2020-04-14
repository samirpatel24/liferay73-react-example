const getBannerContent = async () => {
  var result = [];
  try {
    var requestOptions = {
      crossDomain: true,
      method: "GET",
      headers: {
        Authorization: "Basic dGVzdDphZG1pbjEyMw==",
        "Access-Control-Allow-Origin": "*",
        "cache-control": "no-cache",
      },
      redirect: "follow",
    };
    const domain_url = "https://webserver-liferaysamirpatel-dev.lfr.cloud";
    const siteId = 116145;
    const key = "119177";
    let url =
      domain_url +
      "/o/headless-delivery/v1.0/sites/" +
      siteId +
      "/structured-contents/by-key/" +
      key;

    console.log(url);

    result = await fetch(url, requestOptions).then((response) =>
      response.json()
    );
  } catch (error) {
    console.log(error);
  }
  console.log("Data");

  console.log(result);

  return result;
};

export default getBannerContent;
