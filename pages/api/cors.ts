import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  res.setHeader("Expires", "-1");
  res.setHeader("Cache-Control", "no-store, must-revalidate");

  return new Promise(() =>
    httpProxyMiddleware(req, res, {
      target: req.url.replace("/api/cors?", ""),
      pathRewrite: {
        "^/api/cors": "",
      },
    })
  );
};
