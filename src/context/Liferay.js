const Liferay = async () => {
  var result = [];
  try {
    var requestOptions = {
      crossDomain: true,
      method: "GET",
      headers: {
        Authorization: process.env.REACT_APP_Authorization,
        "Access-Control-Allow-Origin": "*",
        // "cache-control": "no-cache",
      },
      redirect: "follow",
    };
    const domain_url = process.env.REACT_APP_DOMAIN;
    //const structuredId = 117744;
    const siteId = process.env.REACT_APP_RESORTSITEID;
    const roomstructureId = process.env.REACT_APP_ROOMSTRUCTUREID;
    let url =
      domain_url +
      "/o/headless-delivery/v1.0/sites/" +
      siteId +
      "/structured-contents?filter=(contentStructureId eq " +
      roomstructureId +
      ") ";
    result = await fetch(url, requestOptions, {
      mode: "no-cors", // 'cors' by default
    }).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }

  return result;
};

export default Liferay;
