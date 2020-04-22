const Liferay = async () => {
  var result = [];
  try {
    var requestOptions = {
      crossDomain: true,
      method: "GET",
      headers: {
        Authorization: "Basic dGVzdDphZG1pbjEyMw==",
        "Access-Control-Allow-Origin": "*",
        // "cache-control": "no-cache",
      },
      redirect: "follow",
    };
    const domain_url = "https://webserver-liferaysamirpatel-dev.lfr.cloud";
    //const structuredId = 117744;
    const siteId = 116145;
    let url =
      domain_url +
      "/o/headless-delivery/v1.0/sites/" +
      siteId +
      "/structured-contents?filter=(contentStructureId eq 116154) ";
    result = await fetch(url, requestOptions, {
      mode: "no-cors", // 'cors' by default
    }).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }

  return result;
};

export default Liferay;
