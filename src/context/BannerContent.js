const getBannerContent = async () => {
  var result = [];
  try {
    var requestOptions = {
      crossDomain: true,
      method: "GET",
      headers: {
        Authorization: process.env.REACT_APP_Authorization,
        "Access-Control-Allow-Origin": "*",
        "cache-control": "no-cache",
      },
      redirect: "follow",
    };
    const domain_url = process.env.REACT_APP_DOMAIN;
    const siteId = process.env.REACT_APP_RESORTSITEID;
    const key = process.env.REACT_APP_BANNERKEY;
    let url =
      domain_url +
      "/o/headless-delivery/v1.0/sites/" +
      siteId +
      "/structured-contents/by-key/" +
      key;

    console.log(url);

    result = await fetch(url, requestOptions, {
      mode: "no-cors", // 'cors' by default
    }).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
  console.log("Data");

  console.log(result);

  return result;
};

export default getBannerContent;
